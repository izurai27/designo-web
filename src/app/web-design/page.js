
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
      <ProductHero title="Web Design"  msg="We build websites that serve as powerful marketing tools and bring memorable brand experiences." />
      <div className="m-auto w-11/12 flex flex-col gap-8  mt-32 ">
        <BoxCard title = "EXPRESS" msg="A multi-carrier shipping website for ecommerce businesses" imageLoc="/images/web/image-express.jpg" />
        <BoxCard title = "TRANSFER" msg="Site for low-cost money transfers and sending money within seconds" imageLoc="/images/web/image-transfer.jpg" />
        <BoxCard title = "PHOTON" msg="A state-of-the-art music player with high-resolution audio and DSP effects" imageLoc="/images/web/image-photon.jpg" />
        <BoxCard title = "BUILDER" msg="Connects users with local contractors based on their location" imageLoc="/images/web/image-builder.jpg" />
        <BoxCard title = "BLOGR" msg="Blogr is a platform for creating an online blog or publication" imageLoc="/images/web/image-blogr.jpg" />
        <BoxCard title = "CAMP" msg="Get expert training in coding, data, design, and digital marketing" imageLoc="/images/web/image-camp.jpg" />

      </div>
      
      <div className="flex flex-col item-center gap-4 mt-32 w-11/12">
        <Link href="/app-design">
          <Cards gambarBg="/images/image-app-design.jpg" title="APP DESIGN" />
        </Link>
        <Link href="/graphic-design">
          <Cards gambarBg="/images/image-graphic-design.jpg" title="GRAPHIC DESIGN" />
        </Link>
      </div>
      
      <Footer/>
    </main>
  );
}
