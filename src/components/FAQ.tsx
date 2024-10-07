import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import PhoneMockup from "/public/images/faq/PhoneMockup.webp";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Q&A Section
const faqs = [
  {
    title: "What features does MoneyTree offer?",
    answer:
      "MoneyTree offers a suite of features for effective financial management, including an expense tracker, budget planner, and investment portfolio manager. You can also set savings goals and receive personalized financial tips to boost your financial literacy.",
  },
  {
    title: "How do I get started with MoneyTree?",
    answer:
      "To get started, simply sign up for a free account on our website or app. After registration, you'll access basic features and a guided onboarding process to set up your expense tracker and budget planner.",
  },
  {
    title: "What are the different subscription plans available on MoneyTree?",
    answer:
      "MoneyTree offers a free plan with essential features, a Basic Plan (Sprout) for $5/month with advanced tools, a Premium Plan (Bloom) with multi-account support, and a Pro Plan (Tree) for personalized financial coaching.",
  },
  {
    title: "How does MoneyTree ensure the security of my data?",
    answer:
      "MoneyTree prioritizes security with industry-standard encryption for data protection, strict privacy policies, continuous monitoring for threats, and encourages two-factor authentication to ensure your financial information remains safe.",
  },
];

export function FAQ() {
  return (
    <>
    <div className="bg-slate-100">
    {/* Hoverable Section */}
      <div className="w-full flex justify-center items-center pt-8">
        <div className="w-auto px-4 lg:px-12">
          <div className="w-full bg-custom-super-light-green p-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            <p className="text-base font-normal lg:text-base text-gray-600 text-center">
              Frequently Asked Questions 💬
            </p>
          </div>
        </div>
      </div>
    
    {/* Image Component */}
    <div className="flex flex-col md:flex-row items-center justify-center pb-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-96 h-[500px]">
          <Image
            src={PhoneMockup}
            alt="Phone Mockup"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Disclosure Component */}
      <div className="w-full md:w-1/2 px-4 md:px-12 mt-8 md:mt-0">
        <h2 className="text-3xl font-semibold mb-4 max-sm:text-center py-5">
          Frequently Asked Questions about <span className="text-custom-green">Money</span>Tree
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex justify-center items-center w-full rounded-lg border border-white bg-custom-light-green px-4 py-4 text-left text-sm font-medium transition-all duration-200 ease-in-out ${
                      open
                        ? "bg-custom-light-green text-black"
                        : "text-black hover:bg-custom-dark-green hover:text-white"
                    }`}
                  >
                    <span className="flex-grow text-left">{faq.title}</span>
                    <ChevronDownIcon
                      className={`w-5 h-5 transform transition-transform ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`mt-2 p-4 border border-gray-300 rounded-lg text-sm text-black transition-all duration-200 ease-in-out ${
                      open ? "opacity-100" : "opacity-0 max-h-0"
                    }`}
                  >
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  </div>
  </>);
}
    

export default FAQ;
