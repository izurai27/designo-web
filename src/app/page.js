
import Hero from "./ui/hero";
import Cards from "./ui/card";
import RoundCard from "./ui/roundCard";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <div className="flex flex-col item-center gap-4 mt-32">
        <Cards gambarBg="/images/image-web-design.jpg" title="WEB DESIGN" />
        <Cards gambarBg="/images/image-app-design.jpg" title="APP DESIGN" />
        <Cards gambarBg="/images/image-graphic-design.jpg" title="GRAPHIC DESIGN" />
      </div>
      <div className="flex flex-col item-center gap-y-20 mt-32">
        <RoundCard title="passionate" imageLoc="/images/illustration-passionate.svg" 
          message="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions." 
          rotate="270"
        />
        <RoundCard title="resourceful" imageLoc="/images/illustration-resourceful.svg" 
          message="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs." 
          rotate="180"
        />
        <RoundCard title="friendly" imageLoc="/images/illustration-friendly.svg" 
          message="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide." 
          rotate="0"
        />
      </div>
    </main>
  );
}
