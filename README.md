# ElevestOS

**The Operating System for NGOs**

Streamline funding applications, compliance, reporting, and funder relationships in one unified platform.

## 🎯 Vision

ElevestOS empowers NGOs to overcome operational disorder and secure funding more effectively. We bridge the gap between NGOs and funders through intelligent matching, streamlined workflows, and transparent reporting.

## 🚀 Features

### For NGOs
- **Grant Matching Dashboard** - AI-powered discovery of relevant funding opportunities
- **Grant Application Workspace** - Collaborative tools for building compelling applications
- **Project Execution Dashboard** - Track progress, budgets, and beneficiaries
- **Reporting Dashboard** - Automated compliance and impact reports
- **Compliance & Audit Workspace** - Stay audit-ready at all times
- **Operations Workspace** - Unified view of all activities
- **Talent Hiring Dashboard** - Find skilled professionals for your mission

### For Funders & Government
- **NGO Discovery Dashboard** - Find vetted, high-performing organizations
- **Funding Call Publisher** - Reach qualified NGOs efficiently
- **Live Grant Monitoring** - Real-time visibility into funded projects
- **Portfolio Overview** - Track all investments in one place
- **Audit & Review Workspace** - Streamlined due diligence

### Shared Ecosystem
- **NGO-Funder Matching** - Intelligent pairing based on mission alignment
- **Partnership Finder** - Connect with complementary organizations
- **Talent Marketplace** - Jobs and opportunities in the social sector
- **Training & Onboarding** - Capacity building resources
- **Capacity Progress** - Track organizational growth

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 14, React 18, TypeScript, Tailwind CSS |
| **Backend** | Next.js API Routes, Prisma ORM |
| **Database** | PostgreSQL 15 |
| **Cache** | Redis 7 |
| **Auth** | NextAuth.js, JWT |
| **Testing** | Playwright |
| **DevOps** | Docker, GitHub Actions |
| **Hosting** | AWS (EKS, RDS, S3) |

## 🏗️ Design System

**Deep Blue UI** - Institutional Clarity theme

- **Primary:** Navy (#0F172A) - Authority and trust
- **Secondary:** Royal Blue (#2563EB) - Action and modernity
- **Tertiary:** Professional Teal (#0D9488) - Success and impact
- **Typography:** Public Sans (headings) + Inter (body)
- **Spacing:** 4px baseline grid
- **Radius:** 4px (soft, professional)

## 📦 Getting Started

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ElevestOS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development services**
   ```bash
   docker-compose up -d postgres redis
   ```

5. **Run database migrations**
   ```bash
   npm run db:push
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
ElevestOS/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── grants/
│   │   ├── projects/
│   │   └── settings/
│   ├── components/
│   │   ├── ui/                 # Base UI components
│   │   └── features/           # Feature-specific components
│   ├── features/
│   │   ├── auth/
│   │   ├── grants/
│   │   ├── projects/
│   │   ├── reporting/
│   │   └── lms/
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── db.ts
│   │   └── constants.ts
│   ├── hooks/
│   └── types/
├── docker-compose.yml
├── Dockerfile
├── tailwind.config.ts
└── package.json
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run specific test file
npx playwright test tests/e2e/login.spec.ts
```

## 📄 License

© 2026 Elevest Labs. All rights reserved.

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details.

## 📞 Support

- Documentation: [Link to docs]
- Issues: [GitHub Issues]
- Email: support@elevestos.com

---

**Built with ❤️ for the social sector**
