

export default function Cards ({gambarBg,title}){
    const bgImage = "bg-"+gambarBg;
   
    return (
        <div className={`w-80 rounded-lg h-60 flex flex-col justify-center items-center text-white`}
            style={{ 
                backgroundImage : `url(${gambarBg})`,
             }}
        >
        {/* <div className={`${bgImage} w-80 rounded-lg h-60 flex flex-col justify-center items-center text-white`} > */}
        
            <h2 className="text-3xl tracking-wide">{title}</h2>
            <p className="text-base tracking-wide">
                VIEW PROJECTS 
                <span className="text-salmon">&gt;</span>
            </p>
            
        </div>
    )
}