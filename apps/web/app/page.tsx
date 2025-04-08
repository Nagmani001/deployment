import { prismaClient } from "@repo/db/client"


export default async function Home() {
  const response = await prismaClient.user.findFirst();
  return <>
    <div>
      {response?.username}
      {response?.password}
    </div>

  </>
}
