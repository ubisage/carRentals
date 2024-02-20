import Link from "next/link"
import styles from "./footer.module.css"
import FacebookIcon from "@/public/GeneralIcons/Facebook";
import InstagramIcon from "@/public/GeneralIcons/InstagramIcon";
import TwitterIcon from "@/public/GeneralIcons/TwitterIcon";
import GithubIcon from "@/public/GeneralIcons/GithubIcon";
import DribbleIcon from "@/public/GeneralIcons/DribbleIcon";

const Footer = () => {
  return (
    <section className="light:bg-white">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2 transition duration-[3000]">
            <div className="px-5 py-2">
                <Link href={'/'} className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:hover:text-white transition duration-[3000]">
                    Homepage
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href={'/about'} className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    About Us
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href={'/contact'} className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    Contact
                </Link>
            </div>
            {/* <div className="px-5 py-2">
                <Link href={'/'} className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    Pricing
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href={'/'} className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    Contact
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href={'/'} className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    Terms
                </Link>
            </div> */}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
            <Link href={'/'} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <FacebookIcon/>
            </Link>
            <Link href={'/'} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <InstagramIcon/>
            </Link>
            <Link href={'/'} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <TwitterIcon/>
            </Link>
            <Link href={'/'} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <GithubIcon/>
            </Link>
            <Link href={'/'} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Dribbble</span>
                <DribbleIcon/>
            </Link>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 Car Rentals, Jammu and Kashmir. All rights reserved.
        </p>
    </div>
</section>
  );
};

export default Footer;