import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { TeamCards } from "../../components/card/TeamCards";

function Company() {
  return (
    <>
      <Head>
        <title>Company Information - MoneyTree</title>
        <link rel="icon" href="/images/Head.ico" />
      </Head>
      <div>
        <Navbar />

        {/* Hoverable Section */}
        <div className="w-fit mb-5 mx-auto flex justify-center relative z-0 pt-2">
          <div className="w-full bg-custom-super-light-green p-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            <p className="text-sm lg:text-base text-gray-600 text-center">
              Get to know MoneyTree Better 💚
            </p>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h1 className="text-5xl font-bold text-center mb-2 text-black">
            About Us 🏢
          </h1>

          <div className="w-11/12 sm:w-8/12 mx-auto text-xl text-center mt-2 mb-5 p-4 rounded-lg">
            <p className="text-black">
              At <span className="text-green-600">MoneyTree</span>, we make
              personal finance simple and accessible. Join us in transforming
              how you manage your money, achieve your goals, and embrace
              financial freedom!
            </p>
          </div>

          {/* Company History Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-custom-dark-green">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Our Story
            </h2>
            <p className="text-gray-700">
              Established in 2024,{" "}
              <span className="text-green-600">MoneyTree</span> set out on a
              mission to revolutionize personal finance management. With
              innovative tools tailored for individuals and small businesses, we
              empower our users to master their financial journey. Our features,
              from real-time expense tracking to insightful budgeting and
              investment management, are designed to simplify your financial
              decisions and inspire confidence.
            </p>
          </section>

          {/* Team Section */}
          <TeamCards />

          {/* Culture Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-custom-dark-green">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Culture & Values
            </h2>
            <p className="text-gray-700">
              At MoneyTree, we foster a culture of innovation, inclusivity, and
              support. `Our `collaborative environment encourages continuous
              learning and a commitment to making financial management
              accessible for all. We value transparency, integrity, and a
              customer-first mindset in every interaction.
            </p>
            <p className="text-gray-700 mt-4">
              From team-building initiatives to our open-door policy, we create
              a workplace that values every voice and inspires creative
              solutions. Happy employees lead to happy customers, and that’s at
              the heart of what we do.
            </p>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              
              {/* Vision Card */}
              <div className="bg-black p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <h3 className="font-bold text-custom-light-green text-xl">Our Vision</h3>
                <p className="text-white mt-2">
                  To be the leading personal finance platform that empowers
                  individuals and businesses to achieve financial freedom
                  through innovative tools and education.
                </p>
              </div>
              
              {/* Mission Card */}
              <div className="bg-black p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <h3 className="font-bold text-custom-light-green text-xl">Our Mission</h3>
                <p className="text-white mt-2">
                  To simplify personal finance management by providing
                  user-friendly tools, insightful resources, and exceptional
                  support that inspire confidence in every financial decision.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Company;
