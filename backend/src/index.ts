import { Hono } from 'hono'

const app = new Hono()

app.get('/app/v1/signup', (c) => {
  return c.text('Hello Hono!')
})
app.get('/app/v1/signin', (c) => {
  return c.text('Hello Hono!')
})
app.post('/app/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.put('/app/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.get('/app/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

export default app
