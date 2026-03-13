# Launcher

AI-powered launch copy for indie hackers.

Generate ready-to-post content for Twitter, Reddit, Hacker News, and Product Hunt in seconds.

## Features

- **Platform-native copy** — Each platform has different rules. We bake them in.
- **Twitter threads** — Hook-first tweets that grab attention. No hashtags.
- **Reddit posts** — Problem-led posts that don't get flagged as self-promo.
- **Hacker News** — Technical depth with humble tone. Show HN format.
- **Product Hunt** — 60-char taglines, maker stories, and topic tags.
- **Channel recommendations** — AI suggests the best platforms for your product.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **AI:** OpenAI GPT-4o-mini
- **Auth:** Supabase (coming soon)
- **Payments:** Stripe (coming soon)
- **Deployment:** Vercel

## Getting Started

```bash
# Clone the repo
git clone https://github.com/arikmir/launcher.git
cd launcher

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your OPENAI_API_KEY

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Environment Variables

```env
OPENAI_API_KEY=sk-...
# SUPABASE_URL=https://...
# SUPABASE_ANON_KEY=...
# STRIPE_SECRET_KEY=sk_...
```

## Project Structure

```
app/
├── page.tsx              # Landing page
├── generate/             # Copy generation
├── dashboard/            # User dashboard
│   └── history/          # Generation history
├── pricing/              # Pricing page
├── login/                # Login page
├── signup/               # Signup page
└── api/
    ├── generate/         # AI generation endpoint
    └── waitlist/         # Waitlist signup

components/
├── landing/              # Landing page sections
├── layout/               # Header, footer
├── onboarding/           # Product form
└── ui/                   # shadcn/ui components

lib/
├── openai.ts             # OpenAI client
├── prompts.ts            # Platform-specific prompts
└── utils.ts              # Utilities
```

## Design Principles

- Clean & Confident (Linear/Vercel style)
- Primary color: Deep Orange (#EA580C)
- Font: Geist
- NO emojis
- NO purple gradients
- NO cards nested in cards

## License

MIT

---

Built by [@arikmir](https://github.com/arikmir)
