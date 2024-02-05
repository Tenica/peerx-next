"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";


function MobileLink({ href, children }) {
  const path = usePathname();
  return (
    <Fragment>
      <Link
        href={href}
       
        className={path.startsWith(href) ? `mobile-nav__item active` : `mobile-nav__item`}
      >
        {children}
      </Link>
    </Fragment>
  );
}

export default MobileLink;