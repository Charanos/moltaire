import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 })

  const { amount, address } = await req.json()
  const userId = session.user.id

  if (amount < 10) {
    return Response.json({ error: "Minimum withdrawal is $10" }, { status: 400 })
  }

  // 1. Check limits and balance
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { wallet: true }
  })

  if (!user || !user.wallet) {
    return Response.json({ error: "Wallet not found" }, { status: 404 })
  }

  if (user.wallet.balance < amount) {
      return Response.json({ error: "Insufficient balance" }, { status: 400 })
  }

  const limit = user.user_level === 'high_roller' ? 1000 : 250;

   // Reset daily total if 24h passed
   const now = new Date();
   const lastReset = new Date(user.wallet.last_reset_date);
   let currentDailyTotal = user.wallet.daily_withdrawal_total;
 
   if (now.getTime() - lastReset.getTime() > 24 * 60 * 60 * 1000) {
       currentDailyTotal = 0;
       await prisma.wallet.update({
           where: { id: user.wallet.id },
           data: { 
               daily_withdrawal_total: 0,
               last_reset_date: now
           }
       });
   }

  if (currentDailyTotal + amount > limit) {
    return Response.json({ error: `Daily withdrawal limit exceeded. Your limit is $${limit}` }, { status: 400 })
  }

  // 2. Create Pending Transaction
  await prisma.$transaction(async (tx) => {
      // Deduct balance immediately
      await tx.wallet.update({
          where: { id: user.wallet.id },
          data: { 
              balance: { decrement: amount },
              daily_withdrawal_total: { increment: amount }
          }
      });

      // Create transaction record
      await tx.transaction.create({
          data: {
              user_id: userId,
              type: 'withdrawal',
              amount: amount,
              description: `Withdrawal to ${address}`,
              status: 'pending' // Requires admin approval
          }
      });
  });

  return Response.json({ success: true, message: "Withdrawal request submitted for approval" });
}
