import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { useState } from "react";

export default function ContactDrawer() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">About us</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-left">
            <DialogTitle>Email</DialogTitle>
            <DialogDescription>
              <Link
                href="mailto:mustafahyder789@gmail.com"
                className="underline"
              >
                mustafahyder789@gmail.com
              </Link>
            </DialogDescription>
          </DialogHeader>
          <DialogHeader className="text-left">
            <DialogTitle>Phone number</DialogTitle>
            <DialogDescription>
              <Link href="tel:03243276902" className="underline">
                03243276902
              </Link>
            </DialogDescription>
          </DialogHeader>
          <DialogHeader className="text-left">
            <DialogTitle>Opening Hours</DialogTitle>
            <DialogDescription>10AM to 10PM</DialogDescription>
          </DialogHeader>
          <DialogHeader className="text-left text-sm">
            <DialogTitle>Developer Website</DialogTitle>
            <DialogDescription>
              <Link href="https://saadfarhan.vercel.app" className="underline">
                https://saadfarhan.vercel.app
              </Link>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full">About us</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Email</DrawerTitle>
          <DrawerDescription>
            <Link href="mailto:mustafahyder789@gmail.com" className="underline">
              mustafahyder789@gmail.com
            </Link>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerHeader className="text-left">
          <DrawerTitle>Phone number</DrawerTitle>
          <DrawerDescription>
            <Link href="tel:03243276902" className="underline">
              03243276902
            </Link>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerHeader className="text-left">
          <DrawerTitle>Opening Hours</DrawerTitle>
          <DrawerDescription>10AM to 10PM</DrawerDescription>
        </DrawerHeader>
        <DrawerHeader className="text-left text-sm">
          <DrawerTitle>Developer</DrawerTitle>
          <DrawerDescription>
            <Link href="https://saadfarhan.vercel.app" className="underline">
              https://saadfarhan.vercel.app
            </Link>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
