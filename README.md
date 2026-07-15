# Winning Pumps — B2B Water Pump Website

A Next.js B2B website for **Winning Pumps** (胜利水泵), a Chinese water pump manufacturer.

## Features

- **Homepage** — Hero, product categories, featured products, company advantages
- **Product Listing** — Filter by submersible, centrifugal, and booster pumps
- **Product Detail** — Full specs, features, applications, related products
- **RFQ Form** (询价单) — Request for quotation with product pre-selection
- **Contact Page** — Company info, contact form, business hours
- **Responsive Design** — Mobile-friendly industrial B2B layout
- **Tailwind CSS** — Clean blue/steel industrial theme

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── products/page.tsx     # Product listing
│   ├── products/[slug]/      # Product detail
│   ├── rfq/page.tsx          # RFQ form
│   └── contact/page.tsx      # Contact page
├── components/               # Header, Footer, ProductCard, etc.
├── data/products.ts          # Sample product data
└── lib/types.ts              # TypeScript types
```

## Sample Products

| Category     | Models |
|-------------|--------|
| Submersible | WP-QJ Deep Well, WP-WQ Wastewater |
| Centrifugal | WP-IS Single Stage, WP-SH Split Case |
| Booster     | WP-CDL Vertical Multistage, WP-PX Packaged Station |

## Build

```bash
npm run build
npm start
```
