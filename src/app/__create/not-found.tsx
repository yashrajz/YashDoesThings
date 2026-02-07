import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-9xl font-bold text-gray-800">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="mb-8 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
