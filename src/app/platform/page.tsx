import PublicNavbar from "@/components/layout/public-navbar";
import PublicFooter from "@/components/layout/public-footer";

export default function PlatformPage() {
  return (
    <>
      <PublicNavbar />

      <main className="bg-white text-gray-900">
        {/* Hero */}
        <section className="border-b border-gray-100 px-6 py-28 lg:px-24 lg:py-40">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-body-md font-medium text-blue-600">
              ElevestOS Platform
            </div>
            <h1 className="text-display-lg leading-tight tracking-tight text-gray-900">
              The Infrastructure Layer for NGO Operations
            </h1>
            <p className="mt-8 max-w-2xl text-body-lg leading-relaxed text-gray-600">
              ElevestOS sits beneath the tools you already use and above the
              daily work your teams perform. It doesn&apos;t replace your CRM,
              your accounting software, or your project management platform. It
              coordinates how work flows between them, creating a unified
              operating system that ensures nothing falls through the cracks.
            </p>
          </div>
        </section>

        {/* Operating System Overview */}
        <section className="border-b border-gray-100 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-blue-600">
              What ElevestOS Is
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-gray-900">
              Not a Tool. An Operating System.
            </h2>
            <div className="mt-10 space-y-6 text-body-md leading-relaxed text-gray-600">
              <p>
                Most software in the social sector addresses a single function:
                grant management, monitoring and evaluation, financial
                reporting, or volunteer coordination. These tools solve discrete
                problems, but they also create fragmentation. Data lives in
                silos. Reports are reconstructed from memory. Institutional
                knowledge walks out the door with each departing staff member.
              </p>
              <p>
                ElevestOS takes a fundamentally different approach. It provides
                the connective tissue between every function an NGO performs and
                every layer of the funding ecosystem. Grants discovery connects
                to application writing. Application writing connects to project
                execution. Project execution connects to compliance tracking and
                institutional reporting. Every connection is automatic, auditable,
                and persistent.
              </p>
              <p>
                The result is a single source of truth that coordinates grants,
                projects, reporting, compliance, team workflows, and
                institutional memory. Funders gain the same clarity: a lens into
                the real operational health of the organisations they support,
                not just the polished final reports.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Grants", desc: "Discovery through close-out, end to end" },
                { label: "Projects", desc: "Execution tracked against funded objectives" },
                { label: "Reporting", desc: "Emerges from daily work, not last-minute scrambles" },
                { label: "Compliance", desc: "Recorded as work happens, continuously auditable" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-6"
                >
                  <p className="text-heading-xl font-semibold text-gray-900">
                    {item.label}
                  </p>
                  <p className="mt-2 text-body-md leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NGO Layer */}
        <section className="border-b border-gray-100 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-blue-600">
              The NGO Layer
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-gray-900">
              Built for How NGOs Actually Work
            </h2>
            <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-gray-600">
              Every capability in ElevestOS is designed around the real
              operational rhythms of a non-governmental organisation. From the
              moment you search for funding to the moment a multi-year programme
              closes, the system captures, connects, and preserves every
              decision and deliverable.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Grant Matching",
                  desc: "Discover funding opportunities aligned with your mission, capabilities, and track record. No more scrolling through endless calls for proposals and hoping one fits.",
                },
                {
                  title: "Application Workspace",
                  desc: "Build applications from verified organisational data. Budgets, team bios, past results, and compliance documents are pre-loaded, not recreated from scratch.",
                },
                {
                  title: "Project Execution",
                  desc: "Run funded work with full visibility. Activities, milestones, budgets, and deliverables are tracked in real time against the approved proposal.",
                },
                {
                  title: "Reporting",
                  desc: "Reports are not separate artifacts. They emerge from the daily data already in the system. Narrative, financial, and impact reports assemble themselves.",
                },
                {
                  title: "Compliance",
                  desc: "Compliance is not a periodic audit panic. It is recorded continuously as work happens, creating an unbroken chain of evidence.",
                },
                {
                  title: "Institutional Memory",
                  desc: "Past decisions, approved processes, historical reports, and lessons learned persist beyond individual staff tenures. The organisation remembers what it has done and why.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-7">
                  <h3 className="text-heading-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body-md leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Funder Layer */}
        <section className="border-b border-gray-100 bg-gray-50 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-blue-600">
              The Funder Layer
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-gray-900">
              Deploy Capital with Clarity
            </h2>
            <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-gray-600">
              Funders operate with asymmetric information. NGOs submit polished
              proposals and curated reports, but the reality on the ground
              remains opaque. ElevestOS replaces that opacity with a live,
              verifiable view of organisational health, project progress, and
              compliance standing.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "NGO Discovery",
                  desc: "Find capable organisations based on verified operational data, not just compelling proposals. Search by sector, geography, capacity, and past performance.",
                },
                {
                  title: "Portfolio Monitoring",
                  desc: "Real-time visibility across every funded project. Track milestones, budgets, risks, and outcomes in a single dashboard.",
                },
                {
                  title: "Live Oversight",
                  desc: "Move beyond periodic report cycles. See activity as it happens, flag issues before they become crises, and engage with implementers on an ongoing basis.",
                },
                {
                  title: "Audit Workspace",
                  desc: "Access a complete, chronological record of every decision, expenditure, and deliverable. Audit readiness is built into the system, not bolted on at year-end.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-8">
                  <h3 className="text-heading-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body-md leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shared Infrastructure */}
        <section className="border-b border-gray-100 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-blue-600">
              Shared Infrastructure
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-gray-900">
              The Marketplace Layer
            </h2>
            <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-gray-600">
              Beyond the direct NGO-funder relationship lies a broader
              ecosystem. ElevestOS provides shared infrastructure that connects
              organisations, funders, talent, and service providers across the
              entire social sector.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Two-Way Matching",
                  desc: "NGOs discover funders aligned with their mission. Funders discover NGOs with proven capacity. Matching is driven by verified data, not keyword searches.",
                },
                {
                  title: "Partnership Finder",
                  desc: "Find implementing partners, co-applicants, and consortium members based on complementary capabilities and shared geographic presence.",
                },
                {
                  title: "Talent Marketplace",
                  desc: "Connect with verified professionals across the sector. Consultants, technical experts, and programme staff with documented track records.",
                },
                {
                  title: "Training & Capacity Building",
                  desc: "Access structured learning pathways tied to real organisational needs. Training is contextual, not generic.",
                },
                {
                  title: "Capacity Tracking",
                  desc: "Build and demonstrate organisational capability over time. Every successfully delivered project strengthens your verified profile.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-7">
                  <h3 className="text-heading-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body-md leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institutional Memory */}
        <section className="border-b border-gray-100 bg-gray-50 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-blue-600">
              Institutional Memory
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-gray-900">
              Knowledge That Outlasts Individuals
            </h2>
            <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-gray-600">
              The single greatest operational risk in the social sector is the
              loss of institutional knowledge. When a programme manager leaves,
              when a finance director retires, when a country office closes,
              years of accumulated understanding often disappear. ElevestOS
              solves this at the infrastructure level.
            </p>

            <div className="mt-12 space-y-6 text-body-md leading-relaxed text-gray-600">
              <p>
                Every grant application, every approved budget revision, every
                compliance decision, and every programme report is permanently
                recorded, indexed, and retrievable. When a new staff member
                joins, they don&apos;t inherit a folder of disorganised
                documents. They inherit a structured, searchable history of
                what the organisation has done, why it made the decisions it
                made, and how it delivered on its commitments.
              </p>
              <p>
                This persistence transforms institutional memory from a
                liability — something fragile that must be protected — into an
                asset that compounds over time. Past proposals inform future
                applications. Historical budgets anchor new cost estimates.
                Lessons learned from completed projects shape the design of new
                ones. The organisation becomes wiser with every cycle, not
                merely older.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                { title: "Past Decisions", desc: "Every approval, revision, and sign-off permanently recorded and retrievable." },
                { title: "Approved Processes", desc: "Workflows, templates, and standards that have been validated through actual use." },
                { title: "Historical Reports", desc: "Narrative, financial, and impact reports archived with full context and metadata." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6">
                  <p className="text-heading-lg font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-2 text-body-md leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Reporting Layer */}
        <section className="border-b border-gray-100 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-blue-600">
              Compliance &amp; Reporting
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-gray-900">
              Compliance as a Byproduct, Not a Burden
            </h2>
            <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-gray-600">
              In most organisations, compliance and reporting are separate
              activities that happen after the real work is done. Staff compile
              data from scattered spreadsheets, reconstruct timelines from
              email chains, and assemble evidence for auditors under deadline
              pressure. It is costly, error-prone, and demoralising.
            </p>

            <div className="mt-12 space-y-6 text-body-md leading-relaxed text-gray-600">
              <p>
                In ElevestOS, compliance is recorded as a natural consequence
                of daily operations. When a procurement decision is made, the
                approval chain, the supporting documents, the budget check, and
                the policy justification are all captured in the system at the
                moment of action. When a milestone is marked complete, the
                evidence, the verification, and the sign-off are attached
                automatically. There is no separate &ldquo;compliance audit
                preparation&rdquo; phase because the record has been building
                continuously since day one.
              </p>
              <p>
                Reporting follows the same principle. Narrative reports draw on
                activity logs, milestone completions, and team communications
                already in the system. Financial reports pull from
                transaction-level data recorded throughout the project lifecycle.
                Impact reports aggregate outputs, outcomes, and beneficiary
                data tracked from the field. The report is not something you
                write at the end. It is something the system assembles from
                work already done.
              </p>
            </div>
          </div>
        </section>

        {/* Ecosystem Effects */}
        <section className="border-b border-gray-100 bg-gray-50 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-blue-600">
              Ecosystem Effects
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-gray-900">
              The Compounding Advantage of Shared Infrastructure
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-7">
                <p className="text-heading-xl font-semibold text-gray-900">
                  Habit-Based Lock-In
                </p>
                <p className="mt-3 text-body-md leading-relaxed text-gray-500">
                  As teams integrate ElevestOS into their daily workflows, the
                  system becomes the default environment for every operational
                  action. Leaving means rebuilding not just a tool but an entire
                  way of working.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-7">
                <p className="text-heading-xl font-semibold text-gray-900">
                  Workflow Compounding
                </p>
                <p className="mt-3 text-body-md leading-relaxed text-gray-500">
                  Each completed project enriches the institutional knowledge
                  base. Each verified partnership strengthens discovery
                  algorithms. Each recorded decision improves future
                  recommendations. Value compounds with use.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-7">
                <p className="text-heading-xl font-semibold text-gray-900">
                  Institutional Normalisation
                </p>
                <p className="mt-3 text-body-md leading-relaxed text-gray-500">
                  When funders begin expecting the clarity that ElevestOS
                  provides, organisations outside the system face an increasing
                  burden of proof. Adoption becomes not just beneficial but
                  strategic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Defensibility */}
        <section className="border-b border-gray-100 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-blue-600">
              Defensibility
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-gray-900">
              Why ElevestOS Is Hard to Replace
            </h2>
            <p className="mt-6 max-w-3xl text-body-md leading-relaxed text-gray-600">
              ElevestOS is not defended by a single feature or a patentable
              algorithm. It is defended by the depth of its integration into
              organisational life and the compounding nature of the data,
              workflows, and relationships it hosts.
            </p>

            <div className="mt-12 space-y-10">
              <div className="grid gap-4 sm:grid-cols-[180px_1fr]">
                <p className="text-body-md font-semibold uppercase tracking-wider text-blue-600">
                  Behavioural Lock-In
                </p>
                <div className="text-body-md leading-relaxed text-gray-600">
                  <p>
                    When an organisation&apos;s grant applications are built from
                    verified profiles, when its reports are assembled from
                    live project data, when its compliance records are maintained
                    continuously — replacing the system means not just migrating
                    data but retraining staff, rebuilding workflows, and
                    accepting a regression in operational quality. The switching
                    cost is measured in organisational disruption, not software
                    licensing fees.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[180px_1fr]">
                <p className="text-body-md font-semibold uppercase tracking-wider text-blue-600">
                  Compounding Value
                </p>
                <div className="text-body-md leading-relaxed text-gray-600">
                  <p>
                    Unlike a database or a document store — which holds static
                    value — ElevestOS grows more useful the longer it is used.
                    Historical data improves matching accuracy. Past projects
                    inform future proposals. Accumulated compliance records
                    reduce due diligence overhead. Year three delivers more
                    value than year one, and year five more than year three.
                    Departing means abandoning that accumulated advantage.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[180px_1fr]">
                <p className="text-body-md font-semibold uppercase tracking-wider text-blue-600">
                  Ecosystem Dependency
                </p>
                <div className="text-body-md leading-relaxed text-gray-600">
                  <p>
                    As more NGOs use ElevestOS, funders gain a standardised way
                    to discover, assess, and monitor organisations. As more
                    funders use ElevestOS, NGOs gain access to opportunities and
                    streamlined application processes unavailable elsewhere. As
                    more partners, consultants, and service providers join the
                    marketplace, the network effect accelerates. An organisation
                    leaving the ecosystem loses not just an operating system but
                    a marketplace of opportunity.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 border-l-4 border-blue-600 bg-blue-50 px-8 py-6">
              <p className="text-body-lg font-semibold text-gray-900">
                ElevestOS is infrastructure.
              </p>
              <p className="mt-2 text-body-md leading-relaxed text-gray-600">
                It is not evaluated against competitors. It is evaluated against
                the alternative of fragmentation — of disconnected tools,
                lost knowledge, reconstructed reports, and the persistent
                inefficiency that the social sector has accepted as normal for
                too long.
              </p>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </>
  );
}
