import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
            <h1 className="text-6xl font-bold text-white">404</h1>

            <h2 className="mt-4 text-2xl font-semibold text-white">
                Page Not Found
            </h2>

            <p className="mt-4 max-w-md text-slate-400">
                The page you're looking for doesn't exist or may have been moved.
            </p>

            <Link
                href="/"
                className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
                Back to Home
            </Link>
        </main>
    );
}