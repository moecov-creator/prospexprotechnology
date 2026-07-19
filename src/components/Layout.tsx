import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { DemoModal } from "./DemoModal";
import { SocialProofPopup } from "./SocialProofPopup";

export const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Stand */}
    <path d="M40 85 L60 85 M45 85 L45 75 M55 85 L55 75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Monitor */}
    <path d="M25 35 L25 75 L75 75 L75 55" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Nodes */}
    <path d="M40 60 Q 50 30 75 25" stroke="#22d3ee" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <circle cx="77" cy="24" r="4" fill="none" stroke="#22d3ee" strokeWidth="3"/>
    
    <path d="M40 60 Q 60 50 85 45" stroke="#22d3ee" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <circle cx="87" cy="44" r="4" fill="none" stroke="#22d3ee" strokeWidth="3"/>
    
    <path d="M40 60 Q 45 30 55 15" stroke="#22d3ee" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <circle cx="56" cy="13" r="4" fill="none" stroke="#22d3ee" strokeWidth="3"/>
    
    <path d="M40 60 Q 55 65 70 60" stroke="#22d3ee" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <circle cx="72" cy="59" r="4" fill="none" stroke="#22d3ee" strokeWidth="3"/>
  </svg>
);

const Navigation = [
  { name: "Platform", href: "/platform" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Customer Success", href: "/success" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <LogoIcon className="h-10 w-10 text-white" />
            <div className="flex flex-col items-start justify-center pt-1">
              <span className="text-xl font-bold tracking-tight text-[#22d3ee] leading-none mb-1">PROSPEXPRO</span>
              <span className="text-[0.65rem] font-medium tracking-[0.2em] text-white leading-none">TECHNOLOGY</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {Navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors hover:text-primary ${
                  location.pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
            <DemoModal>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                Book Demo
              </Button>
            </DemoModal>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-border/40 bg-background">
            <div className="container py-4 flex flex-col gap-4">
              {Navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">Contact</Button>
              </Link>
              <DemoModal>
                <Button className="w-full justify-start bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Demo
                </Button>
              </DemoModal>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border/40 bg-background py-16">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <LogoIcon className="h-8 w-8 text-white" />
              <div className="flex flex-col items-start justify-center pt-1">
                <span className="text-lg font-bold tracking-tight text-[#22d3ee] leading-none mb-1">PROSPEXPRO</span>
                <span className="text-[0.55rem] font-medium tracking-[0.2em] text-white leading-none">TECHNOLOGY</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered business growth platform that helps small businesses generate more leads and automate follow-up.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/platform" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/success" className="hover:text-primary transition-colors">Customer Success</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>support@prospexpro.com</li>
              <li>1-830-243-5485</li>
              <li>Mon-Fri, 9am-5pm EST</li>
            </ul>
          </div>
        </div>
        <div className="container mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Prospex Pro Technology. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://s3.privyr.com/privacy/privacy-policy.html?d=eyJlbWFpbCI6InN1cHBvcnRAcHJvc3BleHByby5jb20iLCJjb21wYW55IjoiUHJvc3BleCBQcm8gVGVjaG5vbG9neSwgTExDIiwiZ2VuX2F0IjoiMjAyNi0wNy0xOFQxNDo0NjoxOS41NjRaIn0=" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Privacy Policy</a>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div className="container mt-8 text-center text-xs text-muted-foreground/60 max-w-5xl mx-auto leading-relaxed">
          <p>
            All third-party logos, trademarks, and brand names displayed on this site, including but not limited to OpenAI, Google, Google Gemini, and Anthropic Claude, are the property of their respective owners. They are shown solely to identify the technologies that integrate with Prospex Pro Technology and do not imply endorsement, sponsorship, partnership, or affiliation with Prospex Pro Technology or Webinarforge AI.
          </p>
        </div>
      </footer>
      <SocialProofPopup />
    </div>
  );
};
