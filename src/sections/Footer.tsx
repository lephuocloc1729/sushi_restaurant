const Footer = () => {
  return (
    <footer className="bg-white flex justify-between items-center py-6 px-8">
      <h3 data-aos="zoom-in" className="text-4xl font-serif">
        <span className="text-primary">Sushi</span>man
      </h3>
      <ul className="text-xl flex gap-12">
        <li data-aos="zoom-in">
          <a href="#menu">Menu</a>
        </li>
        <li data-aos="zoom-in">
          <a href="#food">Food</a>
        </li>
        <li data-aos="zoom-in">
          <a href="#services">Services</a>
        </li>
        <li data-aos="zoom-in">
          <a href="#about-us">About Us</a>
        </li>
      </ul>
      <ul className="flex gap-4 justify-center items-center">
        <li data-aos="zoom-in" className="bg-fb brand-logo">
          <a href="#">
            <img src="../../assets/facebook.svg" alt="facebook-logo" />
          </a>
        </li>
        <li data-aos="zoom-in" className="bg-insta brand-logo">
          <a href="#">
            <img src="../../assets/instagram.svg" alt="instagram-logo" />
          </a>
        </li>
        <li data-aos="zoom-in" className="bg-twitter brand-logo">
          <a href="#">
            <img src="../../assets/twitter.svg" alt="twitter-logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
