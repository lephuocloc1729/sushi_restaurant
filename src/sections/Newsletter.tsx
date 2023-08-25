const Newsletter = () => {
  return (
    <section
      id="services"
      className="bg-primary text-white flex flex-col items-center justify-center gap-8 py-12"
    >
      <h2
        data-aos="flip-down"
        className="text-8xl text-center font-serif font-semibold leading-[120px]"
      >
        Get offers straight <br /> to your inbox
      </h2>
      <p data-aos="zoom-in" className="text-2xl">
        Sign up for Sushiman newsletter
      </p>
      <form
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="border-[1px] border-white-400 rounded-full px-4 py-4 flex justify-between items-center w-1/2"
      >
        <input
          type="mail"
          placeholder="Your email address"
          className="bg-transparent text-slate-100 outline-none placeholder-white-400 text-2xl"
          required
        />
        <button className="px-10 py-4 bg-secondary rounded-full text-2xl">
          Get started
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
