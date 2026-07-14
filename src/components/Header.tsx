import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"

function Header() {
  return (
    <header className="sticky top-0 z-99">
      <div className="absolute top-0 left-0 right-0 z-99 py-4.5 px-6 md:px-[3vw] bg-white">
        <div className="flex justify-between items-center">
          <div id="logo" className="flex text-2xl font-hero">
            {/* <img src="" alt="brand logo" /> */}
            <span>URBAN SHOES</span>
          </div>

          <nav className="flex gap-5 sm:gap-7 items-center">
            <ul className="hidden sm:flex gap-[3vw] text-[0.95rem] font-medium">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/product">Product</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <ul className="flex gap-4">
              <li>
                <a href="/favorite">
                  <HeartIcon className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="/cart">
                  <ShoppingCartIcon className="h-6 w-6" />
                </a>
              </li>
            </ul>

            <Sheet>
              <SheetTrigger className="block sm:hidden">
                <Bars3Icon className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent className="z-99 block">
                <ul className="flex flex-col gap-2 py-12 px-5 text-[0.95rem] font-medium">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/store">Store</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
