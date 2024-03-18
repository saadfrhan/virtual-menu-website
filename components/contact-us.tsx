import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import useContactDisplay from "@/hooks/use-contact-display";
import { X } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

export default function ContactDrawer() {
  const { open, setOpen } = useContactDisplay();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Button
        variant="outline"
        className="w-full"
        onClick={() => setOpen(!open)}
      >
        About us
      </Button>
    );
  } else
    return (
      <Drawer open={open} onOpenChange={setOpen} className="relative">
        <DrawerTrigger asChild>
          <Button variant="outline" className="w-full">
            About us
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <X
            className="absolute right-2 cursor-pointer top-2 w-4 h-4"
            onClick={() => setOpen(false)}
          />
          <DrawerHeader className="text-left pb-0">
            <DrawerTitle className="text-muted-foreground text-sm">
              EMAIL
            </DrawerTitle>
            <DrawerDescription className="text-xl text-white font-semibold decoration-[#525252]">
              <Link
                href="mailto:mustafahyder789@gmail.com"
                className="underline"
              >
                mustafahyder789@gmail.com
              </Link>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerHeader className="text-left pb-0">
            <DrawerTitle className="text-muted-foreground text-sm">
              PHONE NUMBER
            </DrawerTitle>
            <DrawerDescription className="text-xl text-white font-semibold decoration-[#525252]">
              <Link href="tel:03243276902" className="underline">
                03243276902
              </Link>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerHeader className="text-left pb-0">
            <DrawerTitle className="text-muted-foreground text-sm">
              OPENING HOURS
            </DrawerTitle>
            <DrawerDescription className="text-xl text-white font-semibold decoration-[#525252]">
              10AM to 10PM
            </DrawerDescription>
          </DrawerHeader>
          <DrawerHeader className="text-left text-sm">
            <DrawerTitle className="text-muted-foreground text-sm">
              DEVELOPER
            </DrawerTitle>
            <DrawerDescription className="text-xl text-white font-semibold decoration-[#525252]">
              <Link href="https://saadfarhan.vercel.app" className="underline">
                https://saadfarhan.vercel.app
              </Link>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    );
}
