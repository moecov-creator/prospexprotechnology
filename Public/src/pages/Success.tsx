import { Star, TrendingUp, Users } from "lucide-react";

export default function Success() {
  const caseStudies = [
    {
      company: "Apex Roofing",
      metric: "+145%",
      label: "Increase in Leads",
      quote: "The missed call text back feature paid for the platform in the first week. We no longer lose jobs to competitors.",
    },
    {
      company: "Serenity Med Spa",
      metric: "0",
      label: "No-Shows Last Month",
      quote: "Automated appointment reminders and deposits have completely eliminated our no-show problem.",
    },
    {
      company: "Elite Plumbing",
      metric: "$45k",
      label: "Extra Revenue",
      quote: "The AI chat widget books emergency jobs at 2 AM while I'm sleeping. It's incredible.",
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 bg-[#0B101B]">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Success</h1>
          <p className="text-xl text-muted-foreground">See how businesses like yours are growing with Prospex Pro.</p>
        </div>
      </section>

      <section className="py-24 bg-white text-slate-900 border-y border-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col h-full shadow-sm">
                <h3 className="text-2xl font-bold mb-6">{study.company}</h3>
                <div className="mb-8">
                  <div className="text-5xl font-extrabold text-primary mb-2">{study.metric}</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{study.label}</div>
                </div>
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-lg italic mt-auto text-slate-700">"{study.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}