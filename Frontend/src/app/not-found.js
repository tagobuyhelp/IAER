"use client";

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-gray-50 px-4 animate-in fade-in duration-700">
      <div className="text-center max-w-2xl mx-auto space-y-8">
        {/* Large 404 Text */}
        <div className="relative animate-in zoom-in-95 fade-in duration-1000 delay-100">
          <h1 className="text-[150px] font-black text-primary/5 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 fill-mode-both">
              Page Not Found
            </h2>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-300 fill-mode-both">
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-500 fill-mode-both">
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-primary uppercase tracking-wider transition-all duration-200 bg-white border border-primary/20 hover:bg-primary/5 hover:border-primary/50 rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>

          <Link
            href="/"
            className="group inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white uppercase tracking-wider transition-all duration-200 bg-accent hover:bg-accent/90 rounded-full shadow-[0_0_20px_-5px_rgba(255,107,0,0.5)] hover:shadow-[0_0_25px_-5px_rgba(255,107,0,0.6)] hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
