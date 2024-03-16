import Image from "next/image";

export default function BoxCard ({imageLoc,title,msg}){
    return (
        <div className=" rounded-lg overflow-hidden">
            {/* <div className="aspect-[327/320]">
            </div>  */}
            <img src={`${imageLoc}`} alt="ilustration" className="aspect-[327/320]" />
            <div className=" p-3">
                <h1 className="text-center text-peach">{title}</h1>  
                <p  className="text-center">{msg}</p>
            </div>
        </div>
    )
}