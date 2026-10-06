type BreadcrumbItem = {
  name: string;
  url?: string;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

const SITE_URL = "https://www.winningpump.com";

export default function BreadcrumbSchema({
  items,
}: BreadcrumbSchemaProps) {
  const itemListElement = items.map((item, index) => {
    const listItem: {
      "@type": "ListItem";
      position: number;
      name: string;
      item?: string;
    } = {
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
    };

    if (item.url) {
      listItem.item = item.url.startsWith("http")
        ? item.url
        : `${SITE_URL}${item.url}`;
    }

    return listItem;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}