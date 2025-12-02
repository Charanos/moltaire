Motlaire Overview

PROPRIETARY INFORMATION — DO NOT SHARE

MOTLAIR SYSTEM BREAKDOWN
User Levels (Tiers) & Benefits

Tiers:

novice (default)

high_roller (granted manually by Motlair compliance)

Limits (daily, rolling 24h):

novice:

deposits/top-ups: max $500/day

withdrawals: max $250/day

high_roller:

deposits/top-ups: max $5,000/day

withdrawals: max $1,000/day

assigned only by Motlair admin, randomly granted; spending minimum is a qualification but only admin can assign it.

Enforcement:
Hard caps enforced at wallet service; block transaction, show clear error, log to compliance.

Badge & UX:

Show tier badge in Profile

Add info tooltip explaining limits and how high_roller is granted

Message: “A Motlair-granted honor, reserved for bettors who made fortune bend first.”

Tier is read-only to users; only admin can upgrade/downgrade.

Monitoring:

Rate-limit attempts

Flag structuring (many small deposits)

Freeze on suspicious patterns until review

Motlaire Commission/Fees

Platform fee:
5% of each settled bet pool (private group bets and public markets), taken before payouts.

Accounting fields (per bet):

total_pool (sum of buy-ins)

platform_fee_collected (5% of total_pool)

prize_pool_after_fees (total_pool − platform_fee_collected)

total_paid_out (sum of actual payouts)

No house float:
Payouts come solely from each bet’s pool.

Audit:
Immutable records for fee calculation and each payout.

No odds shown anywhere:
No live counts, percentages, charts, or implied probabilities pre-settlement.

Public Market Types

1. Poll-Style

Mechanics:

Option with most votes wins

Winners split prize_pool_after_fees pro-rata by stake

Supports media uploads (gif, jpeg, jpg, png)

UI Rules:

“Select outcome” + stake amount only

Hide which option others chose

For non-admins, participant rows show:

username

total stake (USDT)

timestamp

No indication of their chosen option

Weighting:

Early, consistent participants → 1.0× integrity weight

New or burst-joined users → 0.8× provisional weight (invisible)

2. The Betrayal Game

Players choose Cooperate or Betray.

Outcomes:

All cooperate → small win for all

Majority cooperate, minority betray → betrayers win big

Majority betray → all lose

All betray → zero for all (dramatic)

3. Reflex Reaction Test
   Majority % Range Multiplier Tier Message
   Winner ≤ 45% 2.0× A “Fortune favors the absurd. You bet against reason and reason lost!”
   Winner 45–60% 1.3× B “Neither too early nor too late; perfect timing, perfect folly.”
   Winner 56–70% 1.05× C “You weren’t wrong, just a little too right.”
   Winner > 70% 1.0× (reset) — “You joined the parade, not the rebellion. But even parades have prizes.”

Premise:
Users predict the majority’s first instinct when confronted with a situation, with a 5-second countdown.

Examples:
“When suddenly added to a new group chat, the majority would…”
Options might include:

Leave immediately

Mute

Ask “who’s this?”

Pretend they didn’t see it

Participate just for fun

4. Majority Prediction Ladder

Premise:
Users predict the top-ranked item based on majority vote.

Rules:

Users must guess the correct chain the majority will follow

Winners (one or multiple) split payout

Option cards must be movable with snap-to-grid

Examples:

Rank these inconveniences

Rank these cringe behaviors

Rank these guilty pleasures

Private Group Bets
#1 — Winner Takes All

A single user wins the entire prize_pool_after_fees after group confirmation.

Flow:

When admin declares winner:

Status → pending_confirmation

Group notification:
“@alex declared @jamie as winner.”

Show buttons to all members:

Confirm Winner

Disagree

Disagree Modal:
“Are you sure? This will pause payout for everyone until the admin reviews.”
Buttons: Cancel | Yes, Disagree

Auto-finalization logic:

If ≥1 member confirms AND no disagreements within 12 hours → finalize payout

If any disagreement → status = disputed, payout paused

Admin may re-declare once; after that, manual resolution required

Activity tab entries:

“@alex declared @jamie as winner.”

“@riley confirmed the result.”

“@morgan disagreed — payout paused.”

“Winner confirmed, payout finalized.”

Data isolation:

All actions/logs scoped by group_id

Confirmation/disagreement counts stored per market per group

Acceptance rules:

Admin cannot finalize alone

At least one confirmation required

Disagree action double-confirmed

Auto-finalizes if group remains peaceful

Logs visible only within the group

#2 — Odd One Out

Mechanics:

Option with fewest votes wins

Winners split evenly

Minimum options = 3 (reduces ties)

If everyone picks the same option:

Mark tie

Refund (minus 5% fee)

UI: “Everyone chose the same. House keeps the fee; try again, fools.”

Activity feed:

Show only “placed $X”

No chosen option revealed

Badge:

Winner earns “Contrarian of the Day” (latest winner per group)

Acceptance Checks (Quick)

Tier caps enforced at wallet API; attempts logged

5% fee deducted before payouts; no payout if admin confirmation pending

Public Market detail (non-admin): no option visibility; only username + dollar spent

Group Bets only allow winner_takes_all and odd_one_out

Odd-one-out must have ≥3 options; tie handling works; activity feed hides choices

Audit logs include fee, payout splits, user tier at time of bet, settlement metadata

CONFIDENTIAL PROPERTY OF GREYSTONE CITADEL
