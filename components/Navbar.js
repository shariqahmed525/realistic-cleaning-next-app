import React, { useState, useRef, useEffect, forwardRef } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

const menus = [
  {
    text: "HOME",
    offset: 0,
    id: "home",
  },
  {
    text: "SERVICES",
    offset: -100,
    id: "services",
  },
  {
    text: "TESTIMONIALS",
    offset: -100,
    id: "testimonials",
  },
  {
    text: "FAQ",
    offset: -70,
    id: "faq",
  },
  {
    text: "CONTACT US",
    offset: -100,
    id: "contact-us",
  },
];

const ScrollableLink = ({ id, offset, text, onClick = () => {} }) => (
  <ScrollLink
    to={id}
    spy={true}
    smooth={true}
    duration={500}
    offset={offset}
    onClick={onClick}
    className="no-underline cursor-pointer"
  >
    {text}
  </ScrollLink>
);

const Navbar = forwardRef(() => {
  let navRef = useRef(null);
  let togglerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const checkWindowWidth = window.innerWidth > 786 ? 100 : 50;
        setScrolled(window.pageYOffset > checkWindowWidth);
      });
    }
  }, []);

  const _toggler = () => {
    navRef?.current?.classList?.toggle?.("show");
    togglerRef?.current?.classList?.toggle?.("change");
  };

  return (
    <Element name="home">
      <section
        id="fixed"
        style={{ zIndex: 1000 }}
        className={`
                 fixed top-0 px-5 sm:px-10 lg:px-14 xl:px-20 grid grid-cols-12 flex-row w-full transition-all duration-300 ease-in-out bg-white overflow-hidden ${
                   scrolled
                     ? "lg:bg-white py-3.5 custom-shadow"
                     : "py-5 lg:bg-transparent"
                 }
              `}
      >
        <div className="col-start-1 col-end-13 xl:col-start-2 xl:col-end-12 2xl:col-start-3 2xl:col-end-11 flex flex-col lg:flex-row lg:items-center justify-between">
          <div
            className={`flex flex-1 flex-row justify-between items-center ${
              scrolled ? "h-16" : "h-18"
            }`}
          >
            <img
              alt="logo"
              height="68"
              width="112"
              placeholder="blur"
              src={
                scrolled ? "/images/secondary-logo.webp" : "/images/logo.webp"
              }
              className={`w-20 sm:w-24 transition-all duration-300 ease-in-out ${
                scrolled ? "lg:w-20 xl:w-24" : "lg:w-26 xl:w-28"
              }`}
            />
            <div
              ref={togglerRef}
              onClick={_toggler}
              className="block lg:hidden menu-button cursor-pointer p-3"
            >
              <div className="icon-bar bar1"></div>
              <div className="icon-bar bar2"></div>
              <div className="icon-bar bar3"></div>
            </div>
          </div>
          <nav ref={navRef} className="nav-menus">
            <ul className="py-2 xs:py-3 lg:py-0 flex items-center">
              {menus.map((v, i) => (
                <li
                  key={i}
                  className={`lg:inline-flex transition-all duration-300 ease-in-out ${
                    scrolled ? "text-secondary-my-theme" : "text-white"
                  } px-2 xs:px-3 lg:px-7 py-2.5 mt-1 text-sm`}
                >
                  <ScrollableLink {...v} onClick={_toggler} />
                </li>
              ))}
              <div
                className={`lg:inline-flex self-center custom-line ${
                  !scrolled && "custom-line-scrolled-color"
                }`}
              ></div>
              <div
                className={`py-2.5 w-36 rounded-md shadow-md ${
                  scrolled ? "bg-secondary-my-theme" : "bg-secondary-my-theme"
                } flex justify-center items-center cursor-pointer hover:bg-dark-my-theme transition-all duration-500 ease-in-out`}
              >
                <p className="text-white text-sm uppercase text-center">
                  GET QUOTE
                </p>
              </div>
            </ul>
          </nav>
        </div>
      </section>
    </Element>
  );
});

export default Navbar;
