import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode,sign,verify } from "hono/jwt"
import { signinInput, signupInput } from "@shrinivas_2708/medium-common";
export const userRouter =  new Hono<{
    Bindings: {
      DATABASE_URL: string;
      jwtsecret:string;
    };
  }>()

userRouter.post("/signup", async (c) => {

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body)
    if(!success) {c.status(411) 
      return c.json({message:"incorrect inputs"})}
   try{
    const user = await prisma.user.create({
        data: {
          name:body.name,
          email: body.email,
          password: body.password,
         
        },
      }); 
      const token = await sign({id:user.id}, c.env.jwtsecret)
      return c.json({jwt:token,userDate:user.createAt});
   }catch(e){
    console.log(e)
    return c.json({msg:"error"})
   }
  
    
  
    
  });
  userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body)
    if(!success) {c.status(411) 
      return c.json({message:"incorrect inputs"})}
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