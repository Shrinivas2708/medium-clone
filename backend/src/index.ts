import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode,sign,verify } from "hono/jwt"
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    jwtsecret:string;
  };
}>();
app.use('/api/v1/blog/*', async (c,next)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const token = c.req.header("authorization")
  if(!token){
    c.status(401);
    return c.json({error: "Missing token"})
  }

    const decoded = await verify(token, c.env.jwtsecret);
    //@ts-ignore
    if(decode.id){
      await next()
    }else{
      c.status(401);
      return c.json({error: "unauthorized"})
    }
})
app.get("/app/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  }); 

  const token = await sign({id:user.id}, c.env.jwtsecret)

  return c.json({jwt:token});
});
app.get("/app/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const user =await prisma.user.findUnique({
    where:{
      email: body.email,
      password: body.password,
    }
  })
  if(!user){
    c.status(403);
    return c.json({error: "Invalid credentials"})
  }
  const jwtToken:string = await sign({id:user.id},c.env.jwtsecret) 
  return c.json({jwt:jwtToken})
});
app.post("/app/v1/blog", (c) => {
  return c.text("Hello Hono!");
});
app.put("/app/v1/blog", (c) => {
  return c.text("Hello Hono!");
});
app.get("/app/v1/blog/:id", (c) => {
  return c.text("Hello Hono!");
});

export default app;
