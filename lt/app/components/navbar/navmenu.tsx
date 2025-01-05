"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Terrarium",
    href: "/shop/terrarium",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Aquarium",
    href: "/",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Betta Fish",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu className="mobile:hidden flex justify-center items-center p-1 pl-14">
      <NavigationMenuList>
        {/* get started */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>ɢᴇᴛ ꜱᴛᴀʀᴛᴇᴅ</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 tablet:w-[400px] smscreen:w-[500px] smscreen:grid-cols-[.75fr_1fr]">
              <ListItem href="/gallery" title="Gallery">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus.
              </ListItem>
              <ListItem href="/about" title="About">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                esse.
              </ListItem>
              <ListItem href="/" title="Maintenance Guides">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* shop */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>ꜱʜᴏᴘ</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 tablet:w-[400px] tablet:grid-cols-1 smscreen:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* contact */}
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              ᴄᴏɴᴛᴀᴄᴛ
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
