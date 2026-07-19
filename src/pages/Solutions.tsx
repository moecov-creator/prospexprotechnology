import { Building2, Home, Wrench, HeartPulse, Scale, Shield, Utensils, Plane } from "lucide-react";

export default function Solutions() {
  const industries = [
    { name: "Roofing", icon: <Home />, desc: "Automate quote follow-ups and capture emergency leads instantly.", image: "https://vibe.filesafe.space/1784315187211289656/assets/748f4e73-6706-4d88-832e-beb164474308.png" },
    { name: "HVAC", icon: <Wrench />, desc: "Book seasonal tune-ups automatically and never miss a service call.", image: "https://vibe.filesafe.space/1784315187211289656/assets/d21e7f52-042d-4279-8120-72d75ecbfd70.png" },
    { name: "Plumbing", icon: <Wrench />, desc: "Instant text-back for emergency leaks to win the job before competitors.", image: "https://vibe.filesafe.space/1784315187211289656/assets/3964aa71-5276-4176-9073-9c0b8dd67f4f.png" },
    { name: "Real Estate", icon: <Building2 />, desc: "Nurture buyers and sellers for months until they are ready to transact.", image: "https://vibe.filesafe.space/1784315187211289656/assets/2eba775c-8ff2-42d1-844d-ccee778d253f.png" },
    { name: "Med Spas", icon: <HeartPulse />, desc: "Fill your calendar with automated booking and appointment reminders.", image: "https://vibe.filesafe.space/1784315187211289656/assets/87ce53d2-daac-4f9a-8a6d-761f16c452e5.png" },
    { name: "Law Firms", icon: <Scale />, desc: "Securely intake new clients and automate the consultation scheduling.", image: "https://vibe.filesafe.space/1784315187211289656/assets/56764870-a78d-4b87-9183-90bb2c74dd67.png" },
    { name: "Insurance", icon: <Shield />, desc: "Follow up on policy renewals and cross-sell automatically.", image: "https://vibe.filesafe.space/1784315187211289656/assets/0e514194-20a5-420e-8340-07d6d475e80d.png" },
    { name: "Restaurants", icon: <Utensils />, desc: "Build a VIP text club to drive traffic on slow nights.", image: "https://vibe.filesafe.space/1784315187211289656/assets/2151af47-9fa2-41f9-be8c-d038736bd06f.png" },
    { name: "Travel Agencies", icon: <Plane />, desc: "Automate itinerary follow-ups and capture new vacation leads.", image: "https://vibe.filesafe.space/1784315187211289656/assets/70b23dad-9b74-41c5-ae00-a987222b3e06.png" }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 bg-[#0B101B]">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Solutions for Every Industry</h1>
          <p className="text-xl text-muted-foreground">Tailored automation strategies that fit your specific business model.</p>
        </div>
      </section>

      <section className="py-24 bg-white text-slate-900 border-y border-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-primary/50 transition-colors shadow-sm">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {ind.icon}
                </div>
                {ind.image && (
                  <img src={ind.image} alt={ind.name} className="w-full h-48 object-cover rounded-xl mb-6 shadow-sm" />
                )}
                <h3 className="text-2xl font-bold mb-4">{ind.name}</h3>
                <p className="text-slate-600">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}