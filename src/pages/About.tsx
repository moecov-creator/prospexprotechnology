export default function About() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 bg-[#0B101B]">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-muted-foreground">To empower small businesses with the same AI and automation tools used by enterprise companies, leveling the playing field for everyone.</p>
        </div>
      </section>

      <section className="py-24 bg-white text-slate-900 border-y border-slate-100">
        <div className="container max-w-4xl space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Prospex Pro Story</h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>Prospex Pro Technology was founded with a simple observation: small business owners are spending too much time working in their business, rather than on it.</p>
              <p>We saw contractors missing calls while on a job, real estate agents losing leads because they couldn't respond fast enough, and local shops struggling to keep up with marketing across 10 different software platforms.</p>
              <p>We built Prospex Pro to solve this. By combining CRM, communication, marketing, and AI into one seamless platform, we've helped thousands of businesses automate their growth and get their time back.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Why Businesses Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm flex flex-col">
                <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <img src="https://vibe.filesafe.space/1784315187211289656/assets/3bf92c25-3a07-4947-aaa4-31026554ccdd.png" alt="Innovation First" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation First</h3>
                <p className="text-slate-600">We continuously update our platform with the latest AI advancements so you're always ahead of the curve.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm flex flex-col">
                <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <img src="https://vibe.filesafe.space/1784315187211289656/assets/8a9485ac-64c6-46c5-ac7c-e22873f9b9fa.png" alt="Dedicated Support" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                <p className="text-slate-600">Our customer success team is committed to making sure your business actually grows using our tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}