import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageLightbox from "@/components/ImageLightbox";
import { products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const applicationImageMap: Record<string, string> = {
  "Wastewater & Sewage": "/images/applications/municipal-treatment.png",
  "Industrial Process": "/images/applications/industrial-process.png",
  "Water Supply & Boosting": "/images/applications/building-boosting.png",
  "Municipal Wastewater Treatment": "/images/applications/municipal-treatment.png",
  "Basement & Underground Drainage": "/images/applications/basement-lifting.png",
  "Industrial Process Wastewater": "/images/applications/industrial-process.png",
  "Building Water Supply & Boosting": "/images/applications/building-boosting.png",
  "Agricultural & Irrigation": "/images/applications/agricultural-irrigation.png",
  "Fire Fighting System": "/images/applications/fire-fighting.png",
  "Swimming Pool & Water Features": "/images/applications/swimming-pool.png",
  "Deep Well & Solar Pumping": "/images/applications/deep-well-solar.png",
  "Food & Beverage Processing": "/images/applications/food-beverage-processing.png",
  "Washing & Cleaning Systems": "/images/applications/washing-cleaning-systems.png",
  "Water Cooling & Circulation": "/images/applications/water-cooling-circulation.png",
};

function findProduct(slug: string) {
  return products.find((product) => product.id.toLowerCase() === slug.toLowerCase());
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    return { title: "Product Not Found", robots: { index: false, follow: false } };
  }

  const description = `${product.name} (${product.model}) for ${product.applications.join(", ")}. ${product.flow} flow, ${product.head} head, and ${product.material} construction.`;

  return {
    title: `${product.model} ${product.name}`,
    description,
    alternates: { canonical: `/products/${product.id}` },
    openGraph: {
      title: `${product.model} ${product.name} | Winning Pumps`,
      description,
      url: `/products/${product.id}`,
      images: product.image ? [{ url: product.image, alt: product.name }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.model} ${product.name} | Winning Pumps`,
      description,
      images: product.image ? [product.image] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) notFound();

  const currentIndex = products.findIndex((item) => item.id === product.id);
  const previousProduct = currentIndex > 0 ? products[currentIndex - 1] : undefined;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : undefined;

  return (
    <article className="mx-auto max-w-6xl px-6 pb-12 pt-36">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/products" className="hover:text-brand-600">Products</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-800">{product.model}</li>
        </ol>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 shadow-sm">
          {product.image ? (
            <img src={product.image} alt={product.name} className="max-h-[420px] w-auto object-contain" />
          ) : (
            <p className="text-slate-400">Product image unavailable</p>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wider text-brand-600">{product.series} SERIES</p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-5xl">{product.name}</h1>
          <p className="mt-2 text-lg text-slate-500">Model: {product.model}</p>
          <p className="mt-6 leading-relaxed text-slate-600">{product.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["Flow Range", product.flow],
              ["Max Head", product.head],
              ["Power Range", product.power],
              ["Material", product.material],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <dt className="text-xs text-slate-500">{label}</dt>
                <dd className="mt-1 font-bold text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>

          <section className="mt-6" aria-labelledby="applications-heading">
            <h2 id="applications-heading" className="font-semibold text-slate-900">Applications</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.applications.map((application) => (
                <span key={application} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{application}</span>
              ))}
            </div>
          </section>

          <Link href={`/products?model=${encodeURIComponent(product.model)}#rfq`} className="mt-8 flex w-full justify-center rounded-2xl bg-brand-600 py-3.5 text-lg font-semibold text-white transition hover:bg-brand-700">
            Request a Factory Quote
          </Link>

          <div className="mt-4 flex gap-3">
            {previousProduct && <Link href={`/products/${previousProduct.id}`} className="flex-1 rounded-2xl border border-slate-300 py-3 text-center text-sm font-medium text-slate-700 hover:bg-slate-50">← Previous Product</Link>}
            {nextProduct && <Link href={`/products/${nextProduct.id}`} className="flex-1 rounded-2xl bg-slate-900 py-3 text-center text-sm font-medium text-white hover:bg-slate-800">Next Product →</Link>}
          </div>
        </div>
      </div>

      <section className="mt-12 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm lg:p-10" aria-labelledby="application-gallery-heading">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-600">Engineering Applications</p>
        <h2 id="application-gallery-heading" className="mt-3 text-2xl font-black text-slate-900">Typical Applications</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {product.applications.map((application) => {
            const image = applicationImageMap[application];
            return (
              <div key={application} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                {image ? <ImageLightbox src={image} alt={`${application} pump application`} /> : <div className="aspect-[4/3] bg-slate-100" />}
                <div className="p-5"><h3 className="text-sm font-bold text-slate-900">{application}</h3></div>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}
