import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CompanyTestimony } from "@/components/CompanyTestimony";
import { ProductLandingPage } from "@/components/ProductLanding";
import { FAQ } from "@/components/FAQ";
import { Testimony } from "@/components/Testimony";
import { Footer } from "@/components/Footer";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import InterfaceHand from "/public/images/assets/InterfaceHand.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>MoneyTree - Grow Your Wealth The Modern Finance Platform.</title>
        <link rel="icon" href="/images/Head.ico" />
      </Head>
      <div>
        <Navbar />
        <Hero />
        <CompanyTestimony />
        <ProductLandingPage />
        <FAQ />
        <Testimony />
        {/* CTA Teams Section */}
        <section className="bg-custom-black p-14 flex flex-col lg:flex-row items-center justify-center">
          {/* Image Section */}
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8 flex items-center">
            <Image
              src={InterfaceHand}
              alt="Team Behind the Vision"
              className="rounded-lg drop-shadow-xl w-full max-w-xl"
              width={600}
              height={400}
            />
          </div>
          {/* Text Section */}
          <div className="max-w-md text-center flex items-center">
            <div>
              <h1 className="text-3xl font-normal text-white mb-4">
                Meet the{" "}
                <span className="text-custom-light-green">
                  Team Behind the Vision
                </span>
              </h1>
              <p className="text-gray-300 text-sm mb-2">
                Behind every innovation is a dedicated team. Get to know the
                people shaping the future of personal finance and discover what
                drives our mission to help you achieve financial freedom.
              </p>
              <p className="text-gray-300 text-sm">
                Learn more about our journey, values, and the culture that fuels
                our passion. Click below to explore our company profile and see
                how we&apos;re making a difference.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                <Link
                  href="/Company"
                  className="flex items-center justify-center px-6 py-3 bg-custom-light-green text-black rounded-md hover:bg-custom-green hover:text-white transition duration-300 text-center"
                >
                  Meet the Team{" "}
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}