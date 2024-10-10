import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ProductCardPersonalFull } from "../../components/card/ProductCardFull";
import { ProductCardBusinessFull } from "../../components/card/ProductCardFull";
import { UserIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import ManHero from "/public/images/assets/ManHero.webp";

function Products() {
  return (
    <>
      <Head>
        <title>Products - MoneyTree</title>
        <link rel="icon" href="/images/Head.ico" />
      </Head>
      <div className="h-full w-full">
        <Navbar />

        {/* Hoverable Section */}
        <div className="w-fit mb-5 mx-auto flex justify-center relative z-0 pt-10">
          <div className="w-full bg-custom-super-light-green p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            <p className="text-sm lg:text-base text-black text-center">
              Discover your perfect financial toolkit 🛠️
            </p>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 text-black">
          Our Products 🌳
        </h1>

        {/* Description Section */}
        <div className="w-11/12 sm:w-8/12 mx-auto text-center mt-2 p-6 rounded-lg">
          <div className="text-justify">
            <p className="text-lg lg:text-xl text-gray-700 text-center">
              At MoneyTree, we offer a range of powerful products designed to
              help you take control of your financial future. Whether you’re an
              individual looking to manage your personal budget or a business
              seeking advanced financial solutions, our products are built to
              meet your needs and help you grow.
            </p>
          </div>
        </div>

        {/* Personal Plan Section */}
        <section className="py-12 px-5 sm:px-10">
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-custom-dark-green">
            <div className="bg-white p-6 rounded-3xl mb-8 w-10/12 mx-auto flex justify-center items-center space-x-3">
              <UserIcon className="w-10 h-10 sm:w-8 sm:h-8 text-custom-dark-green" />
              <h2 className="text-3xl font-bold text-center text-custom-dark-green">
                Personal Finance Tools
              </h2>
            </div>
            <div className="space-y-6">
              <ProductCardPersonalFull />
            </div>
            <div className="w-full mt-12 px-4 lg:px-20">
              <h2 className="text-2xl font-bold text-center text-custom-dark-green mb-4">
                Unlock Your Financial Potential
              </h2>
              <p className="text-center text-gray-700 mb-6">
                Our suite of personal finance tools is designed to help you
                manage your money effectively, achieve your financial goals, and
                gain insights into your spending habits. Whether you&apos;re tracking
                expenses, setting savings goals, or investing for the future, we
                have the right solutions for you.
              </p>
              <p className="text-center text-gray-700">
                Join thousands of satisfied users who have transformed their
                financial lives. Sign up today and take control of your
                finances!
              </p>
            </div>
          </div>
        </section>

        {/* Visual Section */}
        <div className="w-full bg-custom-black py-16">
          <h3 className="text-2xl lg:text-3xl font-semibold text-center text-custom-light-green">
            Ready to take control of your finances?
          </h3>
          <p className="text-lg lg:text-xl text-center text-white mt-2">
            Whether you&apos;re managing personal finances or business operations, we
            have the tools you need.
          </p>
        </div>

        {/* Business Plan Section */}
        <section className="pt-12 pb-16 px-5 sm:px-10">
          <div className="bg-custom-black p-10 rounded-2xl shadow-lg border border-custom-dark-green">
            <div className="bg-custom-black p-6 rounded-3xl mb-8 w-10/12 mx-auto flex justify-center items-center space-x-3">
              <UserGroupIcon className="w-10 h-10 sm:w-8 sm:h-8 text-custom-light-green" />
              <h2 className="text-3xl font-bold text-center text-custom-light-green">
                Business & Enterprise Solutions
              </h2>
            </div>
            <div className="space-y-6">
              <ProductCardBusinessFull />
            </div>
            <div className="w-full mt-12 px-4 lg:px-20">
              <h2 className="text-2xl font-bold text-center text-custom-light-green mb-4">
                Transform Your Business Finances
              </h2>
              <p className="text-center text-gray-200 mb-6">
                Managing your business finances shouldn&apos;t be a chore. With our
                suite of tools, you can easily track expenses, handle invoicing,
                and gain insights into your financial health. Say goodbye to the
                complexities of financial management.
              </p>
              <p className="text-center text-gray-200">
                Join a community of thriving businesses and take your financial
                management to the next level. Start your journey towards better
                financial practices today!
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="w-full bg-custom-yellow pb-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:space-x-10">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center mb-6 lg:mb-0 lg:ml-10">
              <h2 className="text-3xl font-bold text-center text-black mb-4">
                Start Your Financial Journey Today
              </h2>
              <div className="flex justify-center items-center w-full md:w-full md:justify-center">
                <p className="text-gray-800 mb-6 text-center md:text-center md:w-3/4 sm:w-3/4">
                  Whether you&apos;re an individual or a business, our comprehensive
                  tools and solutions can help you succeed. Join MoneyTree now
                  and begin your financial journey.
                </p>
              </div>
              <div className="flex flex-col items-center mt-6">
                <Link href="/Pricing">
                  <div className="flex items-center justify-center px-6 py-3 bg-custom-light-green text-black rounded-md hover:bg-custom-green hover:text-white transition duration-300 text-center">
                    Discover Pricing  {" "}
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              </div>
            </div>
            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src={ManHero}
                alt="Financial Journey"
                className="rounded-lg drop-shadow-xl w-full max-w-xs"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Products;