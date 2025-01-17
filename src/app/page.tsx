"use client"
import HeroSection from "@/components/Hero-section/section";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/use-is-visible";


export default function Home() {

  const textRef = useRef(null)
  const isVisibleText = useIsVisible(textRef)

  return (
    <section className="bg-primaryColor bg-[url('/images/bg.png')] bg-contain bg-no-repeat bg-[center_top_-206px] pt-16">

      <div>
        <HeroSection
          ref={textRef}
          isVisible={isVisibleText}
        />
      </div>
    </section>
  );
}
