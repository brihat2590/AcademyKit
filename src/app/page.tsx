import FAQ from "@/components/FAQ";
import Firstpage from "@/components/FirstPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductivityBanner from "@/components/ProductivityBanner";


export default function page(){
  return(
    <div>

      <Firstpage/>
      
      <ProductivityBanner/>
      <FAQ/>
      
      
    </div>
  )
}