export default async function CategoryPage({
  params,
}: {
  params: { categorySlug: string };
}) {
  return <div>{params.categorySlug}</div>;
}

export async function generateStaticParams() {
  return [
    {
      categorySlug: "food",
    },
    {
      categorySlug: "materials",
    },
  ];
}
