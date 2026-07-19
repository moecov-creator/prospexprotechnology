import { BookOpen, Video, FileText, HelpCircle } from "lucide-react";

export default function Resources() {
  const resources = [
    { icon: <BookOpen />, title: "Blog", desc: "Latest strategies for business growth, AI automation, and marketing." },
    { icon: <Video />, title: "Video Tutorials", desc: "Step-by-step guides on how to set up and optimize your account." },
    { icon: <FileText />, title: "Guides & E-books", desc: "Deep dives into industry-specific automation blueprints." },
    { icon: <HelpCircle />, title: "Help Center", desc: "Detailed documentation and answers to common questions." }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 bg-[#0B101B]">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-muted-foreground">Everything you need to master automation and scale your business.</p>
        </div>
      </section>

      <section className="py-24 bg-white text-slate-900 border-y border-slate-100">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((res, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group shadow-sm">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {res.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{res.title}</h3>
                <p className="text-slate-600">{res.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}