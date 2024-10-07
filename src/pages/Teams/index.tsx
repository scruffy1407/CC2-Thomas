import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { TeamCardsFull } from "../../components/card/TeamCardsFull";
import WomanAsset from "/public/images/assets/WomanAsset1.webp";

function Teams() {
  return (
    <>
      <Head>
        <title>Teams - MoneyTree</title>
        <link rel="icon" href="/images/Head.ico" />
      </Head>
      <div>
        <Navbar />

        {/* Hoverable Section */}
        <div className="w-fit mb-5 mx-auto flex justify-center relative z-0 pt-2">
          <div className="w-full bg-custom-super-light-green p-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            <p className="text-sm lg:text-base text-black text-center">
              Get to know our dedicated team at MoneyTree 🙋
            </p>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h1 className="text-5xl font-bold text-center mb-2 text-black">
            Meet Our Team 👋
          </h1>

          <div className="w-11/12 sm:w-8/12 mx-auto text-xl text-center mt-2 mb-5 p-4 rounded-lg">
            <p className="text-black">
              At <span className="text-green-600">MoneyTree</span>, our team is
              passionate about making personal finance simple and accessible. We
              work collaboratively to transform how you manage your money,
              achieve your goals, and embrace financial freedom!
            </p>
          </div>

          {/* Our Values Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-custom-dark-green">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Our Team Culture
            </h2>
            <p className="text-gray-700 mb-2">
              At <span className="text-green-600">MoneyTree</span>, we believe
              that a strong, collaborative team is key to delivering the best
              financial solutions. Our culture is built on mutual respect,
              innovation, and a passion for helping others achieve financial
              freedom. We empower our team members to think creatively, take
              ownership of their work, and continuously grow in their careers.
              Together, we foster an inclusive environment where ideas flourish
              and success is shared by all.
            </p>
          </section>

          {/* Team Cards Full Section */}
          <section className="mt-8">
            <TeamCardsFull />
          </section>
        </main>

        {/* Hiring Section */}
        <section className="bg-custom-black p-14">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            {/* Image Section */}
            <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8 flex items-center">
              <Image
                src={WomanAsset}
                alt="Interested in Joining Our Team"
                className="rounded-lg drop-shadow-xl w-full max-w-xs lg:max-w-md"
                width={400}
                height={300}
              />
            </div>
            {/* Text Section */}
            <div className="max-w-md text-center">
              <h1 className="text-3xl font-normal text-center text-white mb-4">
                Interested in{" "}
                <span className="text-custom-light-green">Joining</span> Our Team?
              </h1>
              <p className="text-gray-300 text-sm mb-2">
                We&apos;re always looking for passionate individuals to help us grow.
                If you&apos;re interested in making a difference in personal finance,
                email us to explore opportunities!
              </p>
              <p className="text-gray-300 text-sm">
                Email us at:{" "}
                <a
                  href="mailto:careers@moneytree.com"
                  className="text-custom-light-green"
                >
                  careers@moneytree.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Teams;