import FAQ from "@/components/FAQ";
import FeaturesSection from "@/components/FeaturesSection";
import Firstpage from "@/components/FirstPage";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";
import Navbar from "@/components/Navbar";
import ProductivityBanner from "@/components/ProductivityBanner";
import UseCases from "@/components/UseCases";


export default function page(){
  return(
    <div>

      <Firstpage/>
      <HeroImage/>
      <FeaturesSection/>
      <UseCases/>
      
      <ProductivityBanner/>
      <FAQ/>
      
      
    </div>
  )
}