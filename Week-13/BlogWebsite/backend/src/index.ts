import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate())

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup', (c)=>{
  return  c.text("User sign up")
})

app.post('/api/v1/user/signin', (c)=>{
  return  c.text("User sign in")
})

app.post('/api/v1/blog', (c)=>{
  return  c.text("See blog")
})

app.put('/api/v1/blog', (c)=>{
  return  c.text("update blog")
})

app.get('/api/v1/blog/:id', (c)=>{
  const id = c.req.param('id');
  console.log(id);
  return  c.text("See blog by id")
})

app.get('/api/v1/blog/bulk', (c)=>{
  return  c.text("See blog")
})

export default app
