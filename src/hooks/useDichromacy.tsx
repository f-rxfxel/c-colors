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

  const AccessibilityIcon = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='mr-3'
      >
        <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
        <circle cx='12' cy='12' r='3' />
      </svg>
    );
  }
  

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

  const SelectDaltonism = ({ text, icon }: { text: string, icon?: React.ReactNode }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
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
