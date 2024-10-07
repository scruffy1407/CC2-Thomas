import React from "react";
import { Tab } from "@headlessui/react";
import { ProductCardPersonal } from "./card/ProductCard";
import { ProductCardBusiness } from "./card/ProductCard";
import { UserIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export function ProductLandingPage() {
  return (
    <section className="bg-white relative pt-5 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Hoverable Section */}
        <div className="w-auto mb-5 px-4 lg:px-12 flex justify-center justify-items-center lg:justify-start">
          <div className="w-full bg-custom-super-light-green p-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            <p className="text-base font-normal lg:text-base text-gray-600">
              Features 🪄
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-2/3 text-center px-6 lg:px-12">
          <h1 className="text-4xl lg:text-4xl font-normal text-gray-900 mb-4">
            All your{" "}
            <span className="text-custom-dark-green">
              finances
            </span>{" "}
            needs
            <br /> on one smart platform
          </h1>
          <p className="text-base text-gray-700 mb-8">
            Personal or business? MoneyTree matches your needs, so you can start
            small and scale up.
          </p>
        </div>

        {/* Tab Component */}
        <Tab.Group>
          <div className="border border-slate-300 bg-white rounded-lg p-1.5 w-10/12 mx-auto max-md:w-11/12 max-md:space-x-2 max-sm:w-11/12 max-sm:space-x-2">
            <Tab.List className="flex justify-center items-center space-x-1 w-full">
              <Tab
                className={({ selected }) =>
                  `flex-1 py-2 text-center rounded-md focus:outline-none transition duration-200 ease-in-out inline-flex items-center justify-center space-x-2 ${
                    selected
                      ? "bg-custom-light-green text-black"
                      : "bg-white text-gray-600 hover:bg-custom-dark-green hover:text-white"
                  }`
                }
              >
                <UserIcon className="w-5 h-5 hidden sm:inline" />
                <span>Personal</span>
              </Tab>
              <Tab
                className={({ selected }) =>
                  `flex-1 py-2 text-center rounded-md focus:outline-none transition duration-200 ease-in-out inline-flex items-center justify-center space-x-2 ${
                    selected
                      ? "bg-custom-light-green text-black"
                      : "bg-white text-gray-600 hover:bg-custom-dark-green hover:text-white"
                  }`
                }
              >
                <UserGroupIcon className="w-5 h-5 hidden sm:inline" />
                <span>Business Enterprise</span>
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels className="mt-8 mb-8">
            <Tab.Panel>
              {/* First Tab - Personal Card */}
              <ProductCardPersonal />
            </Tab.Panel>
            <Tab.Panel>
              {/* Second Tab - Business/Enterprise Card */}
              <ProductCardBusiness />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}

export default ProductLandingPage;
