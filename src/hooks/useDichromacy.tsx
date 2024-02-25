// Based on:
// https://github.com/cosdensolutions/code/tree/master/videos/long/custom-react-hooks-useLocalStorage

"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useState } from "react";

export const useDichromacy = () => {
  const setGlobalColorblind = (value: unknown) => {
    try {
      window.localStorage.setItem("colorblindess", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getGlobalColorblind = () => {
    try {
      const item = window.localStorage.getItem("colorblindess");
      return item ? JSON.parse(item) : "None";
    } catch (error) {
      console.log(error);
    }
  };

  const deficiencies = [
    "None",
    "Protanopia",
    "Protanomaly",
    "Deuteranopia",
    "Deuteranomaly",
    "Tritanopia",
    "Tritanomaly",
  ];

  const [colorblind, setColorblind] = useState(getGlobalColorblind());

  const handleChange = (e: string) => {
    setColorblind(e);
    setGlobalColorblind(e);
  };

  const SelectDaltonism = () => (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="flex items-center gap-3">
        texrte
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Daltonism</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup
        value={colorblind}
        onValueChange={handleChange}
      >
        {deficiencies.map((deficiency) => (
          <DropdownMenuRadioItem key={deficiency} value={deficiency}>
            {deficiency}
          </DropdownMenuRadioItem>
        ))}
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>)

  const AccessibleImage = () => (
    <Image src={""} alt="imagem" width={100} height={100} />
  )

  return SelectDaltonism;
};