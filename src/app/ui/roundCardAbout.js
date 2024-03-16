import Image from "next/image";
import Link from "next/link";



export default function RoundCardAbout ({title,imageLoc,rotate,location}) {
    const rotateDegree = "rotate-"+rotate;
    return (
        <div className=" flex flex-col justify-center items-center gap-5 w-1/2 ">
            <div className="grid place-items-center w-full aspect-square relative" 
            // style={{ 
            //     backgroundImage : `url('images/bg-pattern-hero-home.svg')`, 
            //     backgroundPosition: "center" , 
            //     backgroundSize : "cover",
                 
            //     }}
                >
                <Image  
                    src={imageLoc}
                    fill
                    alt = "ilustrasi" 
                    className="absolute z-10"      
                />               
                <Image  
                    src={'images/bg-pattern-hero-home.svg'}
                   fill
                    alt = "ilustrasi" 
                    className= {rotateDegree}
                          
                />               
            </div>
            <h2 className="uppercase text-xl">{title}</h2>
            <Link href={location}>
                <button className="bg-peach rounded-md w-36 p-4 cursor-pointer text-white">SEE LOCATION</button>
            </Link>
        </div>
    )
}