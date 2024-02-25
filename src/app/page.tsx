"use client";

import { useDichromacy } from "@/hooks/useDichromacy";

export default function Home() {
 
  const SelectDaltonism = useDichromacy();

  return (
    <main>
      <SelectDaltonism />
    </main>
  );
}
