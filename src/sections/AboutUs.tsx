const AboutUs = () => {
  return (
    <section id="about-us" className="flex">
      <div className="flex-1 flex flex-col items-end gap-2 relative">
        <div className="bg-white bg-center bg-no-repeat bg-contain bg-image-1 px-16 py-16">
          <img className="w-1/2" src="../../assets/sushi-3.png" alt="" />
        </div>
        <button className="px-6 py-2 rounded-full-left bg-secondary text-white absolute top-1/2">
          Learn More
        </button>
        <div className="bg-white bg-center bg-no-repeat bg-contain bg-image-2 px-16 py-16">
          <img className="w-1/2" src="../../assets/sushi-2.png" alt="" />
        </div>
      </div>

      <div className="flex-[1.3]">
        <div className="flex flex-col justify-center gap-8 font-serif px-8 py-8 max-w-[550px]">
          <div>
            <p className="opacity-70">About Us</p>
          </div>
          <div>
            <h2 className="text-6xl text">
              Our mission is to bring true Japanese flavours to you.
            </h2>
          </div>
          <div>
            <p>
              We will continue to provide the experience of Omotenashi, the
              Japanese mindset of hospitality, with our shopping and dining for
              our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
