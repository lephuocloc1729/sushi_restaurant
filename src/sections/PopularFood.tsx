const PopularFood = () => {
  return (
    <section
      id="menu"
      className="bg-primary text-white flex flex-col items-center gap-8 py-8 min-h-[50vh]"
    >
      <h2 data-aos="flip-down" className="text-5xl font-bold font-serif">
        Popular Food
      </h2>
      <div className="flex gap-4">
        <button data-aos="zoom-in" className="filter-btn">
          All
        </button>
        <button data-aos="zoom-in" className="filter-btn-with-img">
          <img className="w-8" src="../../assets/sushi-9.png" alt="" />
          Sushi
        </button>
        <button data-aos="zoom-in" className="filter-btn-with-img">
          <img className="w-8" src="../../assets/sushi-8.png" alt="" />
          Ramen
        </button>
        <button data-aos="zoom-in" className="filter-btn-with-img">
          {" "}
          <img className="w-8" src="../../assets/sushi-7.png" alt="" />
          Udon
        </button>
        <button data-aos="zoom-in" className="filter-btn-with-img">
          {" "}
          <img className="w-8" src="../../assets/sushi-6.png" alt="" />
          Danggo
        </button>
        <button data-aos="zoom-in" className="filter-btn">
          Others
        </button>
      </div>
      <div data-aos="fade-up" className="flex items-end justify-center gap-8">
        <article className="food-card-sm">
          <img className="w-20" src="../../assets/sushi-12.png" alt="" />
          <h4 className="text-lg font-serif font-bold">Chezu Sushi</h4>
          <div className="flex gap-4">
            <div className="flex gap-1">
              <img src="../../assets/star.svg" alt="star" />
              <span>4.9</span>
            </div>
            <p>$21.00</p>
          </div>
        </article>
        <article className="flex gap-8 flex-col justify-center items-center px-8 pb-6 pt-10 rounded-3xl bg-white text-primary">
          <img className="w-36" src="../../assets/sushi-11.png" alt="" />
          <h4 className="text-2xl font-bold font-serif">Original Sushi</h4>
          <div className="flex gap-6">
            <div className="flex gap-2">
              <img src="../../assets/star.svg" alt="star" />
              <span>4.7</span>
            </div>
            <p>$21.00</p>
          </div>
        </article>
        <article className="food-card-sm px-6">
          <img className="w-24" src="../../assets/sushi-10.png" alt="" />
          <h4 className="text-lg font-serif font-bold">Ramen Legando</h4>
          <div className="flex gap-4">
            <div className="flex gap-1">
              <img src="../../assets/star.svg" alt="star" />
              <span>4.5</span>
            </div>
            <p>$21.00</p>
          </div>
        </article>
      </div>
      <button
        data-aos="zoom-in"
        data-aos-duration="2500"
        className="flex items-center justify-center gap-4 bg-black py-3 px-6 rounded-full"
      >
        Explore Foods{" "}
        <img className="w-4" src="../../assets/arrow-right.svg" alt="" />
      </button>
    </section>
  );
};

export default PopularFood;
