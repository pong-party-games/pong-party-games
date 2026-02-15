import CartModal from "components/cart/modal";
import LogoIcon from "components/icons/logo";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        {/* Desktop Only - Logo and Menu */}
        <div className="hidden md:flex md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="flex items-center mr-2 lg:mr-6"
          >
            <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[120px] w-[120px] rounded-xl">
              <LogoIcon className="h-[80px] w-[80px]" />
            </div>
            <div className="ml-2 flex-none text-sm font-medium uppercase lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {menu.length ? (
            <ul className="flex gap-6 text-sm items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {/* Desktop Only - Search */}
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        {/* Mobile & Desktop - Cart */}
        <div className="flex justify-end w-full md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
