import { Button } from "../ui/button";

const HeroSection = () => {
    return (
        <div className="text-white">
            <div className="lg:w-[45%] w-[90%] mx-auto text-center mt-10 lg:mt-0">
                <div className="text-sm font-medium flex justify-center mb-3">
                        <img src="/images/star.svg" alt="star" width={12} height={12} />
                    <p className="ml-2">One platform, multiple solutions</p></div>
            <p className="lg:text-[80px] text-[32px] font-bold leading-[1.2] mb-3">CONNECTING YOU TO THE WORLD.</p>
            <p className="lg:w-[75%] w-[90%] mx-auto text-sm lg:text-base">Your gateway to global payments, ecommerce integration, account management,
                and multiple payment channels.</p>
            <Button className="text-base font-normal bg-mediumBlue h-[48px] text-sm font-medium mt-10">Explore our Products</Button>
           </div>
            <div>
            <img src="/images/world.svg" alt="world" className="w-[100vw]" />
           </div>
        </div>
    )
}

export default HeroSection;