// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#f9f6f3] text-gray-700 text-center px-4">
      <h1 className="text-5xl font-cinzel mb-4">404</h1>
      <p className="text-lg mb-8">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="bg-[#B98E75] text-white px-6 py-3 rounded-full hover:bg-[#a47a64] transition"
      >
        Back Home
      </Link>
    </section>
  );
}
