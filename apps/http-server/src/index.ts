import { prismaClient } from "@repo/db/client";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hi there")
});

app.post("/signup", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
  const response = await prismaClient.user.create({
    data: {
      username,
      password,
    }
  });
  res.json({
    msg: "user created",
    id: response.id
  })
});


app.listen(3001, () => {
  console.log("server is running on port 3001");
})
