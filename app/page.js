
import Header from "@/components/header";
import { Fragment } from "react";
import Script from "next/script";
import Link from "next/link";
import Footer from "@/components/footer";
import Faq from "@/components/faq/faq";
import Calculator from "@/components/calculator/calculator";
import MobileBanner from "@/components/mobile-banner/mobile-banner";
import MainBanner from "@/components/main-banner/main-banner";
import MainProcess from "@/components/main-process/main-process";
import MainThings from "@/components/main-things/main-things";
import Transaction from "@/components/transaction/transaction";
import FooterMobileBanner from "@/components/footer-mobile-banner/footer-mobile-banner";
import FooterMainBanner from "@/components/footer-main-banner/footer-main-banner";
import Testimonial from "@/components/testimonial/testimonial";


export default function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <MainBanner />
        {/* mobile header */}
        <MobileBanner />

        <Calculator />

        <MainProcess />

        <MainThings />

        <Transaction />

        <Testimonial />

        <FooterMainBanner />

        <FooterMobileBanner />
      </main>

      <Footer />

      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      />
      <Script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      />
    </Fragment>
  );
}
