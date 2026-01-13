import { UserPlus, Smartphone, FileText, CreditCard, Upload, Download, Info } from "lucide-react";

export const metadata = {
  title: "How to Apply | IAER Admissions",
  description: "Follow the simple, secure, fully online application process via IAER Kolkata Online Application Centre.",
};

export default function HowToApplyPage() {
  const steps = [
    {
      icon: UserPlus,
      title: "Register at IAER Application Centre",
      points: [
        "Visit the IAER Kolkata Online Application Centre and create your login account.",
        "Enter your valid Email ID.",
        "Create a password of your choice.",
        "Your Email ID will be your unique login ID.",
        "Log in anytime to complete or track your application.",
      ],
    },
    {
      icon: Smartphone,
      title: "Verify Mobile Number & Email",
      points: [
        "An OTP will be sent to your registered mobile number.",
        "Verify your email to ensure secure communication during admissions.",
      ],
    },
    {
      icon: FileText,
      title: "Fill Application Form",
      points: [
        "Enter personal details.",
        "Add academic qualifications.",
        "Select programme and specialization preference.",
        "Upload basic information as required.",
      ],
    },
    {
      icon: CreditCard,
      title: "Pay Application Fee",
      points: [
        "Pay securely via the portal’s payment gateway.",
        "Multiple online payment options are supported.",
        "Fee payment is mandatory to activate the application.",
        "Receive confirmation after successful payment.",
      ],
    },
    {
      icon: Upload,
      title: "Upload Required Documents",
      points: [
        "Academic certificates and mark sheets.",
        "Identity proof.",
        "Passport-size photograph.",
        "Any programme-specific documents.",
        "Ensure all documents are clear and legible.",
      ],
    },
    {
      icon: Download,
      title: "Submit Application & Download PDF",
      points: [
        "Review your application carefully.",
        "Submit the application online.",
        "Download the final application PDF for your records.",
      ],
    },
  ];

  const notes = [
    "Applications can be saved and completed later using your login credentials.",
    "Keep your Email ID and password confidential.",
    "All admission communication will be sent to your registered Email and mobile number.",
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative bg-[#100902] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            Admissions
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">How to Apply</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            IAER follows a simple, secure online application process through the IAER Kolkata Online Application Centre.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-accent">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#100902] text-white text-sm font-bold">
                        {idx + 1}
                      </span>
                      <h3 className="text-lg lg:text-xl font-bold text-[#100902]">{step.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {step.points.map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Info className="w-5 h-5 text-accent" />
                <h4 className="text-lg font-bold text-[#100902]">Important Notes</h4>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                {notes.map((n, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#100902] shrink-0"></span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

