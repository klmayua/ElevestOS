import { getCurrentUser } from "@/features/auth/auth.actions";
import { getLMSStats, getAvailableCourses } from "@/features/lms/lms.service";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const DIFFICULTY_CONFIG: any = {
  BEGINNER: { label: "Beginner", color: "success" },
  INTERMEDIATE: { label: "Intermediate", color: "warning" },
  ADVANCED: { label: "Advanced", color: "error" },
};

const TYPE_CONFIG: any = {
  VIDEO: { label: "Video", icon: "🎥" },
  ARTICLE: { label: "Article", icon: "📄" },
  QUIZ: { label: "Quiz", icon: "📝" },
  WEBINAR: { label: "Webinar", icon: "🎤" },
  COURSE: { label: "Course", icon: "📚" },
};

export default async function TrainingPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/auth/login");

  const stats = await getLMSStats();
  const courses = await getAvailableCourses();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display-sm font-heading font-bold text-primary">
            Training & Learning
          </h1>
          <p className="text-body-lg text-gray-600 mt-2">
            Build your capacity with our learning resources
          </p>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-2 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
          />
          <select className="px-4 py-2 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary text-sm">
            <option value="">All Categories</option>
            <option value="Grant Writing">Grant Writing</option>
            <option value="Financial Management">Financial Management</option>
            <option value="Monitoring & Evaluation">Monitoring & Evaluation</option>
            <option value="Compliance">Compliance</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 bg-gradient-to-br from-primary to-primary/90 text-white">
          <p className="text-body-lg opacity-90">Total Courses</p>
          <p className="text-display-lg font-bold mt-1">{stats.totalCourses}</p>
        </div>
        <div className="card p-6 bg-gradient-to-br from-success to-success/90 text-white">
          <p className="text-body-lg opacity-90">Completed</p>
          <p className="text-display-lg font-bold mt-1">{stats.completedCourses}</p>
        </div>
        <div className="card p-6 bg-gradient-to-br from-warning to-warning/90 text-white">
          <p className="text-body-lg opacity-90">In Progress</p>
          <p className="text-display-lg font-bold mt-1">{stats.inProgressCourses}</p>
        </div>
      </div>

      {/* Learning Paths */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-h4 font-heading font-semibold text-primary">
            Learning Paths
          </h2>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="#" className="group p-6 rounded-md border border-border hover:border-secondary hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-body-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                Grant Writing Mastery
              </h3>
              <p className="text-body-sm text-gray-600 mt-2">
                Learn to write compelling grant proposals
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Badge variant="default">5 courses</Badge>
                <span className="text-body-xs text-gray-500">10 hours</span>
              </div>
            </Link>

            <Link href="#" className="group p-6 rounded-md border border-border hover:border-secondary hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-md bg-tertiary/10 flex items-center justify-center mb-4 group-hover:bg-tertiary/20 transition-colors">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-body-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                Financial Management
              </h3>
              <p className="text-body-sm text-gray-600 mt-2">
                Master NGO financial reporting and compliance
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Badge variant="default">4 courses</Badge>
                <span className="text-body-xs text-gray-500">8 hours</span>
              </div>
            </Link>

            <Link href="#" className="group p-6 rounded-md border border-border hover:border-secondary hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-body-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                Monitoring & Evaluation
              </h3>
              <p className="text-body-sm text-gray-600 mt-2">
                Track and measure your impact effectively
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Badge variant="default">6 courses</Badge>
                <span className="text-body-xs text-gray-500">12 hours</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Available Courses */}
      <div className="card">
        <div className="card-header flex items-center justify-between">
          <h2 className="text-h4 font-heading font-semibold text-primary">
            Available Courses
          </h2>
          <Link href="#" className="text-body-sm text-secondary hover:underline">
            View all
          </Link>
        </div>
        <div className="card-body">
          {courses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-body-lg text-gray-600">No courses available yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/dashboard/training/${course.id}`}
                  className="card p-6 hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="default">
                      {TYPE_CONFIG[course.type]?.icon} {TYPE_CONFIG[course.type]?.label}
                    </Badge>
                    <Badge variant={DIFFICULTY_CONFIG[course.difficulty]?.color || "default"}>
                      {DIFFICULTY_CONFIG[course.difficulty]?.label}
                    </Badge>
                  </div>
                  <h3 className="text-body-lg font-semibold text-primary line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-body-sm text-gray-600 mt-2 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-body-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {Math.floor(course.duration / 60)}h {course.duration % 60}m
                    </div>
                    <div className="flex items-center gap-1 text-body-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      {course.category}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
