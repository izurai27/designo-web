
import Hero from "../ui/hero";
import Cards from "../ui/card";
import RoundCard from "../ui/roundCard";
import Footer from "../ui/footer";
import ProductHero from "../ui/productHero";
import BoxCard from "../ui/boxCard";
import Link from "next/link";
import RoundCardAbout from "../ui/roundCardAbout";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <img src="/images/about/mobile/image-about-hero.jpg" alt="hero" className="w-full h-auto" />
      <div className="bg-salmon bg-hero-pattern bg-right-top w-full aspect-[7/6] flex flex-col gap-3 justify-center items-center p-5 text-white">
        <h1 className="text-center text-4xl">About Us</h1>
        <p className="text-center text-sm">Founded in 2010, we are a creative agency that produces lasting results for our clients. We&#39;ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We&#39;re always looking forward to creating brands, products, and digital experiences that connect with our clients&#39; audiences.</p>
      </div>
      <img src="/images/about/mobile/image-world-class-talent.jpg" alt="talent" className="w-full h-auto" />
      <div className="bg-light-pink flex flex-col gap-6 p-6">
        <h1 className="text-center text-peach text-xl tracking-widest">World-class talent</h1>  
        <p  className="text-center">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   
</p>
        <p  className="text-center">Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand&#39;s story and mission.</p>
    </div>
    <div className="w-full flex flex-col items-center gap-7 mt-32">
      <RoundCardAbout title="CANADA" imageLoc="/images/about/illustration-canada.svg" location="/location" />
      <RoundCardAbout title="AUSTRALIA" imageLoc="/images/about/illustration-australia.svg" location="/location" />
      <RoundCardAbout title="UNITED KINGDOM" imageLoc="/images/about/illustration-united-kingdom.svg" location="/location" />
    </div>
    <img src="/images/about/mobile/image-real-deal.jpg" alt="talent" className="w-full h-auto mt-32" />
    <div className="bg-light-pink flex flex-col gap-6 p-6">
      <h1 className="text-center text-peach text-xl tracking-widest">The real deal</h1>  
      <p  className="text-center">As strategic partners in our clients&#39; businesses, we are ready to take on any challenge as our own.
Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
      <p  className="text-center">We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
    </div>
      
      <Footer/>
    </main>
  );
}
