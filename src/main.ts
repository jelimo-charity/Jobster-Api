import { Hono } from "hono";
import "dotenv/config";
import { serve } from '@hono/node-server';
import { html } from 'hono/html';
import { jobRouter } from "./jobs/jobs.router";
import {cors} from 'hono/cors'
//routes
import { authRouter } from './auth/auth.router';
import { userRouter } from "./users/user.route";

const app = new Hono();


app.use("*", cors())

app.get("/", async (c) => {
   return c.json({message: "Hello World"});
});
app.route('/', jobRouter)


app.route('/', authRouter )
app.route('/', userRouter)


serve({
    fetch: app.fetch,
    port:Number(process.env.PORT)
})
console.log(`Server is running on http://localhost:${process.env.PORT}`)