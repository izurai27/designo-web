import Image from "next/image";
import IconBrand from "./icon";

const Footer = () => {
    return(
        <div className="bg-black w-full mt-72">
            <div className=" rounded-lg bg-salmon w-11/12 mx-auto flex flex-col items-center py-16 px-6 gap-8 -mt-48">
                <h2 className="text-white text-4xl text-center ">Let's talk about your project</h2>
                <p className="text-white text-base text-center">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                <button className="bg-white rounded-md w-40 p-4 cursor-pointer">GET IN TOUCH</button>
            </div>
            <div className="w-11/12 mx-auto flex flex-col gap-8 py-14">
                <Image
                    src="/images/logo-light.png"
                    width = {202}
                    height = {27}
                    className="mx-auto"
                    alt = "logo"
                />
                <hr />
                <ul className="text-white text-center flex flex-col gap-5 text-sm">
                    <li>OUR COMPANY</li>
                    <li>LOCATIONS</li>
                    <li>CONTACT</li>
                </ul>
                <div className="text-white text-center text-base">
                    <p className="font-bold">Designo Central Office</p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="text-white text-center text-base">
                    <p className="font-bold">Contact Us (Central Office)</p>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </div>
                <div className="flex gap-3 mx-auto">
                    {/* <IconBrand src="/images/facebook.png"/>
                    <IconBrand src="/images/youtube.png"/>
                    <IconBrand src="/images/twitter.png"/>
                    <IconBrand src="/images/pinterest.png"/>
                    <IconBrand src="/images/instagram.png"/> */}
                    bla
                </div>
            </div>
        </div>
    )
}
export default Footer;