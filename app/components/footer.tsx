import chrome from "app/assets/image2vector.svg"

export default function Footer() {
    return (
        <div className="hidden md:flex flex-row justify-center-safe items-center-safe gap-2">
            *Sila gunakan Browser Chrome
            <img src={chrome} className="size-4"/>
            untuk dapatkan paparan terbaik
        </div>
    )
}