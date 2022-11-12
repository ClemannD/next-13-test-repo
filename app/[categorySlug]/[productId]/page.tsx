export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  console.log("params", params);
  return <div></div>;
}

export async function generateStaticParams({ categorySlug }: any) {
  console.log("categorySlug", categorySlug);
  return [
    {
      productId: "1",
    },
    {
      productId: "2",
    },
  ];
}
