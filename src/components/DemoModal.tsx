import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogoIcon } from "./Layout";

export function DemoModal({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.pathname !== "/demo") {
      navigate("/demo");
    } else {
      // If already on demo page, maybe go to a success page or step 2
      navigate("/success");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white text-slate-900 border-slate-200 [&>button]:text-slate-500 hover:[&>button]:text-slate-900">
        <div className="p-8 pt-10 flex flex-col items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <LogoIcon className="h-10 w-10 text-blue-600" />
            <div className="flex flex-col items-start justify-center pt-1">
              <span className="text-2xl font-medium tracking-tight text-slate-900 leading-none mb-1">Prospex Pro Technology</span>
            </div>
          </div>
          
          <div className="text-center mb-6 w-full">
            <DialogTitle className="text-2xl font-medium text-slate-900 mb-4">Try Prospex Pro Today</DialogTitle>
            <p className="text-slate-600 text-[15px] pb-4 border-b border-slate-100">
              Create Your Account: Step 1 of 2
            </p>
          </div>
          
          <form className="w-full space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1.5 text-left">
              <Label htmlFor="businessName" className="text-slate-700 font-normal">Business Name *</Label>
              <Input id="businessName" required className="bg-white border-slate-300 text-slate-900 h-11" />
            </div>
            
            <div className="space-y-1.5 text-left">
              <Label htmlFor="fullName" className="text-slate-700 font-normal">Full Name *</Label>
              <Input id="fullName" required className="bg-white border-slate-300 text-slate-900 h-11" />
            </div>
            
            <div className="space-y-1.5 text-left">
              <Label htmlFor="email" className="text-slate-700 font-normal">Email *</Label>
              <Input id="email" type="email" required className="bg-white border-slate-300 text-slate-900 h-11" />
            </div>
            
            <div className="space-y-1.5 text-left">
              <Label htmlFor="phone" className="text-slate-700 font-normal">Phone *</Label>
              <Input id="phone" type="tel" required className="bg-white border-slate-300 text-slate-900 h-11" />
            </div>
            
            <div className="text-center text-[11px] text-slate-500 pt-2">
              By submitting you agree with our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
            </div>
            
            <Button type="submit" className="w-full bg-[#1e74f0] hover:bg-blue-600 text-white font-medium py-6 text-lg mt-2 shadow-[0_4px_14px_0_rgba(0,118,255,0.39)]">
              Continue
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
