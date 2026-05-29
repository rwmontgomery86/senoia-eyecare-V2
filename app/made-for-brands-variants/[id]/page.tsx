import { notFound } from "next/navigation";
import { brandsVariants } from "@/components/sections/made-for-brands-variants";
import VariantNav from "./VariantNav";

export function generateStaticParams() {
  return brandsVariants.map((v) => ({ id: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const v = brandsVariants.find((x) => x.id === id);
  return { title: v ? `Brands · ${v.title}` : "Brands Variant" };
}

export default async function MadeForBrandsVariantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const i = brandsVariants.findIndex((x) => x.id === id);
  if (i === -1) notFound();
  const v = brandsVariants[i];
  const prev =
    brandsVariants[(i - 1 + brandsVariants.length) % brandsVariants.length];
  const next = brandsVariants[(i + 1) % brandsVariants.length];
  const Comp = v.Component;

  return (
    <div className="bg-paper">
      <VariantNav
        currentNumber={v.number}
        currentTitle={v.title}
        prevId={prev.id}
        nextId={next.id}
        total={brandsVariants.length}
      />
      <Comp />
    </div>
  );
}
