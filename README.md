# Nurideen Abdulai — Personal Website

Built with **Next.js 15 · TypeScript · Tailwind CSS · Prisma · Neon PostgreSQL**

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
```bash
cp .env.example .env.local
```
Fill in your `.env.local`:
- `DATABASE_URL` — your Neon PostgreSQL connection string
- `RESEND_API_KEY` — (optional) for contact form email notifications
- `CONTACT_EMAIL` — where contact form messages are forwarded

### 3. Push database schema
```bash
npx prisma db push
```

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## Publishing Articles

Articles are stored in the database. To add one, use **Prisma Studio**:

```bash
npx prisma studio
```

Open the `Article` model and create a new record with:
- `title` — article title
- `slug` — URL-friendly slug (e.g. `just-transition-ghana`)
- `excerpt` — 1–2 sentence summary
- `content` — HTML content for the body
- `category` — e.g. `Energy Management`, `Climate Policy`
- `readTime` — e.g. `5 min read`
- `featured` — set to `true` for the featured article on the homepage
- `published` — set to `true` to make it live
- `publishedAt` — publish date

---

## Deployment (Vercel)

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy — done

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── about/page.tsx        # About page
│   ├── expertise/page.tsx    # Expertise page
│   ├── writing/
│   │   ├── page.tsx          # Article listing
│   │   └── [slug]/page.tsx   # Article detail
│   ├── contact/page.tsx      # Contact page
│   └── api/contact/route.ts  # Contact form API
├── components/
│   ├── layout/               # Navbar, Footer
│   └── sections/             # ArticleCard
├── lib/
│   ├── db.ts                 # Prisma client
│   └── utils.ts              # Helpers
└── types/index.ts
prisma/
└── schema.prisma
```
