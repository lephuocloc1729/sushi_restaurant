const PopularFood = () => {
  return (
    <section
      id="menu"
      className="bg-primary text-white flex flex-col items-center gap-8 py-8 min-h-screen"
    >
      <h2 className="text-5xl font-bold font-serif">Popular Food</h2>
      <div className="flex gap-4">
        <button className="filter-btn">All</button>
        <button className="filter-btn-with-img">
          <img className="w-8" src="../../assets/sushi-9.png" alt="" />
          Sushi
        </button>
        <button className="filter-btn-with-img">
          <img className="w-8" src="../../assets/sushi-8.png" alt="" />
          Ramen
        </button>
        <button className="filter-btn-with-img">
          {" "}
          <img className="w-8" src="../../assets/sushi-7.png" alt="" />
          Udon
        </button>
        <button className="filter-btn-with-img">
          {" "}
          <img className="w-8" src="../../assets/sushi-6.png" alt="" />
          Danggo
        </button>
        <button className="filter-btn">Others</button>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <button className="flex items-center justify-center gap-4 bg-black py-3 px-6 rounded-full">
          Explore Foods{" "}
          <img className="w-4" src="../../assets/arrow-right.svg" alt="" />
        </button>
      </div>
    </section>
  );
};

export default PopularFood;
