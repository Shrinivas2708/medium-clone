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
    const isUserExist = await prisma.user.findUnique({
      where:{
        email: body.email,
      }
    })
    console.log(isUserExist)
    if(isUserExist){
      c.status(409)
      return c.json({message:"email already exist"})
    }
    const user = await prisma.user.create({
        data: {
          name:body.name,
          email: body.email,
          password: body.password,
         
        },
      }); 
      const token = await sign({id:user.id}, c.env.jwtsecret)
      return c.json({
        jwt:token,
        userName:body.name
      });
   }catch(e){
    console.log(e)
    c.status(411)
    return c.json({msg:"Error While Creating User"})
   }
  
    
  
    
  });

userRouter.get("/me", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const token = c.req.header("authorization");
    if (!token) {
      c.status(401);
      return c.json({ error: "Missing token" });
    }
    const decoded = await verify(token, c.env.jwtsecret) as { id: string };
    if (decoded) {
      const user = await prisma.user.findUnique({
        where: {
          id: decoded.id,
        },
        select: {
          name: true,
          email: true,
          
        },
      });
      return c.json(user);
    } else {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    

})

  userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body)
    if(!success) {c.status(411) 
      return c.json({message:"incorrect inputs"})}
    try {
      console.log("reached above the user find")
        const user =await prisma.user.findUnique({
            where:{
              email: body.email,
              password: body.password,
            }
          })
          if(user == null) {
            // console.log("Id not found")
             c.status(404);
             return c.json({msg:"User doesn't exit"})
            }


          console.log("reached below the user find")
          console.log(user)
          //@ts-ignore
          const jwtToken:string = await sign({id:user.id},c.env.jwtsecret)
          console.log("reached below the jwt") 
    return c.json({jwt:jwtToken})
    } catch (error) {
        console.log(error)
        c.status(403);
        return c.json({error: "Invalid credentials"})
    }
   

  });