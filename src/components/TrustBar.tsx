import { certifications } from "@/data/company";

export default function TrustBar() {
  return (
    <section className="border-y border-steel-200 bg-white py-6">
      <div className="container-main">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-steel-500">
            Certified Manufacturing · Export Compliant
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded border border-steel-200 bg-steel-50 text-[10px] font-bold text-brand-700">
                  {cert.name.split(" ")[0]}
                </span>
                <div className="hidden sm:block">
                  <p className="text-xs font-semibold text-steel-800">{cert.name}</p>
                  <p className="text-[10px] text-steel-500">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
