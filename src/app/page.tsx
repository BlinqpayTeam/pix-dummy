"use client"
import Banner from "@/components/Banner";
import Features from "@/components/features";
import Frames from "@/components/frames";
import HeroSection from "@/components/Hero-section/section";
import HeroSectionMenu from "@/components/Hero-section";
import SecondHalfSectionsWrapper from "@/components/landing-page/second-half-sections/SecondHalfSectionsWrapper";
import Partner from "@/components/partner";
import Slider from "@/components/slider";
import DownloadSection from "@/components/download-section";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/use-is-visible";


const menu = ["Company", "Products", "Developers", "About us"]
//'bg-gradient-to-tr from-darkBlue from-60% via-mediumBlue to-darkBlue lg:bg-[center_top_-208px]
const banks = ["Nigeria", "United States", "United Kingdom", "Canada", "China", "Europe", "Turkey", "Kenya"]
export default function Home() {

  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const textRef = useRef(null)
  const isVisibleText = useIsVisible(textRef)

  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef(null);
  const isVisible3 = useIsVisible(ref3);
  
  return (
    <section className="bg-primaryColor bg-[url('/images/bg.png')] bg-contain bg-no-repeat bg-[center_top_-206px]">

      <div>
        <Banner />
        <HeroSectionMenu menus={menu} />
        <HeroSection ref={textRef} isVisible={isVisibleText} />
        <Slider banks={banks} />
        <Partner ref={ref1} isVisible={isVisible1}  />
        <Features ref={ref2} isVisible={isVisible2} />
        <Frames />
        <DownloadSection ref={ref3} isVisible={isVisible3} />
      </div>

      <SecondHalfSectionsWrapper />
    </section>
  );
}
