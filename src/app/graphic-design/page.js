
import Hero from "../ui/hero";
import Cards from "../ui/card";
import RoundCard from "../ui/roundCard";
import Footer from "../ui/footer";
import ProductHero from "../ui/productHero";
import BoxCard from "../ui/boxCard";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ProductHero title="Graphic Design"  msg="We deliver eye-catching branding materials that are tailored to meet your business objectives." />
      <div className="m-auto w-11/12 flex flex-col gap-8 mt-32 ">
        <BoxCard title = "TIM BROWN" msg="A book cover designed for Tim Brown&#39;s new release,&#39;Change&#39;" imageLoc="/images/graphic/image-change.jpg" />
        <BoxCard title = "BOXED WATER" msg="A simple packaging concept made for Boxed Water" imageLoc="/images/graphic/image-boxed-water.jpg" />
        <BoxCard title = "SCIENCE!" msg="A poster made in collaboration with the Federal Art Project" imageLoc="/images/graphic/image-science.jpg" />
       
      </div>
      
      <div className="flex flex-col item-center gap-4 mt-32 w-11/12">
        
        <Link href="/web-design">
          <Cards gambarBg="/images/image-web-design.jpg" title="WEB DESIGN" />
        </Link>
        <Link href="/app-design">
          <Cards gambarBg="/images/image-app-design.jpg" title="APP DESIGN" />
        </Link>
        
      </div>
      
      <Footer/>
    </main>
  );
}
