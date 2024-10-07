import { useEffect, useState } from "react";
import { getAllEntries } from "@/utils/api";

export function Testimony() {
  const [entry, setEntries] = useState<any>();

  async function fetchAllEntries() {
    try {
      const data = await getAllEntries({
        spaceId: "5t46nvm4qsqo",
        enviromentId: "master",
      });
      setEntries(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllEntries();
  }, []);

  return (
    <div className="w-full bg-white flex flex-col items-center justify-center py-8">
      {/* Hoverable Button */}
      <div className="w-auto mb-5 px-4 lg:px-12 flex justify-center justify-items-center lg:justify-start">
        <div className="w-full bg-custom-super-light-green p-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
          <p className="text-base font-normal lg:text-base text-black">
            Testimony 📝
          </p>
        </div>
      </div>

      {/* Title Section */}
      <div className="w-full flex flex-col items-center justify-center mb-8 text-center">
        <h1 className="text-black text-3xl lg:text-4xl font-normal tracking-tight px-5 lg:px-0">
          Start your journey. Join the{" "}
          <span className="text-custom-green">movement</span>.
        </h1>
        <p className="text-black text-normal mt-3 px-5 lg:px-0">
          MoneyTree is creating the future of business banking and
          finances, and we'd love you to join us.
        </p>
      </div>

      {/* Carousel Testimony */}
      <div className="w-full h-auto flex items-center justify-center overflow-hidden">
        <div
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5"
          style={{ height: "500px" }}
        >
          {entry &&
            entry?.items?.map((testimony: any, key: number) => {
              const imageUrl = entry.includes.Asset.find(
                (asset: any) =>
                  asset.sys.id === testimony?.fields?.image?.sys.id
              )?.fields?.file?.url;

              return (
                <div
                  key={key}
                  className="min-w-[300px] max-w-[300px] h-[450px] bg-custom-black rounded-2xl p-5 flex flex-col items-center space-y-5 shadow-md snap-center transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={`https:${imageUrl}`}
                    alt={testimony?.fields?.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <p className="text-white text-center flex-grow">
                    {testimony?.fields?.description}
                  </p>

                  <div className="mt-auto text-center">
                    <h2 className="text-white font-semibold text-lg">
                      {testimony?.fields?.name}
                    </h2>
                    <h3 className="text-custom-light-green font-normal">
                      {testimony?.fields?.work}
                    </h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Testimony;
