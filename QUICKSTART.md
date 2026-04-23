# ElevestOS - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Prerequisites
- Node.js 20+
- Docker Desktop
- Git

### Step 1: Clone & Install
```bash
cd "c:\Users\Dedan Odero\OneDrive\Desktop\KLM2026\ElevestOS"
npm install
```

### Step 2: Start Database
```bash
docker-compose up -d postgres redis
```

### Step 3: Setup Environment
```bash
cp .env.example .env.local
# Edit .env.local if needed (defaults work for local dev)
```

### Step 4: Initialize Database
```bash
npx prisma db push
```

### Step 5: Start Development
```bash
npm run dev
```

Open **http://localhost:3000**

---

## 📁 Project Structure

```
ElevestOS/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable UI components
│   ├── features/         # Feature-specific code
│   │   ├── auth/         # Authentication
│   │   ├── grants/       # Grant management
│   │   ├── projects/     # Project management
│   │   └── compliance/   # Compliance & reporting
│   └── lib/              # Utilities, DB, constants
├── prisma/
│   └── schema.prisma     # Database schema
├── tests/                # E2E tests
└── docker-compose.yml    # Local services
```

---

## 🔑 Default Credentials

After registering a new account, you can:
- Browse grants
- Create applications
- Manage projects
- Generate reports

---

## 🎨 Design System

Based on **Stitch Project 9835441796128002595** (Deep Blue UI)

### Colors
```
Primary:   #0F172A (Navy)
Secondary: #2563EB (Royal Blue)
Tertiary:  #0D9488 (Teal)
```

### Typography
- Headings: Public Sans
- Body: Inter

---

## 📊 Features Implemented

### ✅ Phase 1 Complete
- [x] Authentication (Login/Register)
- [x] Dashboard with stats
- [x] Grant listing & filtering
- [x] Grant detail page
- [x] Grant application wizard (5 steps)
- [x] Applications tracking
- [x] Project management
- [x] Compliance dashboard
- [x] Training/LMS portal
- [x] Settings page

### 🔄 Phase 2 In Progress
- [ ] Grant matching algorithm
- [ ] Project budget tracking
- [ ] Report builder
- [ ] Funder dashboard
- [ ] Notifications

---

## 🧪 Testing

```bash
# Run E2E tests
npm test

# Run with UI
npm run test:ui
```

---

## 🐛 Common Issues

### Port 5432 already in use
```bash
# Kill process on port 5432 (Windows)
netstat -ano | findstr :5432
taskkill /PID <PID> /F
```

### Prisma errors
```bash
npx prisma generate
npx prisma db push
```

### Next.js cache issues
```bash
rm -rf .next
npm run dev
```

---

## 📖 API Endpoints

All API routes use Next.js App Router server actions. No separate API server needed.

### Authentication
- `registerAction(formData)` - Register new user
- `loginAction(formData)` - Login user
- `logoutAction()` - Logout user
- `getCurrentUser()` - Get current session

### Grants
- `getGrants(filters)` - List grants with filters
- `getGrantById(id)` - Get grant details
- `getRecommendedGrants(orgId)` - AI-matched grants
- `createGrantApplication(userId, grantId)` - Start application

### Projects
- `getProjects(orgId)` - List organisation projects
- `createProject(data)` - Create new project
- `getProjectStats(orgId)` - Get project statistics

---

## 🚢 Deployment

### Docker Production Build
```bash
docker build -t elevestos .
docker run -p 3000:3000 --env-file .env.production elevestos
```

### AWS Deployment
See `BUILD_PLAN.md` for full AWS EKS setup instructions.

---

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/new-feature`
2. Commit changes: `git commit -m 'Add new feature'`
3. Push: `git push origin feature/new-feature`
4. Open Pull Request

---

## 📞 Support

- **Documentation:** See `/docs` folder
- **Issues:** GitHub Issues
- **Email:** support@elevestos.com

---

**Built with ❤️ for the social sector**
© 2026 Elevest Labs
