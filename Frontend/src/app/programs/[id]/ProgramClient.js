'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  Briefcase, 
  BookOpen, 
  Award,
  Download,
  Phone,
  FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';
import InfiniteCall from '@/components/InfiniteCall';

export default function ProgramClient({ program }) {
  const [activeTab, setActiveTab] = useState('overview');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className=" bg-black lg-min-h-screen text-white selection:bg-accent selection:text-white pb-24 lg:pb-0">
      <InfiniteCall />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[200px] lg:h-[60vh] lg:min-h-[500px] flex items-end pb-0 lg:pb-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={program.image || '/images/iaer-campus.png'}
            alt={program.title}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <Link 
              href="/programs" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Programs
            </Link>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-xs md:text-sm backdrop-blur-md">
                {program.code}
              </span>
              <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 border border-white/10 text-white font-medium text-xs md:text-sm backdrop-blur-md">
                Full Time
              </span>
            </div>
            
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {program.title}
            </h1>
            
            <p className="text-base md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              {program.subtitle || program.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            
            {/* Quick Info Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12"
            >
              <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent mb-2 md:mb-3" />
                <div className="text-xs md:text-sm text-gray-400">Duration</div>
                <div className="text-base md:text-lg font-semibold">{program.overview.duration}</div>
              </div>
              <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-accent mb-2 md:mb-3" />
                <div className="text-xs md:text-sm text-gray-400">Mode</div>
                <div className="text-base md:text-lg font-semibold">{program.overview.mode}</div>
              </div>
              <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors col-span-2 md:col-span-1">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent mb-2 md:mb-3" />
                <div className="text-xs md:text-sm text-gray-400">Eligibility</div>
                <div className="text-base md:text-lg font-semibold">{program.overview.eligibility}</div>
              </div>
            </motion.div>

            {/* Content Tabs */}
            <div className="mb-8 md:mb-12">
              <div className="flex justify-start mb-6 md:mb-8 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                <div className="inline-flex flex-nowrap gap-1 p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                  {['overview', 'curriculum', 'careers'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "relative px-5 py-2 md:px-8 md:py-3 text-xs md:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap",
                        activeTab === tab ? "text-black font-bold" : "text-gray-400 hover:text-white"
                      )}
                    >
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeProgramTab"
                          className="absolute inset-0 bg-accent rounded-full shadow-lg shadow-accent/25"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="min-h-[300px]">
                {activeTab === 'overview' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6 md:space-y-8"
                  >
                    <div className="prose prose-invert max-w-none">
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">Program Overview</h3>
                      <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        {program.longDescription || program.description}
                      </p>
                    </div>

                    {program.highlights && (
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">Key Highlights</h3>
                        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                          {program.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start p-3 md:p-4 rounded-xl bg-white/5 border border-white/10">
                              <span className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 rounded-full bg-accent mr-3 shrink-0" />
                              <span className="text-sm md:text-base text-gray-300">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'curriculum' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6 md:space-y-8"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white flex items-center gap-2">
                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-accent" /> Course Structure
                      </h3>
                      <div className="space-y-3 md:space-y-4">
                        {program.curriculum.structure.map((item, idx) => (
                          <div key={idx} className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors">
                            <div className="font-mono text-sm md:text-base text-accent font-bold whitespace-nowrap">
                              {item.split(':')[0]}
                            </div>
                            <div className="text-sm md:text-base text-gray-300">
                              {item.split(':')[1] || item}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {program.curriculum.specializations && (
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">Specializations</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {program.curriculum.specializations.map((spec, idx) => (
                            <span key={idx} className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'careers' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6 md:space-y-8"
                  >
                    <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/20">
                      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Career Outcomes</h3>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        {program.careerOutcomes.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white border-b border-white/10 pb-2">Job Roles</h4>
                        <ul className="space-y-2 md:space-y-3">
                          {program.careerOutcomes.roles.map((role, idx) => (
                            <li key={idx} className="flex items-center text-sm md:text-base text-gray-400">
                              <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent mr-2 md:mr-3" />
                              {role}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white border-b border-white/10 pb-2">Target Sectors</h4>
                        <ul className="space-y-2 md:space-y-3">
                          {program.careerOutcomes.sectors.map((sector, idx) => (
                            <li key={idx} className="flex items-center text-sm md:text-base text-gray-400">
                              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent mr-2 md:mr-3" />
                              {sector}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            {/* Fee Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 md:p-8 rounded-3xl bg-zinc-900 border border-white/10 sticky top-24"
            >
              <div className="mb-6 md:mb-8">
                <p className="text-gray-400 text-xs md:text-sm mb-2">Total Course Fee</p>
                <div className="text-2xl md:text-4xl font-bold text-white mb-2">{program.fees.total}</div>
                {program.fees.afterScholarship && (
                  <div className="inline-block px-3 py-1 rounded-md bg-green-500/10 text-green-400 text-xs md:text-sm font-medium">
                    {program.fees.afterScholarship} with scholarship
                  </div>
                )}
              </div>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <Link href="https://admission.iaer.ac.in/" target="_blank" className="block">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white py-4 md:py-6 text-base md:text-lg rounded-xl shadow-lg shadow-accent/20">
                    Apply Now
                  </Button>
                </Link>
                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-black py-4 md:py-6 rounded-xl text-sm md:text-base">
                  <Download className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" /> Download Brochure
                </Button>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs md:text-sm pt-2 md:pt-4">
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" /> 
                  <span>Need help? Call +91 90070 30123</span>
                </div>
              </div>

              {program.fees.notes && (
                <div className="pt-4 md:pt-6 border-t border-white/10 space-y-1.5 md:space-y-2">
                  {program.fees.notes.map((note, idx) => (
                    <p key={idx} className="text-[10px] md:text-xs text-gray-500">* {note}</p>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Why Choose Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white flex items-center gap-2">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-accent" /> Why this program?
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {program.whyStudy.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent shrink-0 mt-0.5" />
                    {reason}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0a0601]/95 backdrop-blur-lg border-t border-white/10 lg:hidden safe-area-bottom">
        <div className="flex gap-3">
          <a 
            href={`tel:${program.contact?.phone || '+919007030123'}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium active:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </a>
          <Link 
            href="https://admission.iaer.ac.in/"
            target="_blank" 
            className="flex-[2] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-accent text-[#0a0601] font-bold hover:bg-accent/90 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Apply Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
