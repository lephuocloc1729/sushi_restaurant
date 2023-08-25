import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="flex">
      <div className="flex-1 bg-primary min-section-height">
        <img
          data-aos="fade-right"
          className="min-w-[120%] object-contain"
          src="../../assets/sushi-1.png"
          alt="sushi"
        />
      </div>
      <div className="flex flex-[1.3] flex-col min-section-height">
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center flex-1 max-w-[550px] mx-auto gap-8 px-6"
        >
          <div className="text-7xl font-bold font-serif">
            <h1>Feel the taste of Japanese foods</h1>
          </div>
          <div className="text-xl text-slate-800">
            <p>
              Feel the taste of the most popular Japanese foods from anywhere
              and anytime
            </p>
          </div>
          <div className="flex gap-8 justify-center">
            <button className="bg-secondary px-8 text-white py-1 rounded-full">
              Order Now
            </button>
            <button className="flex items-center gap-2">
              <img className="w-10" src="../../assets/play-circle.svg" alt="" />
              <span>How to Order</span>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex justify-center gap-12 bg-white p-8"
        >
          <div className="flex-1">
            <h4 className="text-5xl font-serif font-bold">
              29<span className="font-">k+</span>
            </h4>
            <p className="text-slate-500 opacity-50">Happy Customers</p>
          </div>
          <div className="flex flex-[1.5] gap-4 items-center">
            <img className="w-10 h-10" src="../../assets/user.png" alt="" />
            <p className="text-slate-800 text-sm leading-8 opacity-70">
              This is the best Japanese food restaurant service that ever
              existed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
