
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    ArrowRight,
    Globe,
    MessageCircle,
    Info,
    Building2,
    GraduationCap,
    Users,
    Briefcase,
    CheckCircle2,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Contact IAER | Institute of Advance Education & Research',
    description: 'Get in touch with IAER for admissions, academic programs, and general enquiries. Visit our campus in Newtown, Kolkata or contact us via phone/email.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/contact/contact-iaer-hero-campus-reception.png"
                        alt="IAER Campus Reception"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-4 backdrop-blur-sm">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Institute of Advance <br />
                            <span className="text-accent">Education & Research (IAER)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                            We are here to assist you with admissions, academic programs, campus facilities, accommodation, careers, and general enquiries. Please reach out through the appropriate official channel for a faster response.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Contact Info & Office Hours */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-24 relative z-20">
                        {/* Address Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-accent">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Campus Address</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                <strong>Institute of Advance Education & Research (IAER)</strong><br />
                                Plot No. 37, Block – Bhangar-II<br />
                                Near St. Xavier’s University<br />
                                Newtown Action Area – III<br />
                                Kolkata, West Bengal – 700160<br />
                                India
                            </p>
                        </div>

                        {/* Office Hours Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Office Hours</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                                    <span>Monday to Saturday</span>
                                    <span className="font-semibold text-gray-900">10:00 AM – 5:30 PM</span>
                                </li>
                                <li className="flex justify-between items-center pt-2">
                                    <span>Sunday & Public Holidays</span>
                                    <span className="font-semibold text-red-500">Closed</span>
                                </li>
                            </ul>
                            <div className="mt-6 relative h-32 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/contact/iaer-office-hours-administration.png"
                                    alt="Office Hours"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* General Info Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-600">
                            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                <Info className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">General Enquiries</h3>
                            <p className="text-gray-600 mb-6">
                                For general information regarding the institute, events, and other non-admission related queries.
                            </p>
                            <div className="space-y-4">
                                <a href="mailto:info@iaer.in" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-green-50">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">info@iaer.in</span>
                                </a>
                                <a href="tel:+916290768551" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-green-50">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">+91 62907 68551</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directory Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Department Directory</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Please contact the relevant department based on your requirement for quick assistance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Phone Directory */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                                <Phone className="w-6 h-6 text-accent" /> Phone Directory
                            </h3>
                            <div className="grid gap-4">
                                {[
                                    { title: "Admissions Enquiries", number: "+91 800 111 0000", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
                                    { title: "Student Accommodation & Hostel", number: "+91 62907 56616", icon: Building2, color: "text-purple-600", bg: "bg-purple-50" },
                                    { title: "International Students", number: "+91 91233 66255", icon: Globe, color: "text-orange-600", bg: "bg-orange-50" },
                                    { title: "Careers & Recruitment", number: "+91 91233 66255", icon: Briefcase, color: "text-green-600", bg: "bg-green-50" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all bg-white group">
                                        <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium mb-1">{item.title}</p>
                                            <a href={`tel:${item.number.replace(/\s/g, '')}`} className="text-lg font-bold text-gray-900 hover:text-accent transition-colors">
                                                {item.number}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Email Directory */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                                <Mail className="w-6 h-6 text-accent" /> Email Directory
                            </h3>
                            <div className="grid gap-4">
                                {[
                                    { title: "Admissions", email: "admission@iaer.in", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
                                    { title: "Student Accommodation & Hostel", email: "hostels@iaer.in", icon: Building2, color: "text-purple-600", bg: "bg-purple-50" },
                                    { title: "International Students", email: "admin@iaer.in", icon: Globe, color: "text-orange-600", bg: "bg-orange-50" },
                                    { title: "Careers & Recruitment", email: "career@iaer.in", icon: Briefcase, color: "text-green-600", bg: "bg-green-50" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all bg-white group">
                                        <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium mb-1">{item.title}</p>
                                            <a href={`mailto:${item.email}`} className="text-lg font-bold text-gray-900 hover:text-accent transition-colors">
                                                {item.email}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admissions Support */}
            <section className="py-20 bg-[#100902] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/contact/iaer-admissions-counselling-session.png"
                        alt="Admissions Support Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#100902] via-[#100902]/90 to-[#100902]/50"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold">Admissions Support</h2>
                            <p className="text-xl text-gray-300">
                                Our admissions team provides comprehensive guidance to help you choose the right path for your career.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Program selection (UG, PG & Diploma)",
                                    "Eligibility criteria & application process",
                                    "Fee structure, scholarships & EMI options",
                                    "Campus visits and counselling sessions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-lg text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full">
                                    <Link href="https://admission.iaer.ac.in/" target="_blank">
                                        Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full">
                                    <a href="tel:+918001110000">
                                        Talk to Admissions
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-lg">
                            <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/images/contact/iaer-academic-program-guidance.png"
                                    alt="Academic Guidance"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Location */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full h-[400px] relative rounded-2xl overflow-hidden shadow-xl">
                            {/* Map Placeholder or Image */}
                            <Image
                                src="/images/campus/iaer-campus.png"
                                alt="IAER Campus Location"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                                <p className="font-semibold text-gray-900 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-accent" /> Newtown Action Area – III, Kolkata
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 space-y-8">
                            <h2 className="text-3xl font-bold text-gray-900">Campus Location & Accessibility</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                IAER is located in <span className="text-accent font-semibold">Newtown Action Area-III, Kolkata</span>, a major educational and institutional hub with excellent connectivity.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Building2 className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Nearby Landmark</h4>
                                        <p className="text-gray-600">St. Xavier’s University, Kolkata</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Users className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Accessibility</h4>
                                        <p className="text-gray-600 mb-2">The campus is easily accessible via:</p>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-1">
                                            <li>Road transport from Newtown, Rajarhat & Salt Lake</li>
                                            <li>Public transport and app-based cab services</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-12 bg-red-50 border-y border-red-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto flex gap-6 items-start">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                            <Info className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-red-700 mb-2">Important Notice</h3>
                            <p className="text-red-800/80 leading-relaxed mb-4">
                                All admissions and official communications are conducted only through <strong>IAER’s authorised contact details</strong> listed on this page.
                                IAER <strong>does not</strong> appoint or authorise third-party agents for admissions or fee collection.
                                Applicants are advised to avoid unauthorised sources and intermediaries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stay Connected */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Connected</h2>
                        <p className="text-gray-600 text-lg">
                            For official updates, academic announcements, and institutional information, please rely only on IAER’s verified communication channels.
                        </p>
                    </div>

                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-2xl">
                        <Image
                            src="/images/contact/iaer-official-digital-communication.png"
                            alt="Stay Connected"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="flex gap-4">
                                {[
                                    { href: "https://www.facebook.com/iaerindia/", icon: Facebook, label: "Facebook" },
                                    { href: "https://www.pinterest.com/iaerindia/", icon: Pinterest, label: "Pinterest" },
                                    { href: "https://www.instagram.com/iaerindia/", icon: Instagram, label: "Instagram" },
                                    { href: "https://www.linkedin.com/school/iaer/", icon: Linkedin, label: "LinkedIn" },
                                    { href: "https://x.com/iaerindia", icon: Twitter, label: "Twitter" },
                                    { href: "https://www.youtube.com/channel/UCzVuXEZ6EUykVF0qhHKcdfQ/featured", icon: Youtube, label: "YouTube" }
                                ].map((social) => (
                                    <a 
                                        key={social.label} 
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-accent text-white transition-all cursor-pointer"
                                    >
                                        <span className="sr-only">{social.label}</span>
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-accent text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Start Your Journey at IAER</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-accent hover:bg-gray-100 px-10 py-6 text-lg rounded-full font-bold shadow-lg">
                            <Link href="https://admission.iaer.ac.in/" target="_blank">
                                Apply Now
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white/10 px-10 py-6 text-lg rounded-full font-bold">
                            <a href="tel:+918001110000">
                                Contact Admissions
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

const Pinterest = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.644 0-5.784 2.739-5.784 5.562 0 1.102.424 2.286.954 2.927.104.128.12.24.088.434-.096.402-.317 1.285-.359 1.465-.058.239-.189.288-.433.172-1.615-.749-2.619-3.097-2.619-4.989 0-4.065 2.951-7.796 8.523-7.796 4.474 0 7.954 3.188 7.954 7.452 0 4.448-2.802 8.03-6.692 8.03-1.306 0-2.533-.678-2.954-1.481 0 0-.707 2.691-.878 3.348-.317 1.216-1.169 2.72-1.748 3.647 1.53.451 3.15.696 4.827.696 6.621 0 12.017-5.367 12.017-11.987 0-6.62-5.396-11.987-12.017-11.987z" />
  </svg>
);


