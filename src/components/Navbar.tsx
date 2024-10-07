import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Fade } from "react-awesome-reveal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex justify-center w-full z-30 md:justify-start max-md:pl-5">
            <a href="/" className="flex items-center">
              <img
                src="/images/MainLogo.svg"
                alt="MoneyTree Logo"
                className="h-7 w-7 mr-2"
              />
              <span className="text-2xl font-extrabold">
                <span className="text-green-600">Money</span>
                <span className="text-black">Tree</span>
              </span>
            </a>
          </div>

          {/* Navbar Links for larger screens */}
          <div className="hidden md:flex justify-center w-full z-40">
            <div className="flex space-x-4">
              <a href="/" className="text-green-600 font-extrabold px-3 py-2 rounded-md text-sm">Home</a>
              <a href="/Products" className="text-black hover:text-green-600 px-3 py-2 rounded-md text-sm font-bold">Products</a>
              <a href="/Pricing" className="text-black hover:text-green-600 px-3 py-2 rounded-md text-sm font-bold">Pricing</a>

              {/* Popover for About Us */}
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <PopoverButton
                      className={`flex items-center gap-2 text-black px-3 py-2 rounded-md text-sm font-bold ${open ? 'text-green-600' : 'hover:text-green-600'}`}
                    >
                      About
                      <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                    </PopoverButton>
                    <PopoverPanel className="absolute right-0 z-50 mt-2 w-48 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5">
                      <a href="/Company" className="block px-4 py-2 text-sm text-black hover:bg-green-600 hover:text-white">Company Overview</a>
                      <a href="/Teams" className="block px-4 py-2 text-sm text-black hover:bg-green-600 hover:text-white">Team Member</a>
                    </PopoverPanel>
                  </>
                )}
              </Popover>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="-mr-2 flex md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-green-600 focus:outline-none"
            >
              <span className="sr-only">Open Navigation Bar</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <Fade cascade damping={0.1}>
          <div className="flex flex-col md:hidden px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="text-green-600 font-semibold block px-3 py-2 rounded-md text-base text-center">Home</a>
            <a href="/Products" className="text-black hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium text-center">Products</a>
            <a href="/Pricing" className="text-black hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium text-center">Pricing</a>
            <a href="/Company" className="text-black hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium text-center">About Us</a>
          </div>
        </Fade>
      )}
    </nav>
  );
}

export default Navbar;  
