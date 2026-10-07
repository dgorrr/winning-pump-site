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
  description: "Submersible sewage pump with cutting device. Features a semi-open impeller design for high cutting efficiency, fast drainage, and energy saving. Effectively cuts and discharges solids such as plastic bags and cloth strips in sewage, preventing clogging. The impeller is made of 3Cr13 stainless steel after heat treatment, offering excellent wear resistance, durability, rust resistance, longer service life, and higher efficiency.",
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
  description: "Single-stage centrifugal pump with robust and compact structure. All wetted parts are made of 304 stainless steel. Easy to install and maintain. Suitable for hygienic applications and mildly corrosive liquids.",
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
  description: "Single-stage centrifugal pump with semi-open impeller, capable of handling liquids with small solid particles (up to 18mm). All wetted parts are 304 stainless steel.",
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
  description: "Intelligent single-stage centrifugal pump with semi-open impeller. Features stable pressure, overload protection, and low water level protection. All wetted parts are 304 stainless steel.",
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
  description: "Explosion-proof (Ex dI BT4 Gb) stainless steel submersible sewage pump with cutting or mixing device options. Excellent corrosion resistance for harsh environments.",
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
  description: "Horizontal self-priming centrifugal pump without check valve. Features simple structure, reliable operation, and high efficiency. Widely used for clean water transfer.",
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
  description: "Advanced horizontal multistage centrifugal pump with all wetted parts made of 304 or 316 stainless steel. Features high efficiency, compact design, and excellent performance for high head applications. Suitable for building services and general industrial use.",
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
  description: "New generation horizontal multistage pump with all stainless steel wetted parts. Designed for complex applications in building services and industry, especially where higher head is required. Excellent efficiency and durability.",
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
  description: "Compact horizontal multistage pump with stainless steel impeller and diffuser. Suitable for mildly corrosive liquids. Features low noise and small installation space.",
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
  description: "Horizontal multistage pump with clamp-type pump body connection for easy disassembly and cleaning. All wetted parts are stainless steel. Ideal for applications requiring frequent maintenance.",
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
  description: "Automatic version with built-in electronic pressure controller. Features stable water pressure, overload protection, and automatic start/stop. Compact structure with stainless steel wetted parts.",
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
  description: "Automatic multistage pump with pressure controller. Suitable for light corrosive liquids. Features compact design, low noise, and automatic operation for energy saving.",
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
  description: "Intelligent variable frequency constant pressure system with stainless steel construction. Features stable pressure, overload protection, power failure restart, and low water level protection.",
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
  name: "DLH Vertical Multistage Stainless Steel Centrifugal Pump",
  model: "DLH",
  series: "DL",
  description: "Vertical inline multistage pump with small footprint. All wetted parts are high-quality stainless steel. Ideal for installations with limited space. High efficiency and excellent durability.",
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
  description: "Vertical inline multistage pump with small footprint. All wetted parts are high-quality stainless steel. Ideal for installations with limited space. High efficiency and excellent durability.",
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
  description: "Vertical inline multistage pump with small footprint. All wetted parts are high-quality stainless steel. Ideal for installations with limited space. High efficiency and excellent durability.",
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
  description: "Vertical multistage inline pump designed for building services and industrial applications. Compact design, high performance, and excellent corrosion resistance.",
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
  description: "High-performance vertical multistage pump suitable for large flow and high head applications. All wetted parts are stainless steel with excellent durability and efficiency.",
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
  description: "Advanced end suction centrifugal pump with all wetted parts made of 304 or 316 stainless steel. Complies with DIN24255 standard. Excellent efficiency and corrosion resistance for building services and industrial applications.",
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
  description: "Covered coaxial end suction centrifugal pump with compact structure. All wetted parts are made of 304 or 316 stainless steel. Complies with DIN24255 standard and offers excellent efficiency and corrosion resistance for building services and industrial applications.",
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
  description: "High-efficiency end suction pump with stainless steel construction. Motor is directly coupled to the pump. Easy maintenance and excellent performance for water supply and industrial processes.",
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
  description: "GZA(S)-G coaxial end suction centrifugal pump with 304 or 316 stainless steel wetted parts. Features compact structure and high efficiency. Suitable for building water supply, industrial circulation, and fire protection systems.",
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
  description: "Inline pipeline centrifugal pump with all wetted parts made of 304 stainless steel. Compact design, easy installation, and high efficiency. Widely used in heating, cooling, and water circulation systems.",
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
  description: "Vertical non-clogging sewage pump designed for pumping wastewater containing solids and long fibers. Features excellent anti-winding performance and high efficiency. Suitable for municipal and industrial sewage applications.",
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
  description: "Jet self-priming centrifugal pump with stainless steel pump body. Can draw water from deeper wells. Features self-priming function and is widely used for domestic and light industrial water supply.",
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
  description: "Automatic version with built-in electronic pressure controller. Features automatic start/stop, stable pressure, and energy saving. Suitable for domestic and light industrial boosting applications.",
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
  description: "Intelligent variable frequency constant pressure jet pump. Features stable pressure, overload protection, power failure restart, and low water level protection. All wetted parts are stainless steel.",
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
  description: "Detachable inline circulation pump with high efficiency and low noise. Designed for easy maintenance without affecting the pipeline system. Suitable for hot and cold water circulation.",
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
  description: "Detachable inline circulation pump with motor that can be pulled out backWard for easy maintenance. Features high efficiency, low noise, and wide high-efficiency range. Ideal for HVAC and hot water systems.",
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
  description: "Vertical inline pipeline pump with compact structure and high efficiency. Suitable for clean water and liquids with similar physical and chemical properties. Widely used in water supply, drainage, fire protection, and industrial systems.",
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
  description: "Advanced pipeline pump with all wetted parts made of 304 or 316 stainless steel. Features high efficiency, compact structure, and excellent performance for building services and industrial applications.",
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
  description: "Advanced pipeline pump with stainless steel construction. Suitable for water supply, boosting, cooling, and washing systems in building services and light industry.",
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
  description: "Automatic version with built-in electronic pressure controller. Features stable pressure, energy saving, and easy maintenance. Ideal for constant pressure water supply applications.",
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
  description: "Intelligent variable frequency constant pressure pump with stainless steel construction. Features stable pressure, overload protection, power failure restart, and low water level protection.",
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
  description: "Stainless steel centrifugal pump suitable for water supply, pressure boosting, high-purity water systems, pharmaceutical, food, and fine chemical applications.",
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
  description: "Sewage submersible pump with cutting device. Features high cutting efficiency for plastics, cloth strips, and fibrous materials. Semi-open impeller design ensures fast drainage and anti-clogging performance. Ideal for wastewater with solids.",
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
  description: "Stainless steel sewage submersible pump with optional cutting or mixing device. Excellent corrosion resistance and durability. Suitable for sewage containing solids and long fibers in corrosive environments.",
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
  description: "High head sewage pump designed for pumping liquids containing short fibers, paper scraps, and sediment. Widely used in industrial, agricultural, construction, and municipal applications.",
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
  description: "Stainless steel sewage submersible pump with channel impeller. Capable of passing large solids up to 100mm. Water-cooled motor allows long-term operation with motor partially exposed. Optional mixing device available.",
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
  description: "Channel impeller sewage submersible pump with excellent non-clogging performance. Maximum solid passage up to 100mm. Suitable for municipal and industrial wastewater containing solids and fibers.",
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
  description: "Water-cooled stainless steel sewage submersible pump. Motor can operate long-term with partial exposure above water. Features channel impeller with high efficiency and non-clogging capability.",
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
  description: "Channel impeller sewage submersible pump with high efficiency and non-clogging performance. Maximum solid passage up to 100mm. Widely used in municipal and industrial wastewater applications.",
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
  description: "Stainless steel sewage submersible pump with vortex semi-open impeller. Maximum solid passage 40mm. Suitable for domestic and light industrial wastewater containing solids and fibrous materials.",
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
  description: "Submerged vertical multistage pump designed for machine tool coolant, lubricating fluid, condensate, and industrial cleaning equipment. All wetted parts are high-quality stainless steel.",
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
  description: "Self-priming non-clogging sewage pump that integrates self-priming and sewage discharge functions. Capable of handling large solids, long fibers, and sediment without a foot valve. Excellent for municipal and industrial wastewater.",
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
