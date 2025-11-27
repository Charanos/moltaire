// Mock data for dashboard presentation

export const mockUser = {
  id: "user123",
  username: "@zanyfool",
  email: "grayvector29@gmail.com",
  full_name: "Tyler Grayson",
  user_level: "novice",
  role: "user",
  wallet: {
    balance: 1250.50,
    total_deposits: 500,
    total_winnings: 980.50,
    total_losses: 230
  }
}

export const mockLeaderboard = [
  {
    username: "@lucky_winner",
    achievement: "pulled a miracle",
    amount: 1250,
    rank: 1,
    avatar: "🔥"
  },
  {
    username: "@fortune_seeker",
    achievement: "escaped the abyss",
    amount: 980,
    rank: 2,
    avatar: "🎯"
  },
  {
    username: "@chaos_rider",
    achievement: "followed by chaos",
    amount: 750,
    rank: 3,
    avatar: "⚡"
  }
]

export const mockGroups = [
  {
    id: "group1",
    name: "Weekend Warriors",
    description: "Betting enthusiasts who live for the weekend action",
    avatar_url: null,
    member_count: 12,
    created_at: new Date("2025-11-20"),
    active_bets: 3
  },
  {
    id: "group2",
    name: "High Rollers Club",
    description: "For those who play big and win bigger",
    avatar_url: null,
    member_count: 8,
    created_at: new Date("2025-11-18"),
    active_bets: 5
  },
  {
    id: "group3",
    name: "Meme Lords",
    description: "Betting on internet culture and viral moments",
    avatar_url: null,
    member_count: 24,
    created_at: new Date("2025-11-15"),
    active_bets: 2
  },
  {
    id: "group4",
    name: "Fortune Seekers",
    description: "Strategic players analyzing every bet",
    avatar_url: null,
    member_count: 15,
    created_at: new Date("2025-11-22"),
    active_bets: 4
  }
]

export const mockNotifications = [
  {
    id: "notif1",
    type: "spin",
    title: "Wheel of Delusion",
    message: "The cosmos grants you: +25 MP",
    timestamp: new Date("2025-11-26T19:30:00"),
    is_read: false,
    icon: "🎡"
  },
  {
    id: "notif2",
    type: "withdrawal",
    title: "Withdrawal Completed",
    message: "Your withdrawal of $1000.00 has been sent to your wallet. Transaction: test1000",
    amount: 1000,
    timestamp: new Date("2025-11-17T06:11:00"),
    is_read: true,
    icon: "💸"
  },
  {
    id: "notif3",
    type: "withdrawal",
    title: "Withdrawal Rejected",
    message: "Your withdrawal request of $10.00 was rejected: suspicious",
    amount: 10,
    timestamp: new Date("2025-11-17T06:07:00"),
    is_read: true,
    icon: "❌"
  },
  {
    id: "notif4",
    type: "market",
    title: "Market Settled",
    message: "Your bet on 'What's your vibe?' has been settled. You won 150 MP!",
    timestamp: new Date("2025-11-25T14:20:00"),
    is_read: true,
    icon: "🎯"
  },
  {
    id: "notif5",
    type: "group",
    title: "Group Invite",
    message: "@chaos_rider invited you to join 'High Rollers Club'",
    timestamp: new Date("2025-11-24T10:15:00"),
    is_read: false,
    icon: "👥"
  }
]

export const mockTransactions = [
  {
    id: "tx1",
    type: "deposit",
    amount: 500,
    description: "USDT deposit via NOWPayments",
    status: "completed",
    created_date: new Date("2025-11-25T08:00:00")
  },
  {
    id: "tx2",
    type: "bet_entry",
    amount: -50,
    description: "Bet placed on 'What's your vibe?'",
    status: "completed",
    created_date: new Date("2025-11-25T10:30:00")
  },
  {
    id: "tx3",
    type: "payout",
    amount: 150,
    description: "Won bet: 'What's your vibe?'",
    status: "completed",
    created_date: new Date("2025-11-25T14:20:00")
  },
  {
    id: "tx4",
    type: "withdrawal",
    amount: -100,
    description: "Withdrawal to TRX address TXabc...123",
    status: "pending",
    created_date: new Date("2025-11-26T09:00:00")
  },
  {
    id: "tx5",
    type: "bet_entry",
    amount: -25,
    description: "Bet placed on 'Best meme 2025'",
    status: "completed",
    created_date: new Date("2025-11-26T11:00:00")
  }
]

export const mockMarkets = [
  {
    id: "market1",
    title: "What's your vibe right now?",
    description: "Pick the one that matches your brain's current state. Trust your gut — your mood might just make you money today.",
    tags: ["memes", "mood", "wager"],
    buy_in_amount: 1,
    participant_count: 3,
    total_pool: 1100,
    category: "Social media",
    status: "active",
    outcomes: [
      { id: "o1", option_text: "Chaotic energy", participant_count: 12 },
      { id: "o2", option_text: "Zen mode", participant_count: 8 },
      { id: "o3", option_text: "Procrastination nation", participant_count: 15 },
      { id: "o4", option_text: "Hustling hard", participant_count: 6 }
    ]
  },
  {
    id: "market2",
    title: "Most favorite meme so far",
    description: "Select which of the two memes you believe is the best of 2025. The meme with the most votes wins.",
    tags: ["Memes", "Social media"],
    buy_in_amount: 1,
    participant_count: 1,
    total_pool: 10,
    category: "Memes",
    status: "active",
    outcomes: [
      { id: "o1", option_text: "Distracted boyfriend", participant_count: 5 },
      { id: "o2", option_text: "Woman yelling at cat", participant_count: 8 }
    ]
  }
]

export const mockAdminStats = {
  totalUsers: 1247,
  totalRevenue: 15840.50,
  activeMarkets: 23,
  totalVolume: 89500,
  participants: 412,
  pendingPayouts: 12,
  pendingSettlements: 5,
  pendingWithdrawals: 8
}
