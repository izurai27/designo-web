import Image from "next/image";


export default function RoundCard ({title,imageLoc,message,rotate}) {
    const rotateDegree = "rotate-"+rotate;
    return (
        <div className="w-80 flex flex-col justify-center items-center gap-5 ">
            <div className="grid place-items-center w-52 h-52 relative" 
            // style={{ 
            //     backgroundImage : `url('images/bg-pattern-hero-home.svg')`, 
            //     backgroundPosition: "center" , 
            //     backgroundSize : "cover",
                 
            //     }}
                >
                <Image  
                    src={imageLoc}
                    width = {188}
                    height = {162}
                    alt = "ilustrasi" 
                    className="absolute z-10"      
                />               
                <Image  
                    src={'images/bg-pattern-hero-home.svg'}
                    width = {188}
                    height = {162}
                    alt = "ilustrasi" 
                    className= {rotateDegree}
                          
                />               
            </div>
            <h2 className="uppercase text-xl">{title}</h2>
            <p className="text-base text-center leading-7">{message}</p>
        </div>
    )
}