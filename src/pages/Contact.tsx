import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { DemoModal } from "@/components/DemoModal";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 bg-[#0B101B]">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">We're here to help you grow your business with AI.</p>
        </div>
      </section>

      <section className="py-24 bg-white text-slate-900 border-y border-slate-100">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/CmqJd1fjfw9N6Dkv2Isx"
                style={{ width: "100%", height: "790px", border: "none", borderRadius: "3px" }}
                id="inline-CmqJd1fjfw9N6Dkv2Isx"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Contact Us Form"
                data-height="790"
                data-layout-iframe-id="inline-CmqJd1fjfw9N6Dkv2Isx"
                data-form-id="CmqJd1fjfw9N6Dkv2Isx"
                title="Website Contact Us Form"
              />
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Headquarters</h4>
                      <p className="text-slate-600">19179 Blanco Rd Ste 105<br/>San Antonio, TX 78258</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-slate-600">1-830-243-5485</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-slate-600">support@prospexpro.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM EST<br/>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="text-xl font-bold mb-2">Want to see the platform?</h3>
                <p className="text-slate-600 mb-6">Schedule a one-on-one demo with our team.</p>
                <DemoModal>
                  <Button className="w-full">
                    Book Appointment
                  </Button>
                </DemoModal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
