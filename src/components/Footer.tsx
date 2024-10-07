import Image from "next/image";
import Link from "next/link";
import FacebookSocials from "/public/images/socials/Facebook.svg";
import InstagramSocials from "/public/images/socials/Instagram.svg";
import LinkedinSocials from "/public/images/socials/Linkedin.svg";
import TwitterSocials from "/public/images/socials/Twitter.svg";
import YoutubeSocials from "/public/images/socials/Youtube.svg";
import AndroidIcon from "/public/images/socials/Android.svg";
import AppleIcon from "/public/images/socials/Apple.svg";


export function Footer() {
  return (
    <footer className="bg-white border-t border-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Information */}
          <div className="space-y-4">
            <Image
              src="/images/MainLogo.svg"
              alt="MoneyTree Logo"
              className="h-10 w-auto transform transition-transform duration-200 hover:scale-110 active:scale-95"
              width={100}
              height={40}
            />
            <p className="text-gray-600 text-sm">
              MoneyTree is your go-to platform for managing personal finances, budgeting, and financial planning. Get expert tips and track your financial goals with ease.
            </p>
          </div>
          
          {/* Quick Links to Nav */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">Quick Links</h3>
            <ul className="text-black text-sm space-y-2">
              <li>
                <Link href="/" className="hover:text-custom-green">Home</Link>
              </li>
              <li>
                <Link href="/Products" className="hover:text-custom-green">Products</Link>
              </li>
              <li>
                <Link href="/Pricing" className="hover:text-custom-green">Pricing</Link>
              </li>
              <li>
                <Link href="/Company" className="hover:text-custom-green">About</Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-black">Follow Us</h3>
            <div className="flex space-x-5">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-custom-green hover:scale-110 active:scale-95">
                <Image src={FacebookSocials} alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 active:scale-95">
                <Image src={InstagramSocials} alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 active:scale-95">
                <Image src={TwitterSocials} alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 active:scale-95">
                <Image src={YoutubeSocials} alt="Youtube" width={24} height={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 active:scale-95">
                <Image src={LinkedinSocials} alt="Linkedin" width={24} height={24} />
              </Link>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 pt-5 space-y-2 md:space-y-0 md:space-x-2">
              <Link
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full md:w-1/2 px-4 py-2 bg-custom-super-light-green text-black rounded-md hover:scale-105 active:scale-95"
              >
                <Image src={AndroidIcon} alt="Download for Android" width={16} height={16} className="mr-2" />
                Android
              </Link>
              <Link
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full md:w-1/2 px-4 py-2 bg-custom-super-light-green text-black rounded-md hover:scale-105 active:scale-95"
              >
                <Image src={AppleIcon} alt="Download for Apple iOS" width={16} height={16} className="mr-2" />
                iOS
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-black text-center text-sm">
          <p>&copy; 2024 MoneyTree. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
