import Image from "next/image"

export default function Hero () {
    return (
        <div className="bg-salmon bg-hero-pattern pt-20 px-6 flex flex-col gap-5 items-center overflow-hidden">
            <h1 className="text-3xl text-center text-white ">Award-winning custom designs and digital branding solutions</h1>
            <p className="text-sm text-center text-white leading-6">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <button className="text-sm text-center bg-white w-36 h-14 rounded-lg">LEARN MORE</button>
            <Image  
                src="/images/image-hero-phone.png"
                width = {568}
                height = {573}
                className="scale-200 translate-y-28"
                alt = "logo"
                
            />
        </div>
    )
}