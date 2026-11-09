import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ProductCard from "@/components/ProductCard";
import {
  categoryPages,
  getCategoryPage,
  relatedSewageIds,
} from "@/data/categoryPages";
import { products } from "@/data/products";

type CategoryLandingPageProps = {
  slug: string;
};

export default function CategoryLandingPage({ slug }: CategoryLandingPageProps) {
  const category = getCategoryPage(slug);
  if (!category) return null;

  const productsById = new Map(products.map((product) => [product.id, product]));
  const categoryProducts = category.productIds.map((id) => productsById.get(id));
  const relatedProducts =
    slug === "submersible-sewage-pumps"
      ? relatedSewageIds.map((id) => productsById.get(id))
      : [];

  if (categoryProducts.some((product) => !product) || relatedProducts.some((product) => !product)) {
    throw new Error(`A product configured for ${slug} is missing from products.ts`);
  }

  const catalogUrl = `/products?category=${encodeURIComponent(category.catalogCategory)}`;
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: category.name },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 px-6 pb-20 pt-24">
      <div className="mx-auto max-w-7xl">
        <BreadcrumbSchema items={breadcrumbItems} />
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: category.name },
          ]}
        />

        <header className="mb-10 max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Winning Pumps Product Range
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {category.h1}
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{category.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`${catalogUrl}#rfq`}
              className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              Request a Quote
            </Link>
            <Link
              href={catalogUrl}
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-500"
            >
              Browse Filtered Catalog
            </Link>
          </div>
        </header>

        <section aria-label={`${category.name} product range`}>
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900">{category.name} Range</h2>
            <Link href={catalogUrl} className="text-sm font-semibold text-brand-700 hover:underline">
              View in product catalog
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <ProductCard key={product!.id} product={product!} />
            ))}
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="mt-16" aria-label="Related sewage and drainage pumps">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Related Sewage &amp; Drainage Pumps
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedProducts.map((product) => (
                <ProductCard key={product!.id} product={product!} />
              ))}
            </div>
          </section>
        )}

        <nav className="mt-16 border-t border-slate-200 pt-8" aria-label="Other pump categories">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Other Pump Categories</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {categoryPages
              .filter((item) => item.slug !== category.slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/products/${item.slug}`}
                    className="font-medium text-brand-700 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
