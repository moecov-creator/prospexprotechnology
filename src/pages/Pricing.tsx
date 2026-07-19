import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$97",
      desc: "Perfect for small businesses just getting started with automation.",
      features: ["2 Users", "CRM & Pipeline Management", "Basic Email Marketing", "Standard Support"],
      link: "#" // Replace this with your Starter plan checkout link
    },
    {
      name: "Professional",
      price: "$297",
      desc: "Everything you need to scale your business with AI.",
      features: ["Unlimited Users", "AI Chat Widget", "Automated Calendar Booking", "SMS Marketing", "Missed Call Text Back", "Priority Support"],
      popular: true,
      link: "#" // Replace this with your Professional plan checkout link
    },
    {
      name: "Premier",
      price: "$497",
      desc: "Advanced features for established businesses.",
      features: ["Everything in Professional", "Custom AI Workflows", "Social Media Planner", "Advanced Reporting", "Dedicated Success Manager"],
      link: "#" // Replace this with your Premier plan checkout link
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 bg-[#0B101B]">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Pricing</h1>
          <p className="text-xl text-muted-foreground">Choose the perfect plan to grow your business.</p>
        </div>
      </section>

      <section className="py-24 bg-white text-slate-900 border-y border-slate-100">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-primary shadow-[0_0_30px_rgba(59,130,246,0.2)] bg-white scale-105 z-10' : 'border-slate-200 bg-slate-50'}`}>
                {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">Most Popular</div>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6 h-12">{plan.desc}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                <Button asChild className="w-full mb-8 h-12 text-lg" variant={plan.popular ? 'default' : 'outline'}>
                  <a href={plan.link}>Get Started</a>
                </Button>
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}