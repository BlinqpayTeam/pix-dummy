import Banner from "@/components/Banner";
import Features from "@/components/features";
import Frames from "@/components/frames";
import HeroSection from "@/components/Hero-section";
import HeroSectionMenu from "@/components/Hero-section";
import SecondHalfSectionsWrapper from "@/components/landing-page/second-half-sections/SecondHalfSectionsWrapper";
import Partner from "@/components/partner";
import Slider from "@/components/slider";


const menu = ["Company", "Products", "Developers", "About us"]
//'bg-gradient-to-tr from-darkBlue from-60% via-mediumBlue to-darkBlue lg:bg-[center_top_-208px]
const banks = ["Nigeria", "United States", "United Kingdom", "Canada", "China", "Europe", "Turkey", "Kenya"]
export default function Home() {
  return (
    <section className="bg-primaryColor bg-[url('/images/bg.png')] bg-contain bg-no-repeat bg-[center_top_-206px]">

      <div>
        <Banner />
        <HeroSectionMenu menus={menu} />
        <HeroSection menus={menu} />
        <Slider banks={banks} />
        <Partner />
        <Features />
        <Frames />
      </div>

      <SecondHalfSectionsWrapper />
    </section>
  );
}
