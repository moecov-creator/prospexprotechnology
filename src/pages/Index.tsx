import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Calendar, MessageSquare, LineChart, Users, Phone, CreditCard, Mail, Star, ShieldCheck, CheckCircle2, LayoutDashboard, Target, Zap, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DemoModal } from "@/components/DemoModal";
import { LogoIcon } from "@/components/Layout";

export default function Index() {
  const row1 = ["Mailchimp", "Hubspot", "ActiveCampaign", "Salesforce", "Pipedrive", "Zendesk", "Intercom", "Calendly", "Acuity", "ScheduleOnce"];
  const row2 = ["ClickFunnels", "Kajabi", "Teachable", "WordPress", "Wix", "Squarespace", "Shopify", "WooCommerce", "Stripe", "PayPal"];
  const row3 = ["Hootsuite", "Buffer", "Sprout Social", "Zapier", "Make", "Twilio", "Podium", "Birdeye", "SurveyMonkey", "Typeform"];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8">
            <Bot className="mr-2 h-4 w-4" />
            AI-Powered Business Growth
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Grow Your Business Faster With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">AI.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Prospex Pro Technology combines AI, CRM, Automation, Websites, Marketing, and Sales into one powerful platform that works for your business 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DemoModal>
              <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                Book Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </DemoModal>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/20 hover:bg-primary/10" asChild>
              <Link to="/demo">Watch Demo</Link>
            </Button>
          </div>

          <div className="mt-20 relative mx-auto max-w-[1100px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-30"></div>
            
            {/* Dashboard Mockup */}
            <div className="relative rounded-xl border border-slate-200/50 bg-white shadow-2xl overflow-hidden flex h-[600px] text-left">
              {/* Sidebar */}
              <div className="w-[240px] bg-[#0f172a] flex-shrink-0 flex flex-col hidden md:flex border-r border-slate-800">
                <div className="h-16 flex items-center px-6 border-b border-slate-800/50">
                  <div className="flex items-center gap-2">
                    <LogoIcon className="h-8 w-8 text-white" />
                    <div className="flex flex-col items-start justify-center pt-1">
                      <span className="text-sm font-bold tracking-tight text-[#22d3ee] leading-none mb-1">PROSPEXPRO</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-1 overflow-y-auto">
                  <div className="flex items-center gap-3 bg-primary/10 text-primary px-3 py-2.5 rounded-lg text-sm font-medium">
                    <LayoutDashboard size={18} /> Dashboard
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                    <MessageSquare size={18} /> Conversations
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                    <Calendar size={18} /> Calendars
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                    <Users size={18} /> Contacts
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                    <Target size={18} /> Opportunities
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                    <CreditCard size={18} /> Payments
                  </div>
                  <div className="my-4 border-t border-slate-800/50"></div>
                  <div className="flex items-center gap-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                    <Mail size={18} /> Marketing
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                    <Zap size={18} /> Automation
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
                {/* Topbar */}
                <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-white p-1.5 rounded">
                       <LayoutDashboard size={16} />
                    </div>
                    <span className="font-semibold text-slate-800 text-lg">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 hidden sm:flex">
                    <div className="flex items-center gap-2 text-sm text-slate-600 border border-slate-200 px-3 py-1.5 rounded-md bg-slate-50">
                      2024-05-01 <ArrowRight size={14} className="text-slate-400" /> 2024-05-31
                    </div>
                  </div>
                </div>

                {/* Dashboard Widgets */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Status Widget */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-semibold text-slate-600">Opportunity Status</span>
                      </div>
                      <div className="flex-1 flex items-center justify-center relative">
                        <div className="w-32 h-32 rounded-full border-[12px] border-slate-100 border-t-primary border-r-primary flex items-center justify-center rotate-45">
                           <div className="-rotate-45 text-center">
                              <span className="text-3xl font-bold text-slate-800 block">171</span>
                           </div>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 text-xs text-slate-500">
                          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-primary"></div> Open - 125</div>
                          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div> Won - 43</div>
                          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-slate-300"></div> Lost - 3</div>
                        </div>
                      </div>
                    </div>

                    {/* Value Widget */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-semibold text-slate-600">Opportunity Value</span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                         <div className="space-y-4">
                            <div className="flex items-center gap-3">
                               <span className="text-xs text-slate-400 w-8">LOST</span>
                               <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="w-[5%] h-full bg-slate-300"></div>
                               </div>
                            </div>
                            <div className="flex items-center gap-3">
                               <span className="text-xs text-slate-400 w-8">WON</span>
                               <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="w-[85%] h-full bg-primary"></div>
                               </div>
                            </div>
                            <div className="flex items-center gap-3">
                               <span className="text-xs text-slate-400 w-8">OPEN</span>
                               <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="w-[15%] h-full bg-[#38bdf8]"></div>
                               </div>
                            </div>
                         </div>
                         <div className="mt-6 text-center">
                            <span className="text-xs text-slate-400 block mb-1">Total revenue</span>
                            <span className="text-2xl font-bold text-slate-800">$32.51K</span>
                         </div>
                      </div>
                    </div>

                    {/* Conversion Widget */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-semibold text-slate-600">Conversion Rate</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-[12px] border-slate-100 border-t-primary border-r-primary flex items-center justify-center rotate-45 mb-4">
                           <div className="-rotate-45 text-center">
                              <span className="text-2xl font-bold text-slate-800 block">25.15%</span>
                           </div>
                        </div>
                        <div className="text-center">
                            <span className="text-xs text-slate-400 block mb-1">Won revenue</span>
                            <span className="text-xl font-bold text-slate-800">$30.78K</span>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Funnel Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-semibold text-slate-600">Funnel</span>
                        <div className="text-xs text-slate-500 border border-slate-200 px-2 py-1 rounded flex items-center gap-1">Sales <ChevronDown size={12}/></div>
                      </div>
                      <div className="space-y-3">
                         <div className="flex items-center">
                            <div className="w-[100%] bg-[#38bdf8] text-white text-xs py-2 px-3 rounded-r-md flex justify-between">
                               <span>New Lead</span><span>$52.1K</span>
                            </div>
                         </div>
                         <div className="flex items-center">
                            <div className="w-[75%] bg-[#22d3ee] text-white text-xs py-2 px-3 rounded-r-md flex justify-between">
                               <span>Discovery Call</span><span>$31.2K</span>
                            </div>
                         </div>
                         <div className="flex items-center">
                            <div className="w-[50%] bg-[#818cf8] text-white text-xs py-2 px-3 rounded-r-md flex justify-between">
                               <span>Appointment Set</span><span>$21.5K</span>
                            </div>
                         </div>
                         <div className="flex items-center">
                            <div className="w-[40%] bg-[#a78bfa] text-white text-xs py-2 px-3 rounded-r-md flex justify-between">
                               <span>Send Invoice</span><span>$16.6K</span>
                            </div>
                         </div>
                         <div className="flex items-center">
                            <div className="w-[30%] bg-primary text-white text-xs py-2 px-3 rounded-r-md flex justify-between">
                               <span>Closed Deal</span><span>$12.3K</span>
                            </div>
                         </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                       <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-semibold text-slate-600">Stage Distribution</span>
                        <div className="text-xs text-slate-500 border border-slate-200 px-2 py-1 rounded flex items-center gap-1">Sales <ChevronDown size={12}/></div>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                          <div className="w-40 h-40 rounded-full border-[16px] border-slate-100 border-t-[#22d3ee] border-r-primary border-b-[#a78bfa] border-l-[#38bdf8] flex items-center justify-center mx-auto">
                             <span className="text-3xl font-bold text-slate-800">171</span>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white text-slate-900 border-y border-slate-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-500">Built To Help Businesses Grow</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Industries Supported", value: "12+" },
              { label: "Automations Available", value: "20+" },
              { label: "Setup Time", value: "24 Hrs" },
              { label: "Support", value: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</span>
                <span className="text-sm font-medium text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-white text-slate-900 border-b border-slate-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything You Need To Grow</h2>
            <p className="text-lg text-slate-500">Replace 10+ tools with one powerful AI-driven platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Bot />, title: "AI Chat Widget", desc: "Convert website visitors 24/7." },
              { icon: <Users />, title: "CRM", desc: "Manage leads and customers." },
              { icon: <LineChart />, title: "Pipeline Management", desc: "Track sales automatically." },
              { icon: <Calendar />, title: "AI Appointment Setter", desc: "Book meetings on autopilot." },
              { icon: <MessageSquare />, title: "SMS Marketing", desc: "Reach customers instantly." },
              { icon: <Mail />, title: "Email Marketing", desc: "Automated nurture sequences." },
              { icon: <Phone />, title: "Missed Call Text Back", desc: "Never lose a lead again." },
              { icon: <CreditCard />, title: "Payments & Invoices", desc: "Get paid faster." },
            ].map((feature, i) => (
              <div key={i} className="group relative p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-500 mb-4">{feature.desc}</p>
                <Link to="/platform" className="text-primary font-medium flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consolidate Section */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-100 overflow-hidden">
        <div className="container text-center mb-12">
          <div className="text-sm font-bold tracking-wider text-primary uppercase mb-4">
            Consolidate Your Other Softwares
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
            Replace <span className="text-[#ef4444]">all of these</span> with<br />
            <span className="text-primary">Prospex Pro Technology</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Stop paying for tools that don't talk to each other. Prospex Pro Technology replaces them all.
          </p>
        </div>

        {/* Marquees */}
        <div className="relative flex flex-col gap-6 mb-16 select-none overflow-hidden max-w-[100vw]">
          {/* Gradient masks for smooth fade on edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

          {/* Row 1 */}
          <div className="flex w-max animate-marquee gap-6">
            {[...row1, ...row1, ...row1].map((tool, i) => (
              <div key={i} className="flex items-center justify-center px-8 py-4 bg-white border border-slate-200 rounded-full shadow-sm min-w-[160px]">
                <span className="text-slate-500 font-semibold relative text-lg">
                  {tool}
                  <span className="absolute left-[-10%] top-1/2 w-[120%] h-[2px] bg-[#ef4444] -translate-y-1/2 rotate-[-4deg]"></span>
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex w-max animate-marquee-reverse gap-6">
            {[...row2, ...row2, ...row2].map((tool, i) => (
              <div key={i} className="flex items-center justify-center px-8 py-4 bg-white border border-slate-200 rounded-full shadow-sm min-w-[160px]">
                <span className="text-slate-500 font-semibold relative text-lg">
                  {tool}
                  <span className="absolute left-[-10%] top-1/2 w-[120%] h-[2px] bg-[#ef4444] -translate-y-1/2 rotate-[-4deg]"></span>
                </span>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex w-max animate-marquee gap-6">
            {[...row3, ...row3, ...row3].map((tool, i) => (
              <div key={i} className="flex items-center justify-center px-8 py-4 bg-white border border-slate-200 rounded-full shadow-sm min-w-[160px]">
                <span className="text-slate-500 font-semibold relative text-lg">
                  {tool}
                  <span className="absolute left-[-10%] top-1/2 w-[120%] h-[2px] bg-[#ef4444] -translate-y-1/2 rotate-[-4deg]"></span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="container text-center flex flex-col items-center">
          <div className="inline-flex items-center px-6 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-8 text-lg">
            All replaced by Prospex Pro Technology
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DemoModal>
              <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </DemoModal>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-lg shadow-sm" asChild>
              <Link to="/demo">
                 Watch Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#0B101B]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground">A seamless automated system to turn strangers into loyal customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Capture Leads", desc: "From website, social, and ads." },
              { step: "02", title: "AI Responds", desc: "Instant answers 24/7." },
              { step: "03", title: "Book Appointments", desc: "Automated scheduling." },
              { step: "04", title: "Follow-Up", desc: "Continuous nurturing." },
              { step: "05", title: "Close Customers", desc: "Increase your revenue." },
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-xl font-bold text-primary mb-6 z-10">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i !== 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white text-slate-900 border-y border-slate-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We Help</h2>
            <p className="text-lg text-slate-500">Tailored solutions for your specific business needs.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["Roofing", "HVAC", "Plumbing", "Real Estate", "Insurance", "Med Spas", "Contractors", "Law Firms", "Dental", "Travel Agencies", "Restaurants", "Small Businesses"].map((industry, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-slate-200 bg-slate-50 hover:border-primary hover:text-primary transition-colors cursor-pointer font-medium">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0B101B]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Prospex Pro Technology?</h2>
            <p className="text-lg text-muted-foreground mb-8">Stop paying for multiple software tools that don't talk to each other. Get everything in one place.</p>
            
            <div className="space-y-4">
              {[
                "One Platform for Everything",
                "AI Automation that saves 20+ hours a week",
                "24/7 Lead Response",
                "No More Missed Calls",
                "Everything Connected Seamlessly",
                "Increase Revenue Automatically"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <DemoModal>
              <Button className="mt-10 h-12 px-8 text-lg">
                Get Started Today
              </Button>
            </DemoModal>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl"></div>
             <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://vibe.filesafe.space/1784315187211289656/attachments/e67ec4a8-fd35-493b-99f3-148c77d85a4e.png" alt="Cost Comparison" className="w-full h-auto object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white text-slate-900 border-y border-slate-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="flex gap-1 text-yellow-500 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-lg mb-8 italic text-slate-700">"Prospex Pro completely transformed how we handle leads. The AI books appointments while we sleep. Revenue is up 40% in just two months."</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-lg text-slate-600">
                    JD
                  </div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-slate-500">Owner, Premier Services</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-100">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "What is Prospex Pro Technology?",
                a: "Prospex Pro Technology is an all-in-one platform designed to help you generate leads, automate your follow-ups, and scale your business using advanced AI tools."
              },
              {
                q: "How long does it take to get set up?",
                a: "Most users are up and running within 24 to 48 hours. Our onboarding team provides a step-by-step guide to ensure your AI chat widget, CRM, and automations are configured perfectly for your business."
              },
              {
                q: "Do I need technical skills to use this?",
                a: "Not at all. We built Prospex Pro Technology to be incredibly user-friendly. Our intuitive drag-and-drop interface and pre-built templates mean you don't need any coding or technical experience to get started."
              },
              {
                q: "Can I integrate with my current tools?",
                a: "Yes! Prospex Pro Technology seamlessly integrates with thousands of popular applications, including Google Calendar, Facebook, Stripe, Quickbooks, and more, ensuring your workflow remains uninterrupted."
              },
              {
                q: "What happens if I need help?",
                a: "We offer 24/7 customer support via live chat, email, and phone. Additionally, you'll have access to our comprehensive library of video tutorials, help articles, and weekly live training sessions."
              },
              {
                q: "Is there a long-term contract?",
                a: "No, we believe in earning your business every month. There are no long-term contracts or hidden fees. You can choose a month-to-month plan and cancel at any time."
              },
              {
                q: "How does the AI appointment setter work?",
                a: "Our AI acts as a virtual assistant on your website or via SMS, engaging with leads instantly. It asks qualifying questions based on your criteria and automatically books appointments directly into your calendar without any human intervention."
              },
              {
                q: "Can I use my own domain?",
                a: "Absolutely. You can connect your custom domain to your Prospex Pro websites, funnels, and landing pages to maintain a consistent and professional brand identity."
              },
              {
                q: "Is my data secure?",
                a: "Security is our top priority. We use enterprise-grade encryption and adhere to strict data protection standards to ensure your information and your clients' data are always safe and secure."
              },
              {
                q: "Do you offer custom solutions?",
                a: "Yes, for our Enterprise clients, we offer custom development, dedicated account managers, and tailored integrations to meet the specific demands of large-scale operations. Contact our sales team for more details."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-slate-200">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[100px] rounded-full"></div>
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Grow With AI?</h2>
          <p className="text-xl text-muted-foreground mb-10">Join the businesses using Prospex Pro to automate their growth.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DemoModal>
              <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                Book Your Free Demo Today
              </Button>
            </DemoModal>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/20 hover:bg-primary/10" asChild>
               <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
