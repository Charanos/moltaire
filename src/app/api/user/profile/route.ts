import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 })

  const { timezone, notification_email, notification_push } = await req.json()

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      timezone,
      notification_email,
      notification_push
    }
  })

  return Response.json({ success: true })
}
