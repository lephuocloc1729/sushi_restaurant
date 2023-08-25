const Navbar = () => {
  return (
    <nav className="flex items-center bg-primary lg:bg-transparent">
      <a
        className="text-4xl font-bold lg:bg-primary flex-1 py-2 pl-5"
        href="#hero"
      >
        <h4 data-aos="fade-down" className="text-white">
          Sushiman
        </h4>
      </a>
      <ul
        data-aos="fade-down"
        className="lg:flex flex-[1.3] text-secondary justify-end gap-16 hidden pr-6"
      >
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#food">Food</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <img src="../../assets/search.svg" alt="search icon" />
        </li>
      </ul>
      {/* menu for mobile devices */}
      <ul data-aos="fade-down" className="lg:hidden">
        <li>
          <img src="../../assets/menu.svg" alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
