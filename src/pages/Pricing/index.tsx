import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Image from "next/image";
import AndroidIcon from "/public/images/socials/Android.svg";
import AppleIcon from "/public/images/socials/Apple.svg";

function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - MoneyTree</title>
        <link rel="icon" href="/images/Head.ico" />
      </Head>
      <div>
        <Navbar />
        <section className="flex flex-col items-center pb-10">
          {/* Hoverable Section */}
          <div className="w-fit mb-5 mx-auto flex justify-center relative z-0 pt-2">
            <div className="w-full bg-custom-super-light-green p-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              <p className="text-sm lg:text-base text-gray-600 text-center">
                Your plan, your choice 🛒
              </p>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-center mb-2 text-black">
            Pricing 🔖
          </h1>

          <div className="w-11/12 sm:w-8/12 mx-auto text-xl text-center mt-2 mb-5 p-4 rounded-lg">
            <div className="text-justify">
              <p className="text-black text-center">
                At <span className="text-green-600">MoneyTree</span>, we empower
                you to take control of your finances with flexible plans tailored
                to your needs. Whether you're starting your financial journey or
                seeking advanced tools, we have the perfect plan for you. Explore
                our options and choose your path to financial freedom!
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="w-full max-w-6xl px-4">
            <div className="bg-black p-8 rounded-2xl shadow-lg overflow-x-auto">
              <table className="min-w-full table-auto bg-black rounded-2xl">
                <thead>
                  <tr className="bg-white bg-opacity-15 text-white py-4 px-4">
                    <th className="py-4 px-4 rounded-l-2xl">Subscription</th>
                    <th className="py-4 px-4">
                      <div className="border-2 border-blue-500 rounded-lg p-2 transition-transform transform hover:scale-110">
                        Seed Plan 🌱
                      </div>
                    </th>
                    <th className="py-4 px-4">
                      <div className="border-2 border-yellow-400 rounded-lg p-2 transition-transform transform hover:scale-110">
                        Sprout Plan 🌿
                      </div>
                    </th>
                    <th className="py-4 px-4">
                      <div className="border-2 border-purple-300 rounded-lg p-2 transition-transform transform hover:scale-110">
                        Bloom Plan 🌸
                      </div>
                    </th>
                    <th className="py-4 px-4 rounded-r-2xl">
                      <div className="border-2 border-custom-green rounded-lg p-2 transition-transform transform hover:scale-110">
                        Forest Plan 🌳
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-white">
                  <tr>
                    <td className="py-4 px-4">Access features</td>
                    <td className="py-4 px-4">
                      Expense Tracker, Budget Planner
                    </td>
                    <td className="py-4 px-4">
                      All Seed Plan features + Portfolio Manager
                    </td>
                    <td className="py-4 px-4">
                      All Sprout Plan features + Multi-Account Support
                    </td>
                    <td className="py-4 px-4">
                      All Bloom Plan features + Invoicing & Tax Report
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Usage</td>
                    <td className="py-4 px-4">
                      One savings goal, basic reports, ads
                    </td>
                    <td className="py-4 px-4">Unlimited goals, ad-free</td>
                    <td className="py-4 px-4">
                      Advanced reports, priority support
                    </td>
                    <td className="py-4 px-4">
                      Business tools, customizable reports
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Plan Type</td>
                    <td className="py-4 px-4">Normal</td>
                    <td className="py-4 px-4">Basic</td>
                    <td className="py-4 px-4">Premium</td>
                    <td className="py-4 px-4">Pro & Business</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Benefits</td>
                    <td className="py-4 px-4">
                      Essential tools for beginners.
                    </td>
                    <td className="py-4 px-4">
                      Enhanced features for growing users.
                    </td>
                    <td className="py-4 px-4">
                      Comprehensive solutions for advanced users.
                    </td>
                    <td className="py-4 px-4">
                      Tailored strategies for professionals and businesses.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Monthly Cost</td>
                    <td className="py-4 px-4 text-center font-semibold text-lg">
                      Free
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-lg">
                      Rp. 49,000
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-lg">
                      Rp. 149,000
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-lg">
                      Rp. 299,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Download Now Section */}
            <div className="flex justify-center mt-8">
              <div className="bg-black p-6 rounded-2xl shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold text-center text-custom-light-green mb-4">
                  Try it right now!
                </h2>
                <p className="text-center text-white mb-6">
                  Download the MoneyTree app on the App Store and Google Play to
                  take control of your finances today!
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-custom-super-light-green text-black px-6 py-2 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
                  >
                    <Image
                      src={AndroidIcon}
                      alt="Google Play"
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    Android
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-custom-super-light-green text-black px-6 py-2 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
                  >
                    <Image
                      src={AppleIcon}
                      alt="App Store"
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    iOS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Pricing;