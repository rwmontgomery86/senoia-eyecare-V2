import { notFound } from "next/navigation";
import { framesVariants } from "@/components/sections/made-for-frames-variants";
import VariantNav from "./VariantNav";

export function generateStaticParams() {
  return framesVariants.map((v) => ({ id: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const v = framesVariants.find((x) => x.id === id);
  return { title: v ? `Frames · ${v.title}` : "Frames Variant" };
}

export default async function MadeForFramesVariantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const i = framesVariants.findIndex((x) => x.id === id);
  if (i === -1) notFound();
  const v = framesVariants[i];
  const prev =
    framesVariants[(i - 1 + framesVariants.length) % framesVariants.length];
  const next = framesVariants[(i + 1) % framesVariants.length];
  const Comp = v.Component;

  return (
    <div className="bg-paper">
      <VariantNav
        currentNumber={v.number}
        currentTitle={v.title}
        prevId={prev.id}
        nextId={next.id}
        total={framesVariants.length}
      />
      <Comp />
    </div>
  );
}
