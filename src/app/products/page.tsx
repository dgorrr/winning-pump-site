import ProductsClient from "./ProductsClient";

type SearchParamValue = string | string[] | undefined;

type ProductsPageProps = {
  searchParams: Promise<{
    action?: SearchParamValue;
    model?: SearchParamValue;
    category?: SearchParamValue;
    application?: SearchParamValue;
  }>;
};

function firstValue(value: SearchParamValue): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;

  return (
    <ProductsClient
      initialAction={firstValue(params.action)}
      initialModel={firstValue(params.model)}
      initialCategory={firstValue(params.category)}
      initialApplication={firstValue(params.application)}
    />
  );
}
