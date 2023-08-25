import React from "react";

const Trending = () => {
  return (
    <section className="flex-col relative">
      <section id="food" className="flex min-h-[50vh]">
        <div data-aos="fade-right" className="flex-1">
          <div className="flex flex-col flex-1 justify-center gap-8 font-serif px-8 pt-24 pb-24">
            <p className="opacity-50">What's Trending</p>
            <h2 className="text-6xl font-bold">Japanese Sushi</h2>
            <p className="opacity-70">
              Feel the taste of the most delicious sushi here
            </p>
            <ul className="list-none flex flex-wrap gap-5">
              <li className="flex-1 min-w-[200px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p className="opacity-80">Make Sushi</p>
                </div>
              </li>
              <li className="flex-1 min-w-[200px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p>Oshizushi</p>
                </div>
              </li>
              <li className="flex-1 min-w-[200px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p>Uramaki Sushi</p>
                </div>
              </li>
              <li className="flex-1 min-w-[200px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p>Nigiri Sushi</p>
                </div>
              </li>
              <li className="flex-1 min-w-[200px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p>Temaki Sushi</p>
                </div>
              </li>
              <li className="flex-1 min-w-[150px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p>Inari Sushi</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 bg-white flex items-center justify-center ">
          <div className="bg-image-trending-food trending-img">
            <img
              data-aos="fade-left"
              className="w-[200px]"
              src="../../assets/sushi-5.png"
              alt="sushi-5"
            />
          </div>
        </div>
      </section>

      <div
        // data-aos="zoom-in"
        className="absolute w-40 h-40 flex items-center justify-center text-2xl top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary text-white"
      >
        Discover
      </div>

      <section id="drink" className="flex flex-row-reverse min-h-[50vh]">
        <div className="flex-1">
          <div
            data-aos="fade-left"
            className="flex flex-col flex-1 justify-center gap-8 font-serif pl-16 pr-8 pt-24 pb-12"
          >
            <p className="opacity-50">What's Trending</p>
            <h2 className="text-6xl font-bold">Japanese Drinks</h2>
            <p className="opacity-70">
              Feel the taste of the most delicious drinks here
            </p>
            <ul className="list-none flex flex-wrap gap-5">
              <li className="flex-1 min-w-[200px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p className="opacity-80">Oruncha</p>
                </div>
              </li>
              <li className="flex-1 min-w-[200px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p>Ofukucha</p>
                </div>
              </li>
              <li className="flex-1 min-w-[200px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p>Sakura Tea</p>
                </div>
              </li>
              <li className="flex-1 min-w-[200px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p>Kombu-cha</p>
                </div>
              </li>
              <li className="flex-1 min-w-[200px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p>Aojiru</p>
                </div>
              </li>
              <li className="flex-1 min-w-[150px]">
                <div className="flex gap-2">
                  <img
                    className="check-img"
                    src="../../assets/check.svg"
                    alt=""
                  />
                  <p>Mugicha</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 bg-white flex items-center justify-center">
          <div className="bg-image-trending-drink trending-img">
            <img
              data-aos="fade-right"
              className="w-[200px]"
              src="../../assets/sushi-4.png"
              alt="sushi-5"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Trending;
