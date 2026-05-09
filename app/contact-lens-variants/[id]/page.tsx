import { notFound } from "next/navigation";
import { variants } from "@/components/sections/contact-lens-variants";
import VariantNav from "./VariantNav";

export function generateStaticParams() {
  return variants.map((v) => ({ id: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const v = variants.find((x) => x.id === id);
  return { title: v ? `Brands · ${v.title}` : "Brands Variant" };
}

export default async function ContactLensVariantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const i = variants.findIndex((x) => x.id === id);
  if (i === -1) notFound();
  const v = variants[i];
  const prev = variants[(i - 1 + variants.length) % variants.length];
  const next = variants[(i + 1) % variants.length];
  const Comp = v.Component;

  return (
    <div className="bg-paper">
      <VariantNav
        currentNumber={v.number}
        currentTitle={v.title}
        prevId={prev.id}
        nextId={next.id}
        total={variants.length}
      />
      <Comp />
    </div>
  );
}
