import Banner from "@/components/Banner";
import HeroSectionMenu from "@/components/Hero-section";
import HeroSection from "@/components/Hero-section/section";
<<<<<<< HEAD
<<<<<<< HEAD
import SecondHalfSectionsWrapper from "@/components/landing-page/second-half-sections/SecondHalfSectionsWrapper";
=======
<<<<<<< HEAD
import SecondHalfSectionsWrapper from "@/components/second-half-sections/SecondHalfSectionsWrapper";
=======
import Image from "next/image";
>>>>>>> 5abec7e (update)
>>>>>>> ea67848 (firs)
=======
import SecondHalfSectionsWrapper from "@/components/second-half-sections/SecondHalfSectionsWrapper";
>>>>>>> 665ebe4 (firs)

const menu = ["Company", "Products", "Developers", "About us"]

export default function Home() {
  return (
    <section>

      <div className='bg-gradient-to-tr from-darkBlue from-60% via-mediumBlue to-darkBlue'>
        <Banner />
        <HeroSectionMenu menus={menu} />
        <HeroSection />
      </div>

      <SecondHalfSectionsWrapper />
    </section>
  );
}
