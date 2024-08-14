import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import {
  createBlogInput,
  updateBlogInput,
} from "@shrinivas_2708/medium-common";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    jwtsecret: string;
  };
  Variables: {
    userId: string;
  };
}>();
blogRouter.use("/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const token = c.req.header("authorization");
  if (!token) {
    c.status(401);
    return c.json({ error: "Missing token" });
  }

  const decoded = await verify(token, c.env.jwtsecret);
  //@ts-ignore
  if (decoded) {
    //@ts-ignore
    c.set("userId", decoded.id);
    await next();
  } else {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const authorId = c.get("userId");
  const d = new Date()
  const month = d.getMonth()
  const year = d.getFullYear()
  const date = d.getDate()
  const publishedDate = new Date(year,month,date).toISOString()
  
  const { success } = createBlogInput.safeParse(body);
  console.log(body)
  if (!success) {
    c.status(411);
    return c.json({ msg: "wrong inputs" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId,
        publishedDate
      },
    });
    return c.json({
      blogId: blog.id,
      publishedDate
      });
  } catch (error) {
    console.log(error);
    return c.json({ msg: "Unable to create" });
  }
});
blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ msg: "wrong inputs" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({ msg: "Updated the blog" });
});
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blogs = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json(blogs);
  } catch (error) {
    console.log(error);
  }
});
blogRouter.get("/:id", async (c) => {
  // const body = await c.req.json()
  const id = c.req.param().id;
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blog = await prisma.blog.findFirst({
    where: {
      //@ts-ignore
      id: id,
    },
    select: {
      content: true,
      title: true,
      id: true,
      authorId: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  console.log(id);
  return c.json({
    title: blog?.title,

    content: blog?.content,
    id: blog?.id,
    aunthorName: blog?.author.name,
    authorId: blog?.authorId,
  });
});
