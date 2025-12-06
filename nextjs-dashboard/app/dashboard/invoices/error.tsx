'use client';

import { useEffect } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console or send to error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
      <ExclamationTriangleIcon className="w-12 text-red-500" />
      <h2 className="text-lg font-semibold">Something went wrong!</h2>
      <p className="text-gray-500">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-400 transition-colors"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
