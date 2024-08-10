import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode,sign,verify } from "hono/jwt"
export const userRouter =  new Hono<{
    Bindings: {
      DATABASE_URL: string;
      jwtsecret:string;
    };
  }>()

userRouter.get("/signup", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
   try{
    const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
        },
      }); 
      const token = await sign({id:user.id}, c.env.jwtsecret)
      return c.json({jwt:token});
   }catch(e){
    console.log(e)
    return c.json({msg:"error"})
   }
  
    
  
    
  });
  userRouter.get("/signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    try {
        const user =await prisma.user.findUnique({
            where:{
              email: body.email,
              password: body.password,
            }
          })
          //@ts-ignore
          const jwtToken:string = await sign({id:user.id},c.env.jwtsecret) 
    return c.json({jwt:jwtToken})
    } catch (error) {
        console.log(error)
        c.status(403);
        return c.json({error: "Invalid credentials"})
    }
   

  });