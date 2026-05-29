import { notFound } from "next/navigation";
import { heroVariants } from "@/components/sections/made-for-hero-variants";
import VariantNav from "./VariantNav";

export function generateStaticParams() {
  return heroVariants.map((v) => ({ id: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const v = heroVariants.find((x) => x.id === id);
  return { title: v ? `Made For hero · ${v.title}` : "Made For Hero Variant" };
}

export default async function MadeForHeroVariantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const i = heroVariants.findIndex((x) => x.id === id);
  if (i === -1) notFound();
  const v = heroVariants[i];
  const prev = heroVariants[(i - 1 + heroVariants.length) % heroVariants.length];
  const next = heroVariants[(i + 1) % heroVariants.length];
  const Comp = v.Component;

  return (
    <div className="bg-ink">
      <VariantNav
        currentNumber={v.number}
        currentTitle={v.title}
        prevId={prev.id}
        nextId={next.id}
        total={heroVariants.length}
      />
      <Comp />
    </div>
  );
}
