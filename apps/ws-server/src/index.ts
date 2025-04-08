import { prismaClient } from "@repo/db/client"
import { WebSocket, WebSocketServer } from "ws";


const wss = new WebSocketServer({ port: 8000 });


wss.on("connection", (ws: WebSocket) => {
  ws.send("hi");
})
