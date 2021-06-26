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
    let toggleMenuRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                const checkWindowWidth = window.innerWidth > 786 ? 100 : 50;
                setScrolled(window.pageYOffset > checkWindowWidth);
            });
        }
    }, []);

    const onMenuToggle = () => {
        navRef.current.classList.toggle("showMenu");
        toggleMenuRef.current.classList.toggle("show");
    };

    return (
        <Element name="home">
            <navbar
                id="fixed"
                ref={toggleMenuRef}
                style={{ zIndex: 1000 }}
                className={`
                 fixed top-0 w-full px-5 sm:px-10 lg:px-14 xl:px-20 flex flex-col md:flex-row justify-between items-center transition-all duration-300 ease-in-out bg-my-theme-bg shadow-lg ${
                     scrolled
                         ? "md:bg-my-theme-bg py-3.5"
                         : "py-5 md:bg-transparent md:shadow-none"
                 }
              `}
            >
                <div className="flex flex-1 items-center justify-between w-full flex-row">
                    <img
                        alt="logo"
                        height="68"
                        width="112"
                        placeholder="blur"
                        src="/images/logo.webp"
                        className={`w-20 sm:w-24 transition-all duration-300 ease-in-out ${
                            scrolled ? "lg:w-26" : "lg:w-28"
                        }`}
                    />

                    {/* Menus for web */}
                    <nav className="hidden md:flex md:flex-1 justify-end items-center">
                        <ul className="flex">
                            {menus.map((v, i) => (
                                <li
                                    key={i}
                                    className={`list-none px-4 py-2 transition-all duration-300 ease-in-out ${
                                        scrolled ? "text-white" : "text-white"
                                    } text-lg md:text-base ${
                                        scrolled ? "lg:text-lg" : "lg:text-xl"
                                    }`}
                                >
                                    <ScrollableLink {...v} />
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div
                        onClick={onMenuToggle}
                        className={`block md:hidden border border-white p-2.5 transition-all duration-300 ease-in-out`}
                    >
                        <span
                            className={`transition-all duration-300 ease-in-out bg-white icon-bar mb-1`}
                        ></span>
                        <span
                            className={`transition-all duration-300 ease-in-out bg-white icon-bar mb-1`}
                        ></span>
                        <span
                            className={`transition-all duration-300 ease-in-out bg-white icon-bar`}
                        ></span>
                    </div>
                </div>
                {/* Menus for Mobile */}
                <nav ref={navRef} className="hidden w-full">
                    <ul className="w-full">
                        {menus.map((v, i) => (
                            <li
                                key={i}
                                className="py-2.5 mt-1 text-white text-base sm:text-lg px-2"
                            >
                                <ScrollableLink {...v} onClick={onMenuToggle} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </navbar>
        </Element>
    );
});

export default Navbar;
