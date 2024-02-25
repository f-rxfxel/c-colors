"use client"

import { useDichromacy } from "@/hooks/useDichromacy";

export default function Home() {
  const { SelectDaltonism, AccessibleImage } = useDichromacy();

  return (
    <main className="flex gap-40">
      <SelectDaltonism text="Accessibility" />
      <AccessibleImage src="https://picsum.photos/200/300" title="Image"/>
    </main>
  );
}
