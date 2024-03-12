import Image from "next/image";
const Footer = () => {
    return(
        <div className="bg-black w-full mt-72">
            <div className=" rounded-lg bg-salmon w-11/12 mx-auto flex flex-col items-center py-16 px-6 gap-8 -mt-48">
                <h2 className="text-white text-4xl text-center ">Let's talk about your project</h2>
                <p className="text-white text-base text-center">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                <button className="bg-white rounded-md w-40 p-4">GET IN TOUCH</button>
            </div>
            <div>
            <Image
                src="/images/logo-light.png"
                width = {202}
                height = {27}
                // className="h-6.75  block dark:hidden"
                alt = "logo"
            />
            </div>
        </div>
    )
}
export default Footer;