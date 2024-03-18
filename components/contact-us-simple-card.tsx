"use client";

import useContactDisplay from "@/hooks/use-contact-display";
import { useMediaQuery } from "usehooks-ts";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X } from "lucide-react";
import Link from "next/link";

export default function ContactUsSimpleCard() {
  const { open, setOpen } = useContactDisplay();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop || !open) return null;

  return (
    <Card className="w-full relative">
      <X
        className="absolute right-2 cursor-pointer top-2 w-4 h-4"
        onClick={() => setOpen(false)}
      />
      <CardHeader className="text-left pb-0">
        <CardTitle className="text-muted-foreground text-sm">EMAIL</CardTitle>
        <CardDescription className="text-xl text-white font-semibold decoration-[#525252]">
          <Link href="mailto:mustafahyder789@gmail.com" className="underline">
            mustafahyder789@gmail.com
          </Link>
        </CardDescription>
      </CardHeader>
      <CardHeader className="text-left pb-0">
        <CardTitle className="text-muted-foreground text-sm">
          PHONE NUMBER
        </CardTitle>
        <CardDescription className="text-xl text-white font-semibold decoration-[#525252]">
          <Link href="tel:03243276902" className="underline">
            03243276902
          </Link>
        </CardDescription>
      </CardHeader>
      <CardHeader className="text-left pb-0">
        <CardTitle className="text-muted-foreground text-sm">
          OPENING HOURS
        </CardTitle>
        <CardDescription className="text-xl text-white font-semibold decoration-[#525252]">
          10AM to 10PM
        </CardDescription>
      </CardHeader>
      <CardHeader className="text-left text-sm">
        <CardTitle className="text-muted-foreground text-sm">
          DEVELOPER
        </CardTitle>
        <CardDescription className="text-xl text-white font-semibold decoration-[#525252]">
          <Link href="https://saadfarhan.vercel.app" className="underline">
            https://saadfarhan.vercel.app
          </Link>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
