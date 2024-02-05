"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";


function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Fragment>
      <Link
        href={href}
       
        className={path.startsWith(href) ? `main-nav__item active` : `main-nav__item`}
      >
        {children}
      </Link>
    </Fragment>
  );
}

export default NavLink;