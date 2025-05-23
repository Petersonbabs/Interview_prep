import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
    return (
        <div>
            <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.svg" alt="logo" width={38} height={32} />
                <h2 className="text-primary-100">PrepBuddy</h2>
            </Link>
        </div>
    )
}

export default Navbar
