import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="w-24 h-24 mb-6 rounded-full bg-error/10 flex items-center justify-center">
        <svg className="w-12 h-12 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h1 className="text-display-md font-heading font-bold text-primary mb-2">
        Grant Not Found
      </h1>
      <p className="text-body-lg text-gray-600 mb-6 max-w-md">
        The grant you're looking for doesn't exist or has been removed.
      </p>
      <Link href="/dashboard/grants" className="btn-primary">
        Browse Grants
      </Link>
    </div>
  );
}