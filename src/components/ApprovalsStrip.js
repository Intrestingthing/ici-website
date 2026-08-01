import { ShieldCheck, Award, Landmark } from "lucide-react";
import { site } from "@/data/site";

export default function ApprovalsStrip() {
  const items = [
    { icon: ShieldCheck, text: site.approvals.geduconnect.title },
    { icon: Award, text: site.approvals.aisect.title },
    { icon: Landmark, text: site.approvals.rkcl.title },
  ];

  return (
    <section className="border-y border-brand-100 bg-brand-50">
      <div className="container-px flex flex-col items-center justify-center gap-x-10 gap-y-3 py-5 sm:flex-row sm:flex-wrap">
        {items.map((item) => (
          <span
            key={item.text}
            className="flex items-center gap-2 text-sm font-semibold text-brand-800"
          >
            <item.icon size={18} className="text-brand-600" />
            {item.text}
          </span>
        ))}
      </div>
    </section>
  );
}
