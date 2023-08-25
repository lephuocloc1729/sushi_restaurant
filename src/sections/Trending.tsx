import React from "react";

const Trending = () => {
  return (
    <section id="food">
      <div className="flex flex-col justify-center gap-8 font-serif px-8 py-8 max-w-[550px]">
        <p className="opacity-50">What's Trending</p>
        <h2 className="text-6xl font-bold">Japanese Sushi</h2>
        <p className="opacity-70">
          Feel the taste of the most delicious sushi here
        </p>
        <ul className="list-none flex flex-wrap gap-5">
          <li>
            <div className="flex gap-2">
              <img className="check-img" src="../../assets/check.svg" alt="" />
              <p className="opacity-80">Make Sushi</p>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <img className="check-img" src="../../assets/check.svg" alt="" />
              <p>Oshizushi</p>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <img className="check-img" src="../../assets/check.svg" alt="" />
              <p>Uramaki Sushi</p>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <img className="check-img" src="../../assets/check.svg" alt="" />
              <p>Nigiri Sushi</p>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <img className="check-img" src="../../assets/check.svg" alt="" />
              <p>Temaki Sushi</p>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <img className="check-img" src="../../assets/check.svg" alt="" />
              <p>Inari Sushi</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <img src="../../assets/sushi-5.png" alt="sushi-5" />
        <div>
          <img src="../../assets/arrow-vertical.svg" alt="" />
        </div>
        <div>
          <img src="../../assets/arrow-horizontal.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Trending;
