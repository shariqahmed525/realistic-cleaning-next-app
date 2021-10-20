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
    className="no-underline cursor-pointer px-5 sm:px-10 lg:px-0"
  >
    {text}
  </ScrollLink>
);

const Navbar = forwardRef(() => {
  let navRef = useRef(null);
  let togglerRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const checkWindowWidth = window.innerWidth > 786 ? 100 : 50;
        setScroll(window.pageYOffset);
        setScrolled(window.pageYOffset > checkWindowWidth);
      });
    }
  }, []);

  const _toggler = () => {
    navRef?.current?.classList?.toggle?.("show");
    togglerRef?.current?.classList?.toggle?.("change");
  };

  return (
    <>
      <ScrollLink
        spy={true}
        offset={0}
        to={"home"}
        smooth={true}
        duration={500}
        className="no-underline cursor-pointer"
      >
        <div
          className={`w-14 h-14 bg-secondary-my-theme mx-0 bottom-5 right-5 sm:bottom-10 sm:right-10 rounded-full border border-secondary-my-theme fixed items-center justify-center z-40 cursor-pointer hover:bg-dark-my-theme transition-all duration-500 ease-in-out ${
            scroll > 500 ? "flex" : "hidden"
          }`}
        >
          <div class="arrow"></div>
        </div>
      </ScrollLink>

      <Element name="home">
        <section
          id="fixed"
          style={{ zIndex: 1000 }}
          className={`
                 fixed top-0 xl:px-20 w-full transition-all duration-300 ease-in-out overflow-hidden bg-white ${
                   scrolled ? "lg:bg-white custom-shadow" : "lg:bg-transparent"
                 }
              `}
        >
          <div className="grid grid-cols-12 py-5">
            <div className="col-start-1 col-end-13 2xl:col-start-2 2xl:col-end-12 flex flex-col lg:flex-row lg:items-center justify-between py-3 border-b border-white mb-2">
              {/* <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam deleniti recusandae assumenda nostrum enim asperiores
                ea amet quaerat molestiae.
              </p> */}
            </div>
            <div className="col-start-1 col-end-13 2xl:col-start-2 2xl:col-end-12 flex flex-col lg:flex-row lg:items-center justify-between">
              <div
                className={`flex flex-1 flex-row justify-between items-center px-5 sm:px-10 md:pl-10 h-18`}
              >
                <img
                  alt="logo"
                  height="68"
                  width="112"
                  placeholder="blur"
                  src={"/images/logo.webp"}
                  className={`w-16 xs:w-20 xl:w-24 transition-all duration-300 ease-in-out`}
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
                <ul className="py-2 xs:py-3 lg:py-0 lg:flex lg:items-center lg:pr-10 mt-4 lg:mt-0">
                  {menus.map((v, i) => (
                    <li
                      key={i}
                      className={`lg:inline-flex transition-all duration-300 ease-in-out ${
                        scrolled
                          ? "text-secondary-my-theme"
                          : "text-secondary-my-theme lg:text-white"
                      } px-2 xs:px-3 lg:px-7 py-4 lg:py-2.5 text-xs xs:text-sm border-t lg:border-t-0 border-gray-200 font-sans`}
                    >
                      <ScrollableLink {...v} onClick={_toggler} />
                    </li>
                  ))}
                  <div
                    className={`hidden lg:inline-flex self-center custom-line ${
                      !scrolled && "custom-line-scrolled-color"
                    }`}
                  ></div>
                  <ScrollLink
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                    to={"get-quote"}
                    onClick={_toggler}
                    className="no-underline cursor-pointer"
                  >
                    <div className="border-t lg:border-t-0 border-gray-200 py-4 pl-5 sm:pl-10 lg:pl-0">
                      <div
                        className={`py-2.5 w-32 xs:w-36 rounded-md shadow-md bg-secondary-my-theme flex justify-center items-center cursor-pointer hover:bg-dark-my-theme transition-all duration-500 ease-in-out`}
                      >
                        <p className="text-white text-xs xs:text-sm uppercase font-sans text-center">
                          GET QUOTE
                        </p>
                      </div>
                    </div>
                  </ScrollLink>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
});

export default Navbar;
