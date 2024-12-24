import Banner from "@/components/Banner";
import HeroSectionMenu from "@/components/Hero-section";
import HeroSection from "@/components/Hero-section/section";

const menu = ["Company", "Products", "Developers", "About us"]

export default function Home() {
  return (
    <div className='bg-gradient-to-tr from-darkBlue from-60% via-mediumBlue to-darkBlue'>
    <Banner />
    <HeroSectionMenu menus={menu} />
    <HeroSection />
  </div>
  );
}
