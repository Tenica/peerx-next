 "use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MobileLink from "./mobileLink";


function Header() {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const [openBackDrop, setOpenBackDrop] = useState(false)

    const mobileNavigationHandler = () => {
        setOpenMobileNav(true)
        setOpenBackDrop(true)

    }

    const mobileBackDropHandler = () => {
        setOpenMobileNav(false)
        setOpenBackDrop(false)
    }


    return (
        <React.Fragment>
        {openBackDrop && <div className="backdrop open" onClick={mobileBackDropHandler}></div>}
        <header className="main-header">

    <div className="main-header__logo" >
        <button className="toggle-button" onClick={mobileNavigationHandler}>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
        </button>
        <Link href="/" className="main-header__brand">
            <Image src="images/Group.svg" width={50} height={50} alt="uHost - Your favorite hosting company" />

        </Link>
        <span className="main-header__logoName">PeerX</span>
    </div>

  

    <nav className="main-nav">
        <ul className="main-nav__items">
            <li className="main-nav__item">
                <Link href={"/"}>Home</Link>
            </li>
            <li className="main-nav__item">
                <NavLink href={"/about"}>About</NavLink>
            </li>
            <li className="main-nav__item">
                <NavLink href={"/services"}>Services</NavLink>
            </li>
            <li className="main-nav__item">
                <NavLink href={"/support"}>Support</NavLink>
            </li>
           
        </ul>
        <div className="main_nav--cta-container">
            <ul className="main-nav__items--cta">
                <li className="main-nav__item main-nav__item--cta">
                    <Link href="start-hosting">Get Started</Link>
                </li>
            </ul>

        </div>
    </nav>
</header> 
{openMobileNav && <nav className="mobile-nav open">
        <ul className="mobile-nav__items">
            <li className="mobile-nav__item">
                <Link href="/">Home</Link>
            </li>
            <li className="mobile-nav__item">
                <MobileLink href={"/about"}>About</MobileLink>
            </li>
            <li className="mobile-nav__item">
                <MobileLink href={"/services"}>Services</MobileLink>
            </li>
            <li className="mobile-nav__item">
                <MobileLink href={"support"}>Support</MobileLink>
            </li>
            <li className="mobile-nav__item main-nav__item--cta">
                <Link href="start-hosting">Get Started</Link>
            </li>
        </ul>
    </nav>}
</React.Fragment>);
}

export default Header;