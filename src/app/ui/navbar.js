import Image from "next/image"


export default function Navbar (){
    return(
        <div className="flex flex-row justify-between h-6.75 px-6 py-9 ">
            {/* <Image
                src="/images/logo-light.png"
                width = {202}
                height = {27}
                className=" hidden dark:block"
                alt = "logo"
            /> */}
            <Image
                src="/images/logo-dark.png"
                width = {202}
                height = {27}
                // className="h-6.75  block dark:hidden"
                alt = "logo"
            />
            <Image
                src="/images/icon-hamburger.svg"
                width = {24}
                height = {20}
                alt = "logo"
                className="h-auto"
            />
            
        </div>
    )
}