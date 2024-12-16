import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const body = await request.json()
  const { message } = body

  const chat = await prisma.chat.create({
    data: { message },
  })

  return Response.json(chat, { status: 201 })
}

export async function GET() {
  const chats = await prisma.chat.findMany()
  return Response.json(chats, { status: 200 })
}
