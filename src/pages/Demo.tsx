import { Check } from "lucide-react";
import { DemoModal } from "@/components/DemoModal";
import { Button } from "@/components/ui/button";

export default function Demo() {
  const features = [
    "Contact Management (CRM)",
    "Unlimited Website & Funnel Builder",
    "Automations & Workflows",
    "2-way Text & Email",
    "Phone Calling System",
    "Invoices and Payments",
    "Facebook & Instagram Integration",
    "Calendar: Appointment Booking",
    "Form Builder (Unlimited Forms)",
    "Website Builder (Unlimited Sites)",
    "Membership & Video Course Hosting",
    "Advanced Email Marketing Builder",
  ];

  return (
    <div className="flex flex-col w-full min-h-screen font-sans">
      {/* Top Section with Video */}
      <section className="pt-32 pb-16 bg-[#d2dce6] flex flex-col items-center justify-center">
        <div className="container max-w-5xl mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight flex items-center justify-center gap-3">
              <span>👉</span> PROSPEX PRO TECHNOLOGY DAILY DEMO Replay!
            </h1>
          </div>

          <div className="w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden border-4 border-slate-800 mb-8 aspect-video relative">
            <video 
              className="w-full h-full object-cover" 
              controls 
              poster="https://vibe.filesafe.space/1784315187211289656/attachments/9c72426e-c5a0-4cd0-8033-17ce24b2e1a9.jpg"
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <DemoModal>
            <Button className="bg-[#0f1b29] hover:bg-[#1a2b40] text-white font-medium text-sm md:text-base py-6 px-8 rounded-md uppercase tracking-wide">
              Click Here To Get Started
            </Button>
          </DemoModal>
        </div>
      </section>

      {/* Bottom Section with Features */}
      <section className="py-16 bg-white flex flex-col items-center">
        <div className="container max-w-3xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Full Access to Features:
          </h2>

          <div className="flex flex-col space-y-4 mb-8 w-full max-w-md mx-auto">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-[#22c55e] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-slate-800 font-medium text-sm md:text-base">{feature}</span>
              </div>
            ))}
            <div className="pl-8 pt-2">
              <span className="text-slate-600 text-sm">and more!</span>
            </div>
          </div>

          <DemoModal>
            <Button className="bg-[#0f1b29] hover:bg-[#1a2b40] text-white font-medium text-sm md:text-base py-6 px-8 rounded-md uppercase tracking-wide mt-4">
              Click Here To Get Started
            </Button>
          </DemoModal>
        </div>
      </section>
    </div>
  );
}