import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.winningpump.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/solutions",
    "/factory",
    "/about",
    "/contact",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));

  const productEntries = products.map((product) => ({
    url: `${siteUrl}/products/${product.id}`,
  }));

  return [...staticEntries, ...productEntries];
}