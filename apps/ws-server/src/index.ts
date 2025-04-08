import { WebSocket, WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client";


const wss = new WebSocketServer({ port: 8000 });


wss.on("connection", async (ws: WebSocket) => {
  ws.send("hi");
  await prismaClient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    }
  })
})
