
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
      <ProductHero title="App Design"  msg="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." />
      <div className="m-auto w-11/12 flex flex-col gap-8  mt-32 ">
        <BoxCard title = "AIRFILTER" msg="A multi-carrier shipping website for ecommerce businesses" imageLoc="/images/app-design/image-airfilter.jpg" />
        <BoxCard title = "EYECAM" msg="Site for low-cost money transfers and sending money within seconds" imageLoc="/images/app-design/image-eyecam.jpg" />
        <BoxCard title = "FACEIT" msg="A state-of-the-art music player with high-resolution audio and DSP effects" imageLoc="/images/app-design/image-faceit.jpg" />
        <BoxCard title = "TODO" msg="Connects users with local contractors based on their location" imageLoc="/images/app-design/image-todo.jpg" />
        <BoxCard title = "LOOPSTUDIOS" msg="Blogr is a platform for creating an online blog or publication" imageLoc="/images/app-design/image-loopstudios.jpg" />
        
      </div>
      
      <div className="flex flex-col item-center gap-4 mt-32 w-11/12">
        
        <Link href="/web-design">
          <Cards gambarBg="/images/image-web-design.jpg" title="WEB DESIGN" />
        </Link>
        <Link href="/graphic-design">
          <Cards gambarBg="/images/image-graphic-design.jpg" title="GRAPHIC DESIGN" />
        </Link>
      </div>
      
      <Footer/>
    </main>
  );
}
