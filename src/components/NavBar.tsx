"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navBarElements = [
  { label: "Dashboard", value: "dashboard" },
  { label: "Proposals", value: "proposals" },
  { label: "Messages", value: "messages" },
  { label: "Drive", value: "drive" },
  { label: "Settings", value: "settings" },
];

const NavBar = () => {
  const pathname = usePathname();

  const buttonIsActive = (path: string) => {
    console.log("path", path, "pathname", pathname);
    if (pathname === "/" && path === "/dashboard") {
      return true;
    }
    return path === pathname;
  };

  return (
    <div className="absolute top-32 bottom-0 left-0 px-10 py-10 bg-white">
      <nav className="flex flex-col justify-start items-start gap-4">
        {navBarElements.map((page) => (
          <Link
            href={page.value === "dashboard" ? "/" : `/${page.value}`}
            className={classNames(
              "grid grid-flow-col w-full gap-4 items-center justify-start rounded-xl px-5 py-3 text-lg",
              buttonIsActive(`/${page.value}`)
                ? "text-white bg-color2 font-medium"
                : "text-color1 hover:bg-slate-100 duration-200"
            )}
          >
            <img
              src={
                buttonIsActive(`/${page.value}`)
                  ? `/icons/${page.value}.svg`
                  : `/icons/${page.value}_notActive.svg`
              }
              alt={page.label}
              className="w-7 h-7"
            />
            {page.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
