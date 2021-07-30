import React, { useState, useRef, useEffect, forwardRef } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

const menus = [
    {
        text: "Home",
        offset: 0,
        id: "home",
    },
    {
        text: "Services",
        offset: -100,
        id: "services",
    },
    {
        text: "Testimonials",
        offset: -100,
        id: "testimonials",
    },
    // {
    //     text: "Partners",
    //     offset: -100,
    //     id: "partners",
    // },
    {
        text: "FAQ",
        offset: -70,
        id: "faq",
    },
    {
        text: "Contact Us",
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
            <navbar
                id="fixed"
                style={{ zIndex: 1000 }}
                className={`
                 fixed top-0 px-5 sm:px-10 lg:px-14 xl:px-20 grid grid-cols-12 flex-row w-full transition-all duration-300 ease-in-out bg-my-theme-bg shadow-lg overflow-hidden ${
                     scrolled
                         ? "lg:bg-my-theme-bg py-3.5"
                         : "py-5 lg:bg-transparent md:shadow-none"
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
                            src="/images/logo.webp"
                            className={`w-20 sm:w-24 transition-all duration-300 ease-in-out ${
                                scrolled ? "lg:w-24 xl:w-26" : "lg:w-26 xl:w-28"
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
                        <ul className="py-2 xs:py-3 lg:py-0">
                            {menus.map((v, i) => (
                                <li
                                    key={i}
                                    className="lg:inline-flex text-white px-2 xs:px-3 lg:px-7 py-2.5 mt-1"
                                >
                                    <ScrollableLink {...v} onClick={_toggler} />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </navbar>
        </Element>
    );
});

export default Navbar;
