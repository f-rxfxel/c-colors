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

  const SelectDaltonism = ({ text }: { text: string }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-3">
          {text}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Daltonism</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={colorblind} onValueChange={handleChange}>
          {deficiencies.map((deficiency) => (
            <DropdownMenuRadioItem key={deficiency} value={deficiency}>
              {deficiency}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const AccessibleImage = ({
    src,
    title,
    className,
  }: {
    src: string;
    title: string;
    className?: string;
  }) => (
    <Image
    width={200}
    height={300}
      src={src}
      alt={title}
      className={`
        ${colorblind === "None" ? "" : ""}
        ${colorblind === "Protanopia" ? "hue-rotate-90" : ""}
        ${colorblind === "Protanomaly" ? "hue-rotate-90" : ""}
        ${colorblind === "Deuteranopia" ? "grayscale" : ""}
        ${colorblind === "Deuteranomaly" ? "grayscale" : ""}
        ${colorblind === "Tritanopia" ? "invert" : ""}
        ${colorblind === "Tritanomaly" ? "invert" : ""}
        ${className ?? ""}
`}
    />
  );

  return { SelectDaltonism, AccessibleImage };
};
