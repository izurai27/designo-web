import Image from "next/image";

export default function BoxCard ({imageLoc,title,msg}){
    return (
        <div className=" rounded-lg overflow-hidden">
            {/* <div className="aspect-[327/320]">
            </div>  */}
            <img src={`${imageLoc}`} alt="ilustration" className="aspect-[327/320]" />
            <div className="bg-light-pink flex flex-col gap-6 p-6">
                <h1 className="text-center text-peach text-xl tracking-widest">{title}</h1>  
                <p  className="text-center">{msg}</p>
            </div>
        </div>
    )
}