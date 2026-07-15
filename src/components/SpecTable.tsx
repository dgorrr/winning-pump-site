import { SpecSection } from "@/lib/types";

interface SpecTableProps {
  sections: SpecSection[];
  standards?: string[];
}

export default function SpecTable({ sections, standards }: SpecTableProps) {
  return (
    <div className="space-y-8">
      {standards && standards.length > 0 && (
        <div className="rounded-md border border-steel-200 bg-steel-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-steel-500">
            Applicable Standards
          </p>
          <p className="mt-1 text-sm font-medium text-steel-800">
            {standards.join(" · ")}
          </p>
        </div>
      )}

      {sections.map((section) => (
        <div key={section.title} className="overflow-hidden rounded-lg border border-steel-200">
          <div className="border-b border-steel-200 bg-steel-100 px-4 py-3 sm:px-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-steel-800">
              {section.title}
            </h3>
            {section.titleZh && (
              <p className="text-xs text-steel-500">{section.titleZh}</p>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-steel-200">
              <thead>
                <tr className="bg-white">
                  <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-steel-500 sm:px-6">
                    Parameter
                  </th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-steel-500 sm:w-24">
                    Unit
                  </th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-steel-500 sm:px-6">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-100 bg-white">
                {section.specs.map((spec) => (
                  <tr key={spec.parameter} className="hover:bg-steel-50/50">
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-steel-700 sm:px-6">
                      {spec.parameter}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-steel-500">
                      {spec.unit ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-sm text-steel-900 sm:px-6">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
