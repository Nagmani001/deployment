import express, { Request, Response } from "express";
import { prismaClient } from "@repo/db/client"

const app = express();


app.get("/", (req: Request, res: Response) => {
  res.send("hji")
})

app.listen(3001, () => {
  console.log("server is running on port 3001");
})
