import z from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
});

export type signupInput = z.infer<typeof signupInput>;
export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type signinInput = z.infer<typeof signinInput>;

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  authorId:z.string()
});

export type createBlogInput = z.infer<typeof createBlogInput>;

export const updateBlogInput = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  id: z.string(),
});

export type updateBlogInput = z.infer<typeof updateBlogInput>;
