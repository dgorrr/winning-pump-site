import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://winningpump.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/products", "/solutions", "/factory", "/about", "/contact", "/rfq"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === "" || route === "/products" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.7,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
