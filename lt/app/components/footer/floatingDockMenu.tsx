"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconShoppingCart,
  IconBrandX,
  IconExchange,
  IconNewSection,
} from "@tabler/icons-react";
// import Image from "next/image";

export function FloatingDockMenu() {
  const links = [
    {
      title: "Shop",
      icon: (
        <IconShoppingCart className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="space-y-2" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
