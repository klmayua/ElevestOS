import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="w-24 h-24 mb-6 rounded-full bg-error/10 flex items-center justify-center">
        <svg className="w-12 h-12 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h1 className="text-display-md font-heading font-bold text-primary mb-2">
        Application Not Found
      </h1>
      <p className="text-body-lg text-gray-600 mb-6 max-w-md">
        The application you're looking for doesn't exist or has been removed.
      </p>
      <Link href="/dashboard/applications" className="btn-primary">
        View Applications
      </Link>
    </div>
  );
}