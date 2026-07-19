import { Bot, LineChart, Calendar, MessageSquare, Mail, Phone, CreditCard, Share2, Paperclip, Send, ChevronDown, Filter, Workflow, Play, Wand2, FileText, Edit, Hash, HelpCircle, Mic, Voicemail, Star, Image as ImageIcon, Users, Megaphone, Search, ArrowLeft } from "lucide-react";

export default function Platform() {
  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Chat Widget",
      description: "Our AI Chat Widget engages your website visitors 24/7, answering their questions, capturing their contact information, and booking appointments automatically while you sleep."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "CRM & Pipeline Management",
      description: "Keep track of every lead and customer. Our visual pipeline lets you see exactly where everyone is in your sales process, ensuring no opportunity falls through the cracks."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Automated Calendar Booking",
      description: "Eliminate the back-and-forth of scheduling. Let clients book directly on your calendar, complete with automated reminders to reduce no-shows."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "SMS & Text Marketing",
      description: "Reach your customers where they are. Send broadcast messages, promotional offers, and automated follow-ups with an incredible 98% open rate."
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Marketing Automation",
      description: "Build powerful email sequences that nurture leads over time. Create beautiful newsletters and track opens, clicks, and conversions."
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Missed Call Text Back",
      description: "Never lose a lead to a missed call again. If you miss a call, the system instantly texts them back saying 'Sorry we missed you! How can we help?'"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Payments & Invoicing",
      description: "Send invoices via text or email and get paid faster. Integrate with Stripe and PayPal to collect payments directly through the platform."
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Planner",
      description: "Schedule your content across Facebook, Instagram, LinkedIn, and more from one central dashboard. Keep your social presence active effortlessly."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 bg-[#0B101B]">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The Ultimate AI Growth Platform</h1>
          <p className="text-xl text-muted-foreground">Everything you need to capture leads, automate follow-up, and close more deals—all in one place.</p>
        </div>
      </section>

      <section className="py-24 bg-white text-slate-900 border-y border-slate-100">
        <div className="container max-w-6xl">
          <div className="space-y-24">
            {features.map((feature, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{feature.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
                <div className="flex-1 relative w-full">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                  {i === 0 ? (
                    <div className="relative w-full aspect-square md:aspect-video bg-[#0f172a] rounded-2xl shadow-xl overflow-hidden flex items-center justify-center p-4 md:p-8 gap-4 md:gap-8">
                       {/* Desktop Chat */}
                       <div className="flex-1 bg-white rounded-2xl shadow-lg flex-col h-full max-h-[400px] overflow-hidden hidden md:flex">
                         <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
                                <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
                              </div>
                              <div className="bg-slate-100 rounded-2xl rounded-tl-none p-3 text-sm text-slate-700">
                                I'm interested in learning more about your services. Can you tell me how your online fitness coaching program works?
                                <div className="text-[10px] text-slate-400 mt-1 text-right">May 12, 12:30 pm</div>
                              </div>
                            </div>
                            <div className="flex gap-3 flex-row-reverse">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 overflow-hidden">
                                <img src="https://i.pravatar.cc/150?img=47" alt="Agent" className="w-full h-full object-cover" />
                              </div>
                              <div className="bg-blue-50 rounded-2xl rounded-tr-none p-3 text-sm text-slate-700">
                                Of course! Our program offers an 8-week transformation using personalized workouts and custom nutrition plans. You'll have 1-on-1 coaching and can train from home on your own schedule.
                                <div className="text-[10px] text-slate-400 mt-1 text-right">May 12, 12:31 pm</div>
                              </div>
                            </div>
                         </div>
                         <div className="p-3 border-t border-slate-100 flex items-center gap-2">
                           <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-sm text-slate-400 border border-slate-200">Type a reply...</div>
                           <div className="w-8 h-8 flex items-center justify-center text-slate-400"><Paperclip size={16} /></div>
                           <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center"><Send size={14} /></div>
                         </div>
                       </div>

                       {/* Mobile Chat Widget */}
                       <div className="w-[280px] bg-white rounded-[24px] shadow-2xl flex flex-col h-full max-h-[500px] overflow-hidden relative border border-slate-200">
                          <div className="bg-primary text-white p-4 flex items-center justify-between rounded-t-[24px]">
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 overflow-hidden">
                                  <img src="https://i.pravatar.cc/150?img=47" alt="Agent" className="w-full h-full object-cover" />
                                </div>
                                <span className="font-medium text-sm">Have a question?</span>
                             </div>
                             <ChevronDown size={18} />
                          </div>
                          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
                             <div className="flex gap-2">
                              <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 overflow-hidden">
                                <img src="https://i.pravatar.cc/150?img=47" alt="Agent" className="w-full h-full object-cover" />
                              </div>
                              <div className="bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tl-none p-2.5 text-xs text-slate-700">
                                Hi there! How can I assist you today?
                                <div className="text-[9px] text-slate-400 mt-1 text-right">May 12, 12:30 pm</div>
                              </div>
                            </div>
                            <div className="flex gap-2 flex-row-reverse">
                              <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
                                <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
                              </div>
                              <div className="bg-primary/10 border border-primary/10 rounded-2xl rounded-tr-none p-2.5 text-xs text-slate-700">
                                I'm interested in learning more about your services. Can you tell me how your online fitness coaching program works?
                                <div className="text-[9px] text-slate-400 mt-1 text-right">May 12, 12:32 pm</div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 overflow-hidden">
                                <img src="https://i.pravatar.cc/150?img=47" alt="Agent" className="w-full h-full object-cover" />
                              </div>
                              <div className="bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tl-none p-2.5 text-xs text-slate-700">
                                Of course! Our program offers an 8-week transformation using personalized workouts and custom nutrition plans. You'll have 1-on-1 coaching and can train from home on your own schedule.
                                <div className="text-[9px] text-slate-400 mt-1 text-right">May 12, 12:34 pm</div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-white border-t border-slate-100">
                             <div className="flex items-center gap-2 mb-2">
                               <div className="flex-1 bg-slate-50 rounded-full px-3 py-1.5 text-xs text-slate-400 border border-slate-200">Type a message...</div>
                               <div className="w-6 h-6 flex items-center justify-center text-slate-400"><Paperclip size={14} /></div>
                               <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center"><Send size={12} /></div>
                             </div>
                             <div className="text-[9px] text-center text-slate-400">Powered by <span className="text-primary font-medium">Prospex Pro</span></div>
                          </div>
                       </div>
                    </div>
                    ) : i === 1 ? (
                      <div className="relative w-full aspect-square md:aspect-video rounded-2xl shadow-xl overflow-hidden flex items-center justify-center bg-slate-50">
                        <img 
                          src="https://vibe.filesafe.space/1784315187211289656/attachments/e3fbdbf0-e91d-45b0-a42f-a84dffd4f1a8.jpg" 
                          alt="CRM & Pipeline Management Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : i === 2 ? (
                      <div className="relative w-full aspect-square md:aspect-video rounded-2xl shadow-xl overflow-hidden flex items-center justify-center bg-slate-50">
                        <img 
                          src="https://vibe.filesafe.space/1784315187211289656/attachments/8fe3bc46-60d3-4f65-8eb4-c087bf12078c.jpg" 
                          alt="Automated Calendar Booking Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : i === 3 ? (
                      <div className="relative w-full aspect-square md:aspect-video rounded-2xl shadow-xl overflow-hidden flex items-center justify-center bg-slate-50">
                        <img 
                          src="https://vibe.filesafe.space/1784315187211289656/attachments/984ab95a-8824-4371-b397-e36bc5c022f5.jpg" 
                          alt="SMS & Text Marketing Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : i === 4 ? (
                      <div className="relative w-full aspect-square md:aspect-video rounded-2xl shadow-xl overflow-hidden flex items-center justify-center bg-slate-50">
                        <img 
                          src="https://vibe.filesafe.space/1784315187211289656/attachments/78a937a3-ae24-4220-9e1e-172a00228b2a.jpg" 
                          alt="Email Marketing Automation Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : i === 5 ? (
                      <div className="relative w-full aspect-square md:aspect-video rounded-2xl shadow-xl overflow-hidden flex items-center justify-center bg-slate-50">
                        <img 
                          src="https://vibe.filesafe.space/1784315187211289656/attachments/e1c9004b-55c0-4acb-857f-74c247f2276a.jpg" 
                          alt="Missed Call Text Back Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : i === 6 ? (
                      <div className="relative w-full aspect-square md:aspect-video rounded-2xl shadow-xl overflow-hidden flex items-center justify-center bg-slate-50">
                        <img 
                          src="https://vibe.filesafe.space/1784315187211289656/attachments/cbfec27a-4640-4932-923e-8b495b20162f.jpg" 
                          alt="Payments & Invoicing Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
) : i === 7 ? (
                      <div className="relative w-full aspect-square md:aspect-video rounded-2xl shadow-xl overflow-hidden flex items-center justify-center bg-slate-50">
                        <img 
                          src="https://vibe.filesafe.space/1784315187211289656/attachments/521636a7-0fde-4bb0-927f-45ff4f8180e2.jpg" 
                          alt="Social Media Planner Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-video bg-slate-50 border border-slate-200 rounded-2xl shadow-xl flex items-center justify-center">
                        <span className="text-slate-500">Platform UI Preview</span>
                      </div>
                    )}
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}