import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { categoryPages } from "@/data/categoryPages";
import { SITE_URL } from "@/lib/siteUrl";

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
    url: `${SITE_URL}${route}`,
  }));

  const productEntries = products.map((product) => ({
    url: `${SITE_URL}/products/${product.id}`,
  }));

  const categoryEntries = categoryPages.map((category) => ({
    url: `${SITE_URL}/products/${category.slug}`,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries];
}
