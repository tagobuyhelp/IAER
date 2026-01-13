import { TreeDeciduous, Leaf, Circle, AlertCircle, ShieldCheck, Palette, Maximize, Crop } from "lucide-react";

export const metadata = {
  title: "Our Identity | IAER",
  description: "Discover the meaning behind the IAER emblem and our core identity.",
};

export default function IdentityPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a0601] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            About IAER
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Identity
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Growth, Knowledge, and Purpose
          </p>
        </div>
      </section>

      {/* Emblem Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-6">Our Emblem</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                The IAER emblem represents growth, knowledge, and purpose. Designed as a flourishing tree, it symbolizes the institute’s commitment to nurturing minds, strengthening roots of learning, and enabling students to branch out into successful global careers. The emblem reflects IAER’s belief in holistic education, where academic excellence, ethics, and innovation grow together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* The Tree */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <TreeDeciduous className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-[#100902] mb-3">The Tree of Knowledge</h3>
                <p className="text-gray-600">
                  Signifies learning, growth, and continuity. Deep roots represent academic foundations, while expanding branches symbolize multidisciplinary education and limitless career pathways.
                </p>
              </div>

              {/* The Leaves */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Leaf className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-[#100902] mb-3">The Leaves</h3>
                <p className="text-gray-600">
                  Each leaf represents individual learners—diverse in aspirations and talents—forming a unified ecosystem. Reflects sustainability, renewal, and continuous development.
                </p>
              </div>

              {/* The Crest */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Circle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-[#100902] mb-3">The Circular Crest</h3>
                <p className="text-gray-600">
                  Signifies unity, inclusivity, and a global outlook. Reflects our commitment to international standards and preparing students for a globally connected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-16 bg-[#100902] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How to Use the IAER Emblem</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <p className="text-gray-300">The official IAER emblem must not be altered in shape, color, or proportion.</p>
                </div>
                <div className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <p className="text-gray-300">The emblem should always be used with the full institute name: Institute of Advance Education & Research (IAER).</p>
                </div>
                <div className="flex gap-4">
                    <Palette className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <p className="text-gray-300">Approved colors include the official Gold and Brown palette.</p>
                </div>
                <div className="flex gap-4">
                    <Maximize className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <p className="text-gray-300">Maintain adequate clear space around the emblem for visibility and impact.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                    <Crop className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <p className="text-gray-300">Do not crop, rotate, stretch, or distort the emblem.</p>
                </div>
                <div className="flex gap-4">
                    <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <p className="text-gray-300">Do not place text, graphics, or images inside or over the emblem.</p>
                </div>
                <div className="flex gap-4">
                    <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <p className="text-gray-300">Do not reproduce the emblem at extremely small sizes that affect legibility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
