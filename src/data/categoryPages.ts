export type CategoryPageDefinition = {
  slug: string;
  name: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  productIds: string[];
  catalogCategory: string;
};

export const excludedIds = [
  "bb", "bk-g", "bk-iq", "bz", "sz", "sz-pc", "sz-iq",
  "wb", "wb2", "wb-pc", "wb-iq", "wb400",
] as const;

export const relatedSewageIds = ["zw", "lw"] as const;

export const categoryPages: CategoryPageDefinition[] = [
  {
    slug: "horizontal-multistage-pumps",
    name: "Horizontal Multistage Pumps",
    title: "Horizontal Multistage Centrifugal Pumps | Winning Pumps",
    h1: "Horizontal Multistage Stainless Steel Centrifugal Pumps",
    description: "Explore Winning Pumps' DW horizontal multistage centrifugal pump range, featuring stainless steel construction for high-head water supply and circulation duties.",
    intro: "Winning Pumps' DW range brings together horizontal multistage centrifugal pumps for water supply and circulation duties. The series includes the DW, DW(D), DW(S), DW(K), DW-PC, DW(S)-PC and DW-IQ configurations. Product information describes options such as a clamp-type body connection, automatic pressure control and intelligent variable-frequency control; the construction and features vary by model. The range is used in building water supply, water cooling and circulation, washing systems, food and beverage processing, swimming pools, industrial wastewater and agricultural irrigation. Stainless steel construction is part of the DW range, while the particular wetted materials and casing details depend on the selected variant. Review each product page for its configuration and published performance information, then match the model to the required flow, head and operating conditions. If you are comparing variants or planning a system, send the application details through the quotation form so the relevant model information can be reviewed.",
    productIds: ["dw", "dw-d", "dw-s", "dw-k", "dw-pc", "dw-s-pc", "dw-iq"],
    catalogCategory: "Circulating & Inline Pumps",
  },
  {
    slug: "vertical-multistage-pumps",
    name: "Vertical Multistage Pumps",
    title: "Vertical Multistage Pump Manufacturer | Winning Pumps",
    h1: "Vertical Multistage Stainless Steel Centrifugal Pumps",
    description: "Explore DL vertical multistage inline pumps for water boosting, cooling and space-constrained installations, alongside YDL submerged pumps for machine-tool coolant, lubricating fluids and industrial cleaning equipment.",
    intro: "This category brings together the DL vertical multistage pump range and the YDL submerged pump range. DL models use a vertical inline arrangement intended for installations where a compact footprint is useful, including building water supply and boosting, water cooling and circulation, washing systems, food and beverage processing, swimming pools and industrial processes. Construction details differ across DL models: check the individual product information for wetted-part materials and configuration. YDL pumps serve a separate set of duties. The product information describes them for machine-tool coolant, lubricating fluids and industrial cleaning equipment, with a submerged installation arrangement. The DL and YDL series therefore have distinct designs and applications. Use the product cards below to review the available models and their published details. For a selection discussion, share the liquid, installation arrangement and required operating conditions through the quotation form.",
    productIds: ["dlh", "dlr", "dl1-dl5", "dl8-dl20", "dl32-dl90", "ydl"],
    catalogCategory: "Circulating & Inline Pumps",
  },
  {
    slug: "end-suction-pumps",
    name: "End Suction Pumps",
    title: "Stainless Steel End Suction Centrifugal Pumps | Winning Pumps",
    h1: "Stainless Steel End Suction Centrifugal Pumps",
    description: "Stainless steel end suction pumps (GZA and DZA series) with 304 or 316 wetted parts; DZA models comply with DIN 24255 for industrial water transfer and boosting.",
    intro: "Winning Pumps offers GZA and DZA stainless steel end suction centrifugal pump models for water supply and industrial processes. The range includes close-coupled and coaxial arrangements, with product pages describing the specific configuration of each model. GZA product information highlights applications such as building water supply, washing systems, food and beverage processing and industrial process wastewater. DZA models are described with 304 or 316 stainless steel wetted parts and compliance with DIN 24255; this standard reference applies to the DZA models. Material grade and construction should be checked against the individual product details and the pumped liquid. Use the cards below to compare the GZA and DZA options, including the covered coaxial DZA(S)-Cover model. The product pages provide model-level information for reviewing performance and installation requirements. For assistance identifying a suitable configuration, submit your operating conditions and application through the quotation form.",
    productIds: ["gza-s", "gza-s-g", "dza-s", "dza-s-cover"],
    catalogCategory: "End Suction / Ground Pumps",
  },
  {
    slug: "submersible-sewage-pumps",
    name: "Submersible Sewage Pumps",
    title: "Submersible Sewage Pump Manufacturer | Winning Pumps",
    h1: "Submersible Sewage & Drainage Pumps",
    description: "Submersible sewage pumps including cutting models (ASWQ-D), channel designs with up to 100 mm solids passage (WQ-CG), and explosion-proof options (BWQ-G) for wastewater treatment.",
    intro: "Winning Pumps' submersible sewage and drainage selection includes models for municipal and industrial wastewater applications. The listed products include the ASWQ-D cutting pump, BWQ-G explosion-proof sewage pump, and WQ series models with different impeller and channel designs. Product details describe the ASWQ-D cutting device and the BWQ-G configuration, including its stated explosion-proof marking; confirm the selected model and options against the product information and site requirements. The WQ-CG channel design is described with a solids passage of up to 100 mm. Other models have their own construction and operating details, so review each product page before specifying a pump. This category's main grid contains the submersible sewage and drainage models. Separate ZW and LW products appear in the related section below for visitors comparing sewage and drainage equipment; they are not presented as submersible pumps here. For a model review, provide the liquid, solids and installation conditions in a quotation request.",
    productIds: ["aswq-d", "bwq-g", "wq-qg", "wq-g", "wqg", "wq-cg", "wq-c", "wq-bg", "wq-b", "wq"],
    catalogCategory: "Sewage & Drainage Pumps",
  },
  {
    slug: "inline-circulation-pumps",
    name: "Inline Pipeline & Circulation Pumps",
    title: "Inline Pipeline & Circulation Pumps | Winning Pumps",
    h1: "Industrial Inline Pipeline & Circulation Pumps",
    description: "Explore GD, TD and TDW inline pumps for heating, cooling and water circulation, including TDW's back-pull motor design for maintenance. TP vertical inline pipeline pumps serve water supply, drainage and industrial systems.",
    intro: "This selection includes GD, TD and TDW inline pumps for heating, cooling and water circulation, together with TP vertical inline pipeline pumps for water supply, drainage and industrial systems. The GD, TD and TDW series are used in circulation duties described in the product information. TDW models feature a back-pull motor design to support maintenance access. TP is a separate vertical inline pipeline pump range, with applications that include water supply, drainage and industrial systems. Review the product cards for the individual model descriptions and published performance details; installation arrangement and operating requirements should be checked at model level. The products are grouped here to help compare pipeline and circulation options while keeping their different series and applications clear. If you are selecting a pump for an existing line or a new system, include the medium, required duty and installation details in a quotation request for model review.",
    productIds: ["gd", "td", "tdw", "tp"],
    catalogCategory: "Circulating & Inline Pumps",
  },
];

const excludedIdSet = new Set<string>(excludedIds);
const assignedProductIds = [
  ...categoryPages.flatMap((category) => category.productIds),
  ...relatedSewageIds,
];

if (assignedProductIds.some((id) => excludedIdSet.has(id))) {
  throw new Error("An excluded product ID is assigned to a category landing page");
}

export function getCategoryPage(slug: string) {
  return categoryPages.find((category) => category.slug === slug);
}
