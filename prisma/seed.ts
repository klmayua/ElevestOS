import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...\n");

  // Clean existing data
  await prisma.trainingProgress.deleteMany();
  await prisma.training.deleteMany();
  await prisma.complianceReport.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.grantApplication.deleteMany();
  await prisma.project.deleteMany();
  await prisma.grant.deleteMany();
  await prisma.organisation.deleteMany();
  await prisma.user.deleteMany();

  console.log("✓ Cleaned existing data\n");

  // ============================================
  // Create Organisations
  // ============================================
  console.log("Creating organisations...");

  const orgs = await Promise.all([
    prisma.organisation.create({
      data: {
        name: "Hope Foundation Kenya",
        slug: "hope-foundation-kenya",
        description: "Empowering communities through education and sustainable development programs in rural Kenya.",
        registrationNumber: "NGO/2020/001234",
        website: "https://hopefoundation.org.ke",
        email: "info@hopefoundation.org.ke",
        phone: "+254 700 123456",
        city: "Nairobi",
        country: "Kenya",
        sector: "Education",
        subSector: "Primary Education",
        yearFounded: 2015,
        budgetRange: "100K-500K",
        staffCount: 45,
        verified: true,
        verifiedAt: new Date(),
      },
    }),
    prisma.organisation.create({
      data: {
        name: "Clean Water Initiative",
        slug: "clean-water-initiative",
        description: "Providing clean and safe water solutions to underserved communities across Africa.",
        registrationNumber: "NGO/2018/005678",
        website: "https://cleanwaterinit.org",
        email: "contact@cleanwaterinit.org",
        phone: "+254 700 234567",
        city: "Mombasa",
        country: "Kenya",
        sector: "Health",
        subSector: "Water & Sanitation",
        yearFounded: 2018,
        budgetRange: "500K-1M",
        staffCount: 120,
        verified: true,
        verifiedAt: new Date(),
      },
    }),
    prisma.organisation.create({
      data: {
        name: "Women Empower Network",
        slug: "women-empower-network",
        description: "Supporting women entrepreneurs and leaders across East Africa.",
        registrationNumber: "NGO/2019/007890",
        website: "https://womenempower.org",
        email: "hello@womenempower.org",
        phone: "+254 700 345678",
        city: "Kisumu",
        country: "Kenya",
        sector: "Economic Development",
        subSector: "Women Empowerment",
        yearFounded: 2019,
        budgetRange: "50K-100K",
        staffCount: 15,
        verified: false,
      },
    }),
    prisma.organisation.create({
      data: {
        name: "Green Earth Alliance",
        slug: "green-earth-alliance",
        description: "Environmental conservation and climate action organization working across Nigeria.",
        registrationNumber: "NGO/2021/009012",
        website: "https://greenearth.org.ng",
        email: "info@greenearth.org.ng",
        phone: "+234 800 1234567",
        city: "Lagos",
        country: "Nigeria",
        sector: "Environment",
        subSector: "Climate Action",
        yearFounded: 2021,
        budgetRange: "100K-500K",
        staffCount: 35,
        verified: true,
        verifiedAt: new Date(),
      },
    }),
  ]);

  console.log(`✓ Created ${orgs.length} organisations\n`);

  // ============================================
  // Create Users
  // ============================================
  console.log("Creating users...");

  const adminPassword = await bcrypt.hash("admin123", 12);
  const userPassword = await bcrypt.hash("password123", 12);

  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: "admin@elevestos.com",
        passwordHash: adminPassword,
        firstName: "Admin",
        lastName: "User",
        phone: "+254 700 000001",
        role: "ADMIN",
      },
    }),
    prisma.user.create({
      data: {
        email: "jane@hopefoundation.org.ke",
        passwordHash: userPassword,
        firstName: "Jane",
        lastName: "Ombati",
        phone: "+254 700 123001",
        role: "ORG_ADMIN",
        organisationId: orgs[0].id,
      },
    }),
    prisma.user.create({
      data: {
        email: "john@cleanwaterinit.org",
        passwordHash: userPassword,
        firstName: "John",
        lastName: "Mwangi",
        phone: "+254 700 234001",
        role: "PROGRAM_MANAGER",
        organisationId: orgs[1].id,
      },
    }),
    prisma.user.create({
      data: {
        email: "grace@womenempower.org",
        passwordHash: userPassword,
        firstName: "Grace",
        lastName: "Akinyi",
        phone: "+254 700 345001",
        role: "ORG_ADMIN",
        organisationId: orgs[2].id,
      },
    }),
    prisma.user.create({
      data: {
        email: "chidi@greenearth.org.ng",
        passwordHash: userPassword,
        firstName: "Chidi",
        lastName: "Okonkwo",
        phone: "+234 800 123001",
        role: "ORG_ADMIN",
        organisationId: orgs[3].id,
      },
    }),
  ]);

  console.log(`✓ Created ${users.length} users\n`);

  // ============================================
  // Create Grants
  // ============================================
  console.log("Creating grants...");

  const now = new Date();
  const nextMonth = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  const twoMonths = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
  const threeMonths = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000);
  const pastDeadline = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const grants = await Promise.all([
    prisma.grant.create({
      data: {
        title: "Kenya Primary Education Improvement Fund",
        slug: "kenya-primary-education-fund",
        description: "Funding for improving primary education infrastructure and teacher training in rural Kenya. This grant supports schools in underserved areas with materials, infrastructure upgrades, and teacher professional development programs.\n\nKey focus areas include:\n- Construction and renovation of classrooms\n- Provision of learning materials\n- Teacher training and capacity building\n- After-school tutoring programs\n- Parent and community engagement",
        summary: "Support for primary education improvement in rural Kenya",
        funderName: "Kenya Education Trust",
        funderType: "FOUNDATION",
        amountMin: 5000000,
        amountMax: 25000000,
        currency: "KES",
        durationMin: 12,
        durationMax: 36,
        openDate: now,
        deadline: nextMonth,
        decisionDate: twoMonths,
        eligibleSectors: ["Education", "Child Welfare"],
        eligibleCountries: ["Kenya"],
        eligibleOrgTypes: ["NGO", "Community Organization"],
        requirements: [
          "Must be registered as an NGO in Kenya",
          "Minimum 3 years of operation",
          "Audited financial statements for past 2 years",
          "Proof of tax compliance",
          "Evidence of prior education programs",
        ],
        status: "PUBLISHED",
        isFeatured: true,
        organisationId: orgs[0].id,
      },
    }),
    prisma.grant.create({
      data: {
        title: "East Africa Water & Sanitation Innovation Fund",
        slug: "east-africa-water-sanitation-fund",
        description: "Innovative solutions for water access and sanitation in underserved communities. We seek proposals that demonstrate sustainable, scalable approaches to water security and hygiene promotion.\n\nPriority will be given to:\n- Solar-powered water systems\n- Community-managed water points\n- Sanitation market-based approaches\n- WASH in schools programs",
        summary: "Innovation fund for water and sanitation solutions",
        funderName: "WaterAid East Africa",
        funderType: "INTERNATIONAL_NGO",
        amountMin: 50000000,
        amountMax: 150000000,
        currency: "USD",
        durationMin: 24,
        durationMax: 48,
        openDate: now,
        deadline: twoMonths,
        decisionDate: threeMonths,
        eligibleSectors: ["Health", "Environment"],
        eligibleCountries: ["Kenya", "Uganda", "Tanzania", "Rwanda"],
        eligibleOrgTypes: ["NGO", "Social Enterprise"],
        requirements: [
          "Demonstrated experience in WASH sector",
          "Strong community partnerships",
          "Sustainable business model",
          "Monitoring and evaluation capacity",
        ],
        status: "PUBLISHED",
        isFeatured: true,
      },
    }),
    prisma.grant.create({
      data: {
        title: "Women Entrepreneurs Acceleration Program",
        slug: "women-entrepreneurs-acceleration",
        description: "Supporting women-led businesses with training, mentorship, and capital to scale their operations. This comprehensive program combines business skills training with access to finance.\n\nProgram components:\n- 6-month business accelerator\n- Mentorship from successful entrepreneurs\n- $10,000-$50,000 seed funding\n- Access to networks and markets",
        summary: "Acceleration program for women entrepreneurs",
        funderName: "Tony Elumelu Foundation",
        funderType: "FOUNDATION",
        amountMin: 10000,
        amountMax: 50000,
        currency: "USD",
        durationMin: 6,
        durationMax: 12,
        openDate: now,
        deadline: nextMonth,
        decisionDate: twoMonths,
        eligibleSectors: ["Economic Development"],
        eligibleCountries: ["Kenya", "Nigeria", "Ghana", "Uganda", "Tanzania"],
        eligibleOrgTypes: ["Social Enterprise", "NGO"],
        requirements: [
          "Women-led organization",
          "At least 1 year of operation",
          "Clear growth potential",
          "Passionate leadership team",
        ],
        status: "PUBLISHED",
        isFeatured: true,
      },
    }),
    prisma.grant.create({
      data: {
        title: "Climate Resilience Fund for Smallholder Farmers",
        slug: "climate-resilience-farmers-fund",
        description: "Helping smallholder farmers adapt to climate change through sustainable agricultural practices. Fund supports agroecology, climate-smart agriculture, and farmer cooperatives.\n\nFocus areas:\n- Climate-smart agriculture training\n- Drought-resistant crop varieties\n- Farmer cooperative development\n- Market access for sustainable products",
        summary: "Climate adaptation for smallholder farmers",
        funderName: "Green Climate Fund",
        funderType: "MULTILATERAL",
        amountMin: 100000,
        amountMax: 500000,
        currency: "USD",
        durationMin: 18,
        durationMax: 36,
        openDate: now,
        deadline: threeMonths,
        eligibleSectors: ["Environment", "Agriculture"],
        eligibleCountries: ["Kenya", "Nigeria", "Ghana", "Ethiopia"],
        eligibleOrgTypes: ["NGO", "Farmers Cooperative"],
        requirements: [
          "Direct farmer relationships",
          "Climate adaptation experience",
          "Environmental safeguards in place",
        ],
        status: "PUBLISHED",
        isFeatured: false,
      },
    }),
    prisma.grant.create({
      data: {
        title: "Nigeria Youth Skills Development Initiative",
        slug: "nigeria-youth-skills-initiative",
        description: "Vocational training and skills development for unemployed youth in Nigeria. Grants support technical training centers, apprenticeship programs, and job placement services.\n\nAreas of focus:\n- Information technology\n- Construction trades\n- Healthcare support\n- Agricultural processing",
        summary: "Skills development for Nigerian youth",
        funderName: "Federal Republic of Nigeria",
        funderType: "GOVERNMENT",
        amountMin: 50000000,
        amountMax: 200000000,
        currency: "NGN",
        durationMin: 12,
        durationMax: 24,
        openDate: pastDeadline,
        deadline: pastDeadline,
        eligibleSectors: ["Education", "Economic Development"],
        eligibleCountries: ["Nigeria"],
        eligibleOrgTypes: ["NGO", "Training Institution"],
        requirements: [
          "Registered training provider",
          "Proven placement track record",
          "State government partnership",
        ],
        status: "CLOSED",
        isFeatured: false,
      },
    }),
    prisma.grant.create({
      data: {
        title: "Digital Literacy for Rural Communities",
        slug: "digital-literacy-rural-communities",
        description: "Bringing digital skills training to rural and underserved communities. Funding covers equipment, training materials, and instructor costs.\n\nProgram elements:\n- Community digital hubs\n- Mobile training units\n- Basic computer literacy\n- Online safety education",
        summary: "Digital skills training for rural areas",
        funderName: "Safaricom Foundation",
        funderType: "CORPORATE",
        amountMin: 5000000,
        amountMax: 15000000,
        currency: "KES",
        durationMin: 6,
        durationMax: 12,
        openDate: now,
        deadline: nextMonth,
        eligibleSectors: ["Education", "Technology"],
        eligibleCountries: ["Kenya"],
        eligibleOrgTypes: ["NGO", "Community Organization"],
        requirements: [
          "Community presence",
          "Trained instructors",
          "Suitable training space",
        ],
        status: "PUBLISHED",
        isFeatured: false,
      },
    }),
    prisma.grant.create({
      data: {
        title: "Health Workers Support Program",
        slug: "health-workers-support-program",
        description: "Supporting community health workers with training, equipment, and stipends. Focus on primary healthcare delivery in underserved areas.\n\nComponents:\n- CHW training and certification\n- Basic medical equipment kits\n- Monthly stipends\n- Supervision and mentorship",
        summary: "Community health worker support",
        funderName: "USAID Kenya",
        funderType: "INTERNATIONAL_NGO",
        amountMin: 25000,
        amountMax: 75000,
        currency: "USD",
        durationMin: 12,
        durationMax: 24,
        openDate: now,
        deadline: twoMonths,
        eligibleSectors: ["Health"],
        eligibleCountries: ["Kenya"],
        eligibleOrgTypes: ["NGO", "Health Facility"],
        requirements: [
          "MOH partnership",
          "Community health experience",
          "Supervision structure",
        ],
        status: "PUBLISHED",
        isFeatured: false,
      },
    }),
  ]);

  console.log(`✓ Created ${grants.length} grants\n`);

  // ============================================
  // Create Projects
  // ============================================
  console.log("Creating projects...");

  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: "Rural Education Initiative Phase II",
        slug: "rural-education-initiative-phase-2",
        description: "Expanding our successful rural education program to 5 new districts in Kenya. This phase focuses on teacher training, learning materials distribution, and community engagement.\n\nKey activities:\n- Training 200 teachers in child-centered pedagogy\n- Providing learning materials to 5,000 students\n- Establishing 50 Parent-Teacher Associations\n- Launching after-school tutoring programs",
        summary: "Expanding quality education to rural schools",
        organisationId: orgs[0].id,
        leadId: users[1].id,
        startDate: new Date("2026-01-01"),
        endDate: new Date("2026-12-31"),
        status: "ACTIVE",
        budgetTotal: 15000000,
        budgetSpent: 3500000,
        currency: "KES",
        beneficiaries: 5200,
        beneficiariesUnit: "people",
        outcomes: [
          "200 teachers trained in innovative pedagogy",
          "5,000 students with improved learning materials",
          "50 active Parent-Teacher Associations",
          "25% improvement in literacy rates",
        ],
        countries: ["Kenya"],
        regions: ["Nairobi", "Kisumu", "Nakuru"],
      },
    }),
    prisma.project.create({
      data: {
        title: "Clean Water for Schools Program",
        slug: "clean-water-schools-program",
        description: "Installing water purification systems in 50 schools across Kenya. Each school receives a solar-powered water system, sanitation facilities, and hygiene training.\n\nProject components:\n- 50 solar-powered water systems\n- 100 new latrines\n- hygiene training for 25,000 students\n- WASH committees in each school",
        summary: "Water and sanitation for 50 schools",
        organisationId: orgs[1].id,
        leadId: users[2].id,
        startDate: new Date("2025-07-01"),
        endDate: new Date("2027-06-30"),
        status: "ACTIVE",
        budgetTotal: 45000000,
        budgetSpent: 12000000,
        currency: "KES",
        beneficiaries: 25000,
        beneficiariesUnit: "students",
        outcomes: [
          "50 schools with clean water",
          "Zero waterborne diseases in target schools",
          "25,000 students with hygiene knowledge",
        ],
        countries: ["Kenya"],
        regions: ["Mombasa", "Kwale", "Kilifi"],
      },
    }),
    prisma.project.create({
      data: {
        title: "Women Business Accelerator 2026",
        slug: "women-business-accelerator-2026",
        description: "6-month accelerator program for 100 women entrepreneurs in Kisumu County. Includes business training, mentorship, and seed funding.\n\nProgram:\n- Business skills training\n- 1-on-1 mentorship\n- $5,000 seed funding per business\n- Market access support",
        summary: "Accelerator for women entrepreneurs",
        organisationId: orgs[2].id,
        leadId: users[3].id,
        startDate: new Date("2026-04-01"),
        endDate: new Date("2026-09-30"),
        status: "PLANNING",
        budgetTotal: 5000000,
        budgetSpent: 0,
        currency: "KES",
        beneficiaries: 100,
        beneficiariesUnit: "women",
        outcomes: [
          "100 women with business skills",
          "80 businesses operational after 6 months",
          "50% increase in revenue",
        ],
        countries: ["Kenya"],
        regions: ["Kisumu", "Siaya", "Homa Bay"],
      },
    }),
  ]);

  console.log(`✓ Created ${projects.length} projects\n`);

  // ============================================
  // Create Grant Applications
  // ============================================
  console.log("Creating grant applications...");

  const applications = await Promise.all([
    prisma.grantApplication.create({
      data: {
        applicationNumber: "APP-2026-00001",
        grantId: grants[0].id,
        applicantId: users[1].id,
        status: "SUBMITTED",
        submittedAt: new Date("2026-01-15"),
        proposalUrl: "https://storage.example.com/proposals/app-2026-00001.pdf",
        decision: "AWARDED",
        decisionAt: new Date("2026-02-01"),
        awardedAmount: 10000000,
        decisionNotes: "Congratulations! Your application has been approved. We look forward to partnering with Hope Foundation on this important education initiative.",
      },
    }),
    prisma.grantApplication.create({
      data: {
        applicationNumber: "APP-2026-00002",
        grantId: grants[1].id,
        applicantId: users[2].id,
        status: "UNDER_REVIEW",
        submittedAt: new Date("2026-02-10"),
      },
    }),
    prisma.grantApplication.create({
      data: {
        applicationNumber: "APP-2026-00003",
        grantId: grants[2].id,
        applicantId: users[3].id,
        status: "DRAFT",
      },
    }),
  ]);

  console.log(`✓ Created ${applications.length} grant applications\n`);

  // ============================================
  // Create Compliance Reports
  // ============================================
  console.log("Creating compliance reports...");

  const reports = await Promise.all([
    prisma.complianceReport.create({
      data: {
        projectId: projects[0].id,
        reportType: "Quarterly",
        periodStart: new Date("2026-01-01"),
        periodEnd: new Date("2026-03-31"),
        status: "APPROVED",
        submittedAt: new Date("2026-04-15"),
        activities: [
          "Trained 50 teachers in child-centered pedagogy",
          "Distributed materials to 2,000 students",
          "Established 20 PTAs",
        ],
        achievements: [
          "90% teacher attendance rate",
          "Student literacy improved by 15%",
        ],
        challenges: ["Rainy season affected delivery timelines"],
        budgetUtilization: 23.3,
        beneficiariesReached: 2500,
      },
    }),
    prisma.complianceReport.create({
      data: {
        projectId: projects[1].id,
        reportType: "Quarterly",
        periodStart: new Date("2025-10-01"),
        periodEnd: new Date("2025-12-31"),
        status: "SUBMITTED",
        submittedAt: new Date("2026-01-20"),
        activities: [
          "Installed 15 water systems",
          "Built 30 latrines",
          "Trained hygiene clubs in 15 schools",
        ],
        achievements: [
          "15,000 students with clean water",
          "Zero waterborne disease cases",
        ],
        challenges: ["Supply chain delays"],
        budgetUtilization: 26.7,
        beneficiariesReached: 15000,
      },
    }),
    prisma.complianceReport.create({
      data: {
        projectId: projects[0].id,
        reportType: "Quarterly",
        periodStart: new Date("2026-04-01"),
        periodEnd: new Date("2026-06-30"),
        status: "DRAFT",
        activities: [],
        achievements: [],
        challenges: [],
        budgetUtilization: 0,
      },
    }),
  ]);

  console.log(`✓ Created ${reports.length} compliance reports\n`);

  // ============================================
  // Create Training Courses
  // ============================================
  console.log("Creating training courses...");

  const trainings = await Promise.all([
    prisma.training.create({
      data: {
        title: "Grant Writing Mastery",
        slug: "grant-writing-mastery",
        description: "Learn the art and science of writing compelling grant proposals. From understanding donor priorities to crafting persuasive narratives.",
        type: "COURSE",
        category: "Grant Writing",
        difficulty: "INTERMEDIATE",
        duration: 180,
        content: {
          sections: [
            { title: "Understanding Funders", duration: 30 },
            { title: "Concept Notes", duration: 45 },
            { title: "Logic Models", duration: 45 },
            { title: "Budgets", duration: 30 },
            { title: "Submitting", duration: 30 },
          ],
        },
        published: true,
        publishedAt: new Date(),
      },
    }),
    prisma.training.create({
      data: {
        title: "Financial Management for NGOs",
        slug: "financial-management-ngos",
        description: "Essential financial management skills for NGO leaders. Covers accounting, reporting, and compliance.",
        type: "COURSE",
        category: "Financial Management",
        difficulty: "BEGINNER",
        duration: 120,
        content: {
          sections: [
            { title: "NGO Finance Fundamentals", duration: 30 },
            { title: "Bookkeeping", duration: 30 },
            { title: "Financial Reporting", duration: 30 },
            { title: "Donor Compliance", duration: 30 },
          ],
        },
        published: true,
        publishedAt: new Date(),
      },
    }),
    prisma.training.create({
      data: {
        title: "Monitoring & Evaluation Basics",
        slug: "monitoring-evaluation-basics",
        description: "Learn how to design and implement effective M&E systems for your programs.",
        type: "COURSE",
        category: "Monitoring & Evaluation",
        difficulty: "INTERMEDIATE",
        duration: 90,
        content: {
          sections: [
            { title: "M&E Frameworks", duration: 30 },
            { title: "Indicators", duration: 30 },
            { title: "Data Collection", duration: 30 },
          ],
        },
        published: true,
        publishedAt: new Date(),
      },
    }),
  ]);

  console.log(`✓ Created ${trainings.length} training courses\n`);

  // ============================================
  // Summary
  // ============================================
  console.log("=".repeat(50));
  console.log("✅ DATABASE SEED COMPLETE!\n");
  console.log("=".repeat(50));
  console.log("\n📊 Summary:");
  console.log(`  • ${orgs.length} Organisations`);
  console.log(`  • ${users.length} Users`);
  console.log(`  • ${grants.length} Grants`);
  console.log(`  • ${projects.length} Projects`);
  console.log(`  • ${applications.length} Applications`);
  console.log(`  • ${reports.length} Reports`);
  console.log(`  • ${trainings.length} Training Courses`);
  console.log("\n🔑 Test Accounts:");
  console.log("  • Admin: admin@elevestos.com / admin123");
  console.log("  • User: jane@hopefoundation.org.ke / password123");
  console.log("  • User: john@cleanwaterinit.org / password123");
  console.log("  • User: grace@womenempower.org / password123");
  console.log("\n🌐 To run: npx prisma db seed");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });