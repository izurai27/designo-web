import Image from "next/image"

export default function IconBrand ({src}) {
    return (
        <div >
            <Image
                    src={`${src}`}
                    width = {24}
                    height = {24}            
                    alt = "icon"
            />

        </div>
    )
}