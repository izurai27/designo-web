import Image from "next/image";

export default function ProductHero ({title,msg}) {
    return (
        <div className="bg-salmon bg-hero-pattern bg-right-top w-full aspect-[7/6] flex flex-col gap-3 justify-center items-center p-5 text-white">
            <h1 className="text-center text-4xl">{title}</h1>
            <p className="text-center text-sm">{msg}</p>

        </div>
    )
}