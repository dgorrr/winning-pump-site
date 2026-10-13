// src/data/products.ts

export interface Product {
  id: string;
  category?: string;        // ← 改成可选
  series: string;
  name: string;
  model: string;
  description: string;
  flow: string;
  head: string;
  power: string;
  material: string;
  applications: string[];
  image?: string;
}

export const products: Product[] = [
  // ==================== 新增的 30 个产品 ====================

{
  id: "aswq-d",
  category: "Sewage & Drainage Pumps",   // ← 已补上
  name: "ASWQ(D) Cutting Submersible Sewage Pump",
  model: "ASWQ-D",
  series: "ASWQ",
  description: "This submersible sewage pump uses a cutting device and semi-open impeller to cut and discharge solids such as plastic bags and cloth strips, helping reduce clogging while supporting fast drainage and energy-efficient operation. Its heat-treated 3Cr13 stainless steel impeller is designed for wear and rust resistance, durability, longer service life, and efficient pumping in wastewater applications where fibrous debris may be present.",
  flow: "10 - 300 m³/h",
  head: "15 - 120 m",
  power: "1 - 20 kW",
  material: "Cast Iron / 3Cr13 Stainless Steel (Impeller)",
  applications: [
    "Municipal Wastewater Treatment",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/aswq-d.webp"
},

 // ==================== BB 系列 ====================
{
  id: "bb",
  category: "Boosting & Fire Pumps",
  name: "BB Closed Impeller Stainless Steel Centrifugal Pump",
  model: "BB",
  series: "BB",
  description: "With a robust, compact single-stage design, this centrifugal pump is easy to install and maintain. Its 304 stainless steel wetted parts make it suitable for hygienic applications and mildly corrosive liquids; confirm material compatibility with the pumped medium when selecting a model.",
  flow: "1.2-45 m³/h",
  head: "3-37 m",
  power: "0.25-7.5 kW",
  material: "304 Stainless Steel",
  applications: [
  "Food & Beverage Processing",
  "Washing & Cleaning Systems",
  "Water Cooling & Circulation",
  "Industrial Process Wastewater",
  "Fire Fighting System"
],
  image: "/images/products/bb.webp"
},

// ==================== BK-G 系列 ====================
{
  id: "bk-g",
  category: "Boosting & Fire Pumps",
  name: "BK-G Clamp Semi-Open Impeller Centrifugal Pump",
  model: "BK-G",
  series: "BK",
  description: "This single-stage centrifugal pump features a semi-open impeller that can handle small solid particles up to 18 mm. With 304 stainless steel wetted parts, it is suited to applications that require this particle-handling capability and stainless steel construction; check the liquid's solids content when specifying the pump.",
  flow: "1.2-85 m³/h",
  head: "5-28 m",
  power: "0.37-7.5 kW",
  material: "304/316L Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Washing & Cleaning Systems",
  "Industrial Process Wastewater",
  "Fire Fighting System"
],
  image: "/images/products/bk-g.webp"
},

// ==================== BK-IQ 系列 ====================
{
  id: "bk-iq",
  category: "Boosting & Fire Pumps",
  name: "BK-IQ Intelligent Semi-Open Impeller Stainless Steel Centrifugal Pump",
  model: "BK-IQ",
  series: "BK",
  description: "This intelligent single-stage centrifugal pump combines a semi-open impeller with 304 stainless steel wetted parts. Its pressure-control functions support stable water pressure, while overload and low-water-level protection provide additional safeguards during operation.",
  flow: "1.2-85 m³/h",
  head: "5-28 m",
  power: "0.37-7.5 kW",
  material: "304/316L Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Washing & Cleaning Systems",
  "Industrial Process Wastewater",
  "Fire Fighting System"
],
  image: "/images/products/bk-iq.webp"
},

// ==================== BWQ-G 系列 ====================
{
  id: "bwq-g",
  category: "Sewage & Drainage Pumps",
  name: "BWQ-G Stainless Steel Explosion-Proof Sewage Submersible Pump",
  model: "BWQ-G",
  series: "BWQ",
  description: "Designed for demanding sewage applications, this explosion-proof stainless steel submersible pump carries the Ex dI BT4 Gb marking and can be configured with a cutting or mixing device. Its stainless steel construction offers corrosion resistance for harsh environments; confirm the required device option and site requirements when specifying the pump.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Stainless Steel",
  applications: [
    "Municipal Wastewater Treatment",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/bwq-g.webp"
},

// ==================== BZ 系列 ====================
{
  id: "bz",
  category: "Boosting & Fire Pumps",
  name: "BZ Self-Priming Clean Water Pump",
  model: "BZ",
  series: "BZ",
  description: "This horizontal self-priming centrifugal pump transfers clean water with a simple, reliable, and efficient design and operates without a check valve. When choosing a model, consider the installation's suction conditions and the required flow and head.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Cast Iron / Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Agricultural & Irrigation",
    "Fire Fighting System",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/bz.webp"
},

// DW 系列
{
  id: "dw",
  category: "Circulating & Inline Pumps",
  name: "DW Horizontal Multistage Stainless Steel Centrifugal Pump",
  model: "DW",
  series: "DW",
  description: "This high-efficiency horizontal multistage centrifugal pump combines a compact design with strong performance in high-head applications. Its wetted parts are made of 304 or 316 stainless steel, and it is suitable for building services and general industry, including water supply, boiler feeding, pure-water treatment, food and pharmaceutical processing, and washing systems. Select the model to match the required flow rate, head, and operating limits.",
  flow: "0.4-24 m³/h",
  head: "10-61 m",
  power: "0.37-3.2 kW",
  material: "304 Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Water Cooling & Circulation",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Swimming Pool & Water Features",
  "Industrial Process Wastewater",
  "Agricultural & Irrigation"            // ← 新增
],
  image: "/images/products/dw.webp"
},

{
  id: "dw-d",
  category: "Circulating & Inline Pumps",
  name: "DW(D) Horizontal Multistage Stainless Steel Centrifugal Pump",
  model: "DW(D)",
  series: "DW",
  description: "This new-generation horizontal multistage pump has stainless steel wetted parts and is designed for demanding building-service and industrial applications, especially those requiring higher head. The DW(D) variant features the revised pump-casing design identified for this model family, combining efficiency with durability. Choose the model according to its flow-head performance and the required operating point.",
  flow: "0.4-24 m³/h",
  head: "10-61 m",
  power: "0.37-3.2 kW",
  material: "304 Stainless Steel",
   applications: [
  "Building Water Supply & Boosting",
  "Water Cooling & Circulation",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Swimming Pool & Water Features",
  "Industrial Process Wastewater",
  "Agricultural & Irrigation"            // ← 新增
],
  image: "/images/products/dwd.webp"
},

{
  id: "dw-s",
  category: "Circulating & Inline Pumps",
  name: "DW(S) Horizontal Multistage Stainless Steel Centrifugal Pump",
  model: "DW(S)",
  series: "DW",
  description: "This compact horizontal multistage pump features a stainless steel impeller and diffuser and is suitable for mildly corrosive liquids. Its low-noise operation and small installation footprint suit space-conscious installations. The DW(S) design omits the outer pump casing, distinguishing its casing configuration from other DW variants; select a model based on the required flow and head.",
  flow: "0.4-24 m³/h",
  head: "10-61 m",
  power: "0.37-3.2 kW",
  material: "304 Stainless Steel",
   applications: [
  "Building Water Supply & Boosting",
  "Water Cooling & Circulation",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Swimming Pool & Water Features",
  "Industrial Process Wastewater",
  "Agricultural & Irrigation"            // ← 新增
],
  image: "/images/products/dws.webp"
},

{
  id: "dw-k",
  category: "Circulating & Inline Pumps",
  name: "DW(K) Horizontal Multistage Stainless Steel Centrifugal Pump",
  model: "DW(K)",
  series: "DW",
  description: "This horizontal multistage pump uses a clamp-type pump-body connection for easier disassembly and cleaning, making it suitable for installations where regular maintenance access is important. Its wetted parts are stainless steel. Specify the required flow, head, and connection arrangement to identify the appropriate model.",
  flow: "0.4-24 m³/h",
  head: "10-61 m",
  power: "0.37-3.2 kW",
  material: "304 Stainless Steel",
   applications: [
  "Building Water Supply & Boosting",
  "Water Cooling & Circulation",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Swimming Pool & Water Features",
  "Industrial Process Wastewater",
  "Agricultural & Irrigation"            // ← 新增
],
  image: "/images/products/dwk.webp"
},

{
  id: "dw-pc",
  category: "Circulating & Inline Pumps",
  name: "DW-PC Automatic Horizontal Multistage Stainless Steel Centrifugal Pump",
  model: "DW-PC",
  series: "DW",
  description: "This automatic horizontal multistage pump has a built-in electronic pressure controller to support stable water pressure and automatic start/stop operation, with overload protection. Its compact structure and stainless steel wetted parts suit pressure-controlled water-supply applications. Select the DW-PC model according to the system's required pressure, flow rate, and head.",
  flow: "0.4-24 m³/h",
  head: "10-61 m",
  power: "0.37-3.2 kW",
  material: "304 Stainless Steel",
   applications: [
  "Building Water Supply & Boosting",
  "Water Cooling & Circulation",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Swimming Pool & Water Features",
  "Industrial Process Wastewater",
  "Agricultural & Irrigation"            // ← 新增
],
  image: "/images/products/dw-pc.webp"
},

{
  id: "dw-s-pc",
  category: "Circulating & Inline Pumps",
  name: "DW(S)-PC Automatic Horizontal Multistage Stainless Steel Centrifugal Pump",
  model: "DW(S)-PC",
  series: "DW",
  description: "This automatic multistage pump combines a pressure controller with a compact, low-noise design and is intended for applications involving mildly corrosive liquids. Automatic operation supports convenient water supply and energy-conscious use. The DW(S)-PC version has a different exterior and component configuration from DW-PC; confirm the exact variant and material requirements when specifying the pump.",
  flow: "0.4-24 m³/h",
  head: "10-61 m",
  power: "0.37-3.2 kW",
  material: "304 Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Water Cooling & Circulation",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Swimming Pool & Water Features",
  "Industrial Process Wastewater",
  "Agricultural & Irrigation"            // ← 新增
],
  image: "/images/products/dws-pc.webp"
},

{
  id: "dw-iq",
  category: "Circulating & Inline Pumps",
  name: "DW-IQ Intelligent Horizontal Multistage Stainless Steel Centrifugal Pump",
  model: "DW-IQ",
  series: "DW",
  description: "This intelligent variable-frequency constant-pressure system uses stainless steel construction to support stable water supply. Overload protection, automatic restart after power failure, and low-water-level protection are among its control features. Check the selected model code, required flow and head, and installation dimensions before specifying the system.",
  flow: "0.4-24 m³/h",
  head: "10-61 m",
  power: "0.37-3.2 kW",
  material: "304 Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Water Cooling & Circulation",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Swimming Pool & Water Features",
  "Industrial Process Wastewater",
  "Agricultural & Irrigation"            // ← 新增
],
  image: "/images/products/dw-iq.webp"
},

// ==================== DL 系列 ====================
{
  id: "dlh",
  category: "Circulating & Inline Pumps",
  name: "DL（H） Vertical Multistage Stainless Steel Centrifugal Pump",
  model: "DL（H）",
  series: "DL",
  description: "This vertical inline multistage pump combines a small footprint with high efficiency and durable construction. All wetted parts are made of high-quality stainless steel, making it suitable for installations with limited space. Select the model according to the required flow and head, and confirm the wetted-material grade for the application.",
  flow: "0.4-110 m³/h",
  head: "6-310 m",
  power: "0.37-45 kW",
  material: "304 / 316L Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Water Cooling & Circulation",
    "Washing & Cleaning Systems",
    "Food & Beverage Processing",
    "Swimming Pool & Water Features",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/dlh.webp"
},

{
  id: "dlr",
  category: "Circulating & Inline Pumps",
  name: "DLR Vertical Multistage Stainless Steel Centrifugal Pump",
  model: "DLR",
  series: "DL",
  description: "This vertical inline multistage pump offers a space-saving installation and high-efficiency operation. The bottom cover and pump cover are cast iron, while the other wetted parts are high-quality stainless steel. This construction distinction should be considered when checking liquid compatibility and selecting a model for a space-constrained installation.",
  flow: "0.4-110 m³/h",
  head: "6-310 m",
  power: "0.37-45 kW",
  material: "304 / 316L Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Water Cooling & Circulation",
    "Washing & Cleaning Systems",
    "Food & Beverage Processing",
    "Swimming Pool & Water Features",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/dlr.webp"
},

{
  id: "dl1-dl5",
  category: "Circulating & Inline Pumps",
  name: "DL1-DL5 Vertical Multistage Stainless Steel Centrifugal Pump",
  model: "DL1-DL5",
  series: "DL",
  description: "The DL1-DL5 range comprises vertical inline multistage pumps designed for installations with limited space. All wetted parts are high-quality stainless steel, combining a compact footprint with efficient, durable operation. Choose the specific model according to the required flow and head and verify material suitability for the pumped liquid.",
  flow: "0.4-110 m³/h",
  head: "6-310 m",
  power: "0.37-45 kW",
  material: "304 / 316L Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Water Cooling & Circulation",
    "Washing & Cleaning Systems",
    "Food & Beverage Processing",
    "Swimming Pool & Water Features",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/dl1-dl5.webp"
},

{
  id: "dl8-dl20",
  category: "Circulating & Inline Pumps",
  name: "DL8-DL20 Vertical Multistage Stainless Steel Centrifugal Pump",
  model: "DL8-DL20",
  series: "DL",
  description: "This range of vertical multistage inline pumps is designed for building services and industrial applications. Its compact construction, high performance, and corrosion-resistant materials support a broad range of installation needs. Select the model by matching its performance data to the required flow rate and head.",
  flow: "0.4-110 m³/h",
  head: "6-310 m",
  power: "0.37-45 kW",
  material: "304 / 316L Stainless Steel",
   applications: [
    "Building Water Supply & Boosting",
    "Water Cooling & Circulation",
    "Washing & Cleaning Systems",
    "Food & Beverage Processing",
    "Swimming Pool & Water Features",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/dl8-dl20.webp"
},

{
  id: "dl32-dl90",
  category: "Circulating & Inline Pumps",
  name: "DL32-DL90 Vertical Multistage Stainless Steel Centrifugal Pump",
  model: "DL32-DL90",
  series: "DL",
  description: "The DL32-DL90 range is designed for applications that require relatively large flow and high head from a vertical multistage pump. Stainless steel wetted parts provide durable construction, while model selection should be based on the required duty point and the performance data for the specific size.",
  flow: "0.4-110 m³/h",
  head: "6-310 m",
  power: "0.37-45 kW",
  material: "304 Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Water Cooling & Circulation",
    "Washing & Cleaning Systems",
    "Food & Beverage Processing",
    "Swimming Pool & Water Features",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/dl32-dl90.webp"
},


// ==================== DZA / GZA 系列 ====================
{
  id: "dza-s",
  category: "End Suction / Ground Pumps",
  name: "DZA(S) Close-Coupled Stainless Steel End Suction Pump",
  model: "DZA(S)",
  series: "DZA",
  description: "This end-suction centrifugal pump features 304 or 316 stainless steel wetted parts and complies with the DIN 24255 standard. Its efficient design and corrosion-resistant construction suit building services and industrial applications. Confirm the required flow, head, and material grade when selecting a model for the installation.",
  flow: "6-220 m³/h",
  head: "4.5-70 m",
  power: "1.1-37 kW",
  material: "304 / 316L Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Industrial Process Wastewater",
  "Fire Fighting System"
],
  image: "/images/products/dza-s.webp"
},

{
  id: "dza-s-cover",
  category: "End Suction / Ground Pumps",
  name: "DZA(S) Covered Coaxial Stainless Steel End Suction Pump",
  model: "DZA(S)-Cover",
  series: "DZA",
  description: "This compact covered-coaxial end-suction centrifugal pump features 304 or 316 stainless steel wetted parts and complies with DIN 24255. Its design combines installation-conscious dimensions with efficient operation and corrosion resistance for building services and industry. Select the model and material configuration to match the required duty and pumped liquid.",
  flow: "6-220 m³/h",
  head: "4.5-70 m",
  power: "1.1-37 kW",
  material: "304 / 316L Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Washing & Cleaning Systems",
    "Fire Fighting System",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/dza-s-cover.webp"
},
{
  id: "gza-s",
  category: "End Suction / Ground Pumps",
  name: "GZA(S) Close-Coupled Stainless Steel End Suction Pump",
  model: "GZA(S)",
  series: "GZA",
  description: "This high-efficiency end-suction pump uses a directly coupled motor and stainless steel construction for water supply and industrial processes. The direct-coupled arrangement supports straightforward maintenance. Select a model that meets the required flow and head, and confirm the material grade for the pumped medium.",
  flow: "6-220 m³/h",
  head: "4.5-70 m",
  power: "1.1-37 kW",
  material: "304 / 316L Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Industrial Process Wastewater",
  "Fire Fighting System"
],
  image: "/images/products/gza-s.webp"
},

{
  id: "gza-s-g",
  category: "End Suction / Ground Pumps",
  name: "GZA(S)-G Coaxial Stainless Steel End Suction Pump",
  model: "GZA(S)-G",
  series: "GZA",
  description: "The GZA(S)-G is a compact coaxial end-suction centrifugal pump with 304 or 316 stainless steel wetted parts. Its efficient design suits building water supply, industrial circulation, and fire-protection systems. Confirm the required flow, head, and stainless steel grade when specifying the pump.",
  flow: "6-220 m³/h",
  head: "4.5-70 m",
  power: "1.1-37 kW",
  material: "304 / 316L Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Washing & Cleaning Systems",
    "Fire Fighting System",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/gza-s-g.webp"
},

// ==================== GD 系列 ====================
{
  id: "gd",
  category: "Circulating & Inline Pumps",
  name: "GD Inline Stainless Steel Centrifugal Pump",
  model: "GD",
  series: "GD",
  description: "This inline pipeline centrifugal pump has 304 stainless steel wetted parts and a compact design for straightforward installation. Its efficient operation suits heating, cooling, and water-circulation systems. Choose the model according to the system's flow and head requirements and the properties of the circulated liquid.",
  flow: "4.2-70 m³/h",
  head: "10-54 m",
  power: "0.37-7.5 kW",
  material: "304 Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Water Cooling & Circulation"
  ],
  image: "/images/products/gd.webp"
},

// ==================== LW 系列 ====================
{
  id: "lw",
  category: "Sewage & Drainage Pumps",
  name: "LW Vertical Non-Clogging Sewage Pump",
  model: "LW",
  series: "LW",
  description: "This vertical non-clogging sewage pump is designed for wastewater containing solids and long fibers. Its anti-winding design helps manage fibrous material while supporting efficient pumping in municipal and industrial sewage applications. Match the pump to the wastewater's solids content and the required flow and head.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Cast Iron / Stainless Steel",
  applications: [
    "Municipal Wastewater Treatment",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/lw.webp"
},


// ==================== SZ 系列 ====================
{
  id: "sz",
  category: "Boosting & Fire Pumps",
  name: "SZ Jet Self-Priming Stainless Steel Centrifugal Pump",
  model: "SZ",
  series: "SZ",
  description: "This jet self-priming centrifugal pump has a stainless steel pump body and is designed to draw water from deeper wells. Its self-priming function makes it suitable for domestic and light-industrial water supply. Check the installation's suction conditions and match the model to the required flow and head.",
  flow: "0.6-6 m³/h",
  head: "10-45 m",
  power: "0.37-0.9 kW",
  material: "304 Stainless Steel",
   applications: [
  "Building Water Supply & Boosting",
  "Agricultural & Irrigation",
  "Washing & Cleaning Systems",
  "Swimming Pool & Water Features",
  "Deep Well & Solar Pumping",
  "Fire Fighting System"
],
  image: "/images/products/sz.webp"
},

{
  id: "sz-pc",
  category: "Boosting & Fire Pumps",
  name: "SZ-PC Automatic Jet Self-Priming Stainless Steel Centrifugal Pump",
  model: "SZ-PC",
  series: "SZ",
  description: "This automatic jet self-priming pump uses a built-in electronic pressure controller for automatic start/stop and stable pressure, supporting convenient water supply and energy-conscious operation. It is suited to domestic and light-industrial boosting applications. Select the model according to the required flow, head, and system pressure.",
  flow: "0.6-6 m³/h",
  head: "10-45 m",
  power: "0.37-0.9 kW",
  material: "304 Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Agricultural & Irrigation",
  "Washing & Cleaning Systems",
  "Swimming Pool & Water Features",
  "Deep Well & Solar Pumping",
  "Fire Fighting System"
],
  image: "/images/products/sz-pc.webp"
},

{
  id: "sz-iq",
  category: "Boosting & Fire Pumps",
  name: "SZ-IQ Intelligent Jet Self-Priming Stainless Steel Centrifugal Pump",
  model: "SZ-IQ",
  series: "SZ",
  description: "This intelligent variable-frequency constant-pressure jet pump combines stainless steel wetted parts with stable-pressure control. Overload protection, automatic restart after power failure, and low-water-level protection are included among its features. Choose the model to suit the required flow and head and confirm its compatibility with the installation.",
  flow: "0.6-6 m³/h",
  head: "10-45 m",
  power: "0.37-0.9 kW",
  material: "304 Stainless Steel",
 applications: [
  "Building Water Supply & Boosting",
  "Agricultural & Irrigation",
  "Washing & Cleaning Systems",
  "Swimming Pool & Water Features",
  "Deep Well & Solar Pumping",
  "Fire Fighting System"
],
  image: "/images/products/sz-iq.webp"
},


// ==================== TD / TDW 系列 ====================
{
  id: "td",
  category: "Circulating & Inline Pumps",
  name: "TD Detachable Pipeline Circulation Pump",
  model: "TD",
  series: "TD",
  description: "This detachable inline circulation pump offers high efficiency and low-noise operation, with a design intended to simplify maintenance without disrupting the pipeline system. It is suitable for hot- and cold-water circulation. Check installation dimensions and select the model to meet the system's flow and head requirements.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Cast Iron / Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Water Cooling & Circulation"
  ],
  image: "/images/products/td.webp"
},

{
  id: "tdw",
  category: "Circulating & Inline Pumps",
  name: "TDW Detachable Pipeline Circulation Pump",
  model: "TDW",
  series: "TDW",
  description: "This detachable inline circulation pump allows the motor to be pulled backward for easier maintenance. It combines high efficiency, low noise, and a wide high-efficiency operating range, making it suitable for HVAC and hot-water systems. Select a model to match the required circulation duty and installation arrangement.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Cast Iron / Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Water Cooling & Circulation",
    "Washing & Cleaning Systems"
  ],
  image: "/images/products/tdw.webp"
},

// ==================== TP 系列 ====================
{
  id: "tp",
  category: "Circulating & Inline Pumps",
  name: "TP Vertical Inline Pipeline Pump",
  model: "TP",
  series: "TP",
  description: "This compact, high-efficiency vertical inline pipeline pump is suitable for clean water and liquids with similar physical and chemical properties. Applications include water supply, drainage, fire protection, and industrial systems. Confirm liquid compatibility and select the model to meet the required flow and head.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Cast Iron / Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Fire Fighting System",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/tp.webp"
},



// ==================== WB 系列 ====================
{
  id: "wb",
  category: "Boosting & Fire Pumps",
  name: "WB Stainless Steel Centrifugal Pump",
  model: "WB",
  series: "WB",
  description: "This pipeline pump has 304 or 316 stainless steel wetted parts and a compact, efficient design for building services and industrial applications. Choose the appropriate model and material grade according to the required flow, head, and properties of the pumped liquid.",
  flow: "1.2-35 m³/h",
  head: "7-65 m",
  power: "0.25-3.0 kW",
  material: "304 / 316L Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Swimming Pool & Water Features",
  "Fire Fighting System",
  "Agricultural & Irrigation",           // ← 新增
  "Water Cooling & Circulation"          // ← 新增
],
  image: "/images/products/wb.webp"
},

{
  id: "wb2",
  category: "Boosting & Fire Pumps",
  name: "WB2 Stainless Steel Centrifugal Pump",
  model: "WB2",
  series: "WB",
  description: "This stainless steel pipeline pump is suited to water supply, pressure boosting, cooling, and washing systems in buildings and light industry. Its application should be matched to the installation's required flow and head, with material compatibility checked for the pumped liquid.",
  flow: "1.2-35 m³/h",
  head: "7-65 m",
  power: "0.25-3.0 kW",
  material: "304 Stainless Steel",
  applications: [
    "Building Water Supply & Boosting",
    "Washing & Cleaning Systems",
    "Food & Beverage Processing",
    "Swimming Pool & Water Features"
  ],
  image: "/images/products/wb2.webp"
},

{
  id: "wb-pc",
  category: "Boosting & Fire Pumps",
  name: "WB-PC Automatic Stainless Steel Centrifugal Pump",
  model: "WB-PC",
  series: "WB",
  description: "This automatic stainless steel centrifugal pump uses a built-in electronic pressure controller to provide automatic start/stop operation and support stable water pressure. Its design also emphasizes energy-conscious operation and ease of maintenance, making it suitable for constant-pressure water supply. Select the model according to system pressure, flow, and head requirements.",
  flow: "1.2-35 m³/h",
  head: "7-65 m",
  power: "0.25-3.0 kW",
  material: "304 / 316 Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Swimming Pool & Water Features",
  "Fire Fighting System",
  "Agricultural & Irrigation",           // ← 新增
  "Water Cooling & Circulation"          // ← 新增
],
  image: "/images/products/wb-pc.webp"
},

{
  id: "wb-iq",
  category: "Boosting & Fire Pumps",
  name: "WB-IQ Intelligent Stainless Steel Centrifugal Pump",
  model: "WB-IQ",
  series: "WB",
  description: "This intelligent variable-frequency constant-pressure pump uses stainless steel construction to support stable water supply. Its features include overload protection, automatic restart after power failure, and low-water-level protection. Match the model to the required flow and head and confirm material compatibility before specifying the pump.",
  flow: "1.2-35 m³/h",
  head: "7-65 m",
  power: "0.25-3.0 kW",
  material: "304 / 316 Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Swimming Pool & Water Features",
  "Fire Fighting System",
  "Agricultural & Irrigation",           // ← 新增
  "Water Cooling & Circulation"          // ← 新增
],
  image: "/images/products/wb-iq.webp"
},

{
  id: "wb400",
  category: "Boosting & Fire Pumps",
  name: "WB400 Stainless Steel Centrifugal Pump",
  model: "WB400",
  series: "WB",
  description: "This stainless steel centrifugal pump is suitable for water supply and pressure boosting as well as high-purity water, pharmaceutical, food, and fine-chemical applications. For process uses, confirm the wetted-material requirements and choose a model that meets the system's required flow and head.",
  flow: "1.2-35 m³/h",
  head: "7-65 m",
  power: "0.25-3.0 kW",
  material: "304 Stainless Steel",
  applications: [
  "Building Water Supply & Boosting",
  "Washing & Cleaning Systems",
  "Food & Beverage Processing",
  "Swimming Pool & Water Features",
  "Fire Fighting System",
  "Agricultural & Irrigation",           // ← 新增
  "Water Cooling & Circulation"          // ← 新增
],
  image: "/images/products/wb400.webp"
},

// ==================== WQ 系列（污水切割/潜污泵） ====================
{
  id: "wq-qg",
  category: "Sewage & Drainage Pumps",
  name: "WQ-QG Cutting Sewage Submersible Pump",
  model: "WQ-QG",
  series: "WQ",
  description: "This submersible sewage pump uses a cutting device and semi-open impeller to cut plastics, cloth strips, and fibrous materials, supporting rapid drainage and anti-clogging performance in wastewater containing solids. Confirm the wastewater's solids and fiber content and select the model for the required flow and head.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Cast Iron / 3Cr13 Stainless Steel (Impeller)",
   applications: [
  "Municipal Wastewater Treatment",
  "Industrial Process Wastewater",
  "Deep Well & Solar Pumping"
],
  image: "/images/products/wq-qg.webp"
},

{
  id: "wq-g",
  category: "Sewage & Drainage Pumps",
  name: "WQ-G Stainless Steel Sewage Submersible Pump",
  model: "WQ-G",
  series: "WQ",
  description: "This stainless steel submersible sewage pump can be supplied with an optional cutting or mixing device. Its corrosion-resistant, durable construction is intended for sewage containing solids and long fibers, including corrosive environments. Choose the device configuration and material specification to suit the wastewater characteristics.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Stainless Steel",
   applications: [
  "Municipal Wastewater Treatment",
  "Industrial Process Wastewater",
  "Deep Well & Solar Pumping"
],
  image: "/images/products/wq-g.webp"
},

{
  id: "wqg",
  category: "Sewage & Drainage Pumps",
  name: "WQG High Head Sewage Pump",
  model: "WQG",
  series: "WQG",
  description: "This high-head sewage pump is designed for liquids containing short fibers, paper scraps, and sediment. It can be used in industrial, agricultural, construction, and municipal applications where these solids may be present. Match the model to the required head and assess the type and content of solids in the wastewater.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Cast Iron",
  applications: [
  "Municipal Wastewater Treatment",
  "Industrial Process Wastewater",
  "Deep Well & Solar Pumping"
],
  image: "/images/products/wqg.webp"
},

{
  id: "wq-cg",
  category: "Sewage & Drainage Pumps",
  name: "WQ-CG Stainless Steel Sewage Submersible Pump (C Type)",
  model: "WQ-CG",
  series: "WQ",
  description: "This stainless steel submersible sewage pump uses a channel impeller to pass large solids up to 100 mm. Its water-cooled motor permits long-term operation when the motor is partially exposed, and a mixing device is available as an option. Confirm the solids-passage requirement and whether the optional mixing device is needed for the application.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Stainless Steel",
  applications: [
  "Municipal Wastewater Treatment",
  "Industrial Process Wastewater",
  "Deep Well & Solar Pumping"
],
  image: "/images/products/wq-cg.webp"
},

{
  id: "wq-c",
  category: "Sewage & Drainage Pumps",
  name: "WQ-C Sewage Submersible Pump (C Type)",
  model: "WQ-C",
  series: "WQ",
  description: "This channel-impeller submersible sewage pump is designed for non-clogging performance and can pass solids up to 100 mm. It is suitable for municipal and industrial wastewater containing solids and fibers. Select a model based on the wastewater characteristics, required solids passage, flow, and head.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Cast Iron",
   applications: [
  "Municipal Wastewater Treatment",
  "Industrial Process Wastewater",
  "Deep Well & Solar Pumping"
],
  image: "/images/products/wq-c.webp"
},

{
  id: "wq-bg",
  category: "Sewage & Drainage Pumps",
  name: "WQ-BG Stainless Steel Sewage Submersible Pump (B Type, Water Cooled)",
  model: "WQ-BG",
  series: "WQ",
  description: "This water-cooled stainless steel submersible sewage pump uses a channel impeller for efficient, non-clogging operation. Its motor can run for extended periods when partially exposed above the water, which is useful for installations where the water level may fall below the motor. Confirm the operating conditions and required flow and head when selecting a model.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Stainless Steel",
   applications: [
  "Municipal Wastewater Treatment",
  "Industrial Process Wastewater",
  "Deep Well & Solar Pumping"
],
  image: "/images/products/wq-bg.webp"
},

{
  id: "wq-b",
  category: "Sewage & Drainage Pumps",
  name: "WQ-B Sewage Submersible Pump (B Type)",
  model: "WQ-B",
  series: "WQ",
  description: "This channel-impeller submersible sewage pump is designed for efficient, non-clogging operation and can pass solids up to 100 mm. It is intended for municipal and industrial wastewater applications. Match the selected model to the wastewater's solids content and the required flow and head.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Cast Iron",
   applications: [
  "Municipal Wastewater Treatment",
  "Industrial Process Wastewater",
  "Deep Well & Solar Pumping"
],
  image: "/images/products/wq-b.webp"
},

{
  id: "wq",
  category: "Sewage & Drainage Pumps",
  name: "WQ Stainless Steel Sewage Submersible Pump",
  model: "WQ",
  series: "WQ",
  description: "This stainless steel submersible sewage pump features a vortex semi-open impeller and can pass solids up to 40 mm. It is suited to domestic and light-industrial wastewater containing solids and fibrous materials. Confirm the solids-passage requirement and choose a model that matches the required flow and head.",
  flow: "5-40 m³/h",
  head: "10-20 m",
  power: "1.1-3.0 kW",
  material: "304 Stainless Steel",
  applications: [
  "Municipal Wastewater Treatment",
  "Industrial Process Wastewater",
  "Deep Well & Solar Pumping"
],
  image: "/images/products/wq.webp"
},


// ==================== YDL 系列 ====================
{
  id: "ydl",
  category: "Circulating & Inline Pumps",
  name: "YDL Submerged Vertical Multistage Stainless Steel Centrifugal Pump",
  model: "YDL",
  series: "YDL",
  description: "This submerged vertical multistage pump is designed for machine-tool coolant, lubricating fluids, condensate, and industrial cleaning equipment. Its high-quality stainless steel wetted parts suit industrial fluid-handling duties where material compatibility and the required flow and head must be considered.",
  flow: "0.4-10.5 m³/h",
  head: "6-205 m",
  power: "0.37-4.0 kW",
  material: "304 / 316 Stainless Steel",
  applications: [
    "Industrial Process Wastewater",
    "Washing & Cleaning Systems",
    "Water Cooling & Circulation"
  ],
  image: "/images/products/ydl.webp"
},

// ==================== ZW 系列 ====================
{
  id: "zw",
  category: "Sewage & Drainage Pumps",
  name: "ZW Non-Clogging Self-Priming Sewage Pump",
  model: "ZW",
  series: "ZW",
  description: "This self-priming, non-clogging sewage pump combines self-priming and sewage-discharge functions and can handle large solids, long fibers, and sediment without a foot valve. It is suitable for municipal and industrial wastewater applications. Select the model according to the wastewater characteristics and the required flow and head.",
  flow: "Varies by model",
  head: "Varies by model",
  power: "Varies by model",
  material: "Cast Iron",
  applications: [
    "Municipal Wastewater Treatment",
    "Industrial Process Wastewater"
  ],
  image: "/images/products/zw.webp"
},

];

export const pumpCategories = [
  'Circulating & Inline Pumps',
  'Boosting & Fire Pumps',
  'End Suction / Ground Pumps',
  'Sewage & Drainage Pumps',
];

export const applicationCategories = [
  'Building Water Supply & Boosting',
  'Municipal Wastewater Treatment',
  'Industrial Process Wastewater',
  'Agricultural & Irrigation',
  'Fire Fighting System',
  'Water Cooling & Circulation',
  'Washing & Cleaning Systems',
  'Food & Beverage Processing',
  'Swimming Pool & Water Features',
  'Deep Well & Solar Pumping',
];
