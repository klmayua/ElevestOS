# ElevestOS - Vercel Production Environment

## Quick Deploy (Vercel Dashboard):

1. Go to: https://vercel.com/import
2. Import GitHub repo: `klmayua/ElevestOS`
3. Framework Preset: Next.js (auto-detected)
4. Build Command: `npm run build`
5. Output Directory: `.next` (or leave empty)
6. Environment Variables (add these):

```
# Required:
DATABASE_URL=postgresql://user:password@host:5432/elevestos
JWT_SECRET=generate-a-secure-random-string-here

# Optional:
NODE_ENV=production
API_KEY=your-api-key-for-external-access
```

7. Deploy!

---

## Environment Variables Explained:

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | ✅ | PostgreSQL connection (Neon, Supabase, or AWS RDS) |
| `JWT_SECRET` | ✅ | Secret key for JWT tokens (min 32 chars) |
| `NODE_ENV` | Optional | Set to "production" |
| `API_KEY` | Optional | For external API access |

---

## Database Setup (After Deploy):

```bash
# Connect to your database and run:
npx prisma db push
npm run db:seed
```

---

## Recommended Database Providers:

1. **Neon** (Free tier available)
   - https://neon.tech
   - Creates PostgreSQL database
   
2. **Supabase** (Free tier available)
   - https://supabase.com
   - PostgreSQL + APIs

3. **Vercel Postgres** (Coming soon)
   - https://vercel.com/docs/storage/vercel-postgres

---

## Troubleshooting:

### Build Fails:
```bash
# Clear .next cache
rm -rf .next
npm run build
```

### Database Connection Error:
- Ensure DATABASE_URL is correct
- Check your database allows Vercel's IP (iad1)

### Prisma Client Error:
```bash
npx prisma generate
```

---

## Success! 🎉

Once deployed, your app will be at:
`https://elevestos-<your-vercel-project>.vercel.app`