import BlueHeader from "@/components/BlueHeader";
import PricingComponent from "@/components/Pricing";
import PricingCards from "@/components/PricingCards";
import PricingFAQs from "@/components/PricingFAQs";
import PricingLogo from "@/components/PricingLogo";

export default function Pricing() { {
    return (
      <div className="px-[135px] ">
        <BlueHeader/>
        <PricingComponent/>
        <PricingCards/>
        <PricingLogo/>
        <PricingFAQs/>
       
  
      </div>
    )
  }
  
  }