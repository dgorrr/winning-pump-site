export type PumpCategory = "submersible" | "centrifugal" | "booster";

export interface ProductSpec {
  parameter: string;
  unit?: string;
  value: string;
}

export interface SpecSection {
  title: string;
  titleZh?: string;
  specs: ProductSpec[];
}

export interface Product {
  id: string;
  slug: string;
  series: string;
  name: string;
  nameZh: string;
  category: PumpCategory;
  shortDescription: string;
  description: string;
  model: string;
  modelRange: string;
  powerRange: string;
  flowRange: string;
  headRange: string;
  efficiency: string;
  standards: string[];
  specSections: SpecSection[];
  features: string[];
  applications: string[];
  exportNotes: string;
}

export interface CategoryInfo {
  id: PumpCategory;
  name: string;
  nameZh: string;
  description: string;
  standards: string[];
}
