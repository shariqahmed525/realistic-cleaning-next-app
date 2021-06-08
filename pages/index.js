import { useEffect, useState } from "react";
import Head from "next/head";
// import Image from "next/image";

const menus = ["Home", "Services", "Testimonials", "FAQ", "Contact Us"];

const Home = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                const checkWindowWidth = window.innerWidth > 786 ? 100 : 50;
                setScrolled(window.pageYOffset > checkWindowWidth);
            });
        }
    }, []);

    return (
        <>
            <Head>
                <title>Realistic Cleaning</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <navbar
                className={`
                 fixed top-0 w-full px-10 lg:px-14 xl:px-20 flex flex-row justify-between items-center transition-all duration-300 ease-in-out ${
                     scrolled ? "bg-my-theme py-3.5" : "py-5 bg-transparent"
                 }
              `}
            >
                <img
                    alt="logo"
                    src="/images/logo.webp"
                    className={`w-24 transition-all duration-300 ease-in-out lg:${
                        scrolled ? "w-26" : "w-28"
                    }`}
                />
                <nav className="hidden md:flex md:flex-1 justify-end items-center">
                    <ul className="flex">
                        {menus.map((v, i) => (
                            <li
                                key={i}
                                className={`list-none px-4 py-2 transition-all duration-300 ease-in-out ${
                                    scrolled ? "text-white" : "text-white"
                                } text-lg lg:${
                                    scrolled ? "text-lg" : "text-xl"
                                }`}
                            >
                                <a className="no-underline" href="#">
                                    {v}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    type="button"
                    className="block md:hidden border border-white p-2.5"
                >
                    <span className="icon-bar mb-1"></span>
                    <span className="icon-bar mb-1"></span>
                    <span className="icon-bar"></span>
                </button>
            </navbar>
            <div
                style={{ backgroundImage: "url('/images/bg.webp')" }}
                className="flex flex-1 flex-col md:flex-row items-center justify-center md:justify-evenly min-h-screen bg-no-repeat bg-cover bg-opacity-50 p-10"
            >
                <div className="flex flex-0 md:flex-1 max-w-3xl items-center md:items-start flex-col mt-20 mr-0 sm:mr-7">
                    <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center md:text-left text-white">
                        Realistic Cleaning
                    </h2>
                    <p className="mt-5 text-lg xl:text-xl text-center md:text-left text-white">
                        We provide professional &amp; quality cleaning services.
                        Our technicians are equipped with the most advanced
                        machinery to provide carpet and upholstery steam
                        cleaning.
                    </p>
                    <div className="py-3 w-40 bg-my-theme flex justify-center items-center cursor-pointer my-7">
                        <p className="text-white uppercase text-center font-semibold">
                            Contact US
                        </p>
                    </div>
                </div>
                <div className="flex flex-0 md:flex-1 w-full md:w-auto max-w-3xl flex-col bg-white p-5 md:p-7 xl:p-10 mt-3">
                    <p className="font-bold text-xl md:text-2xl xl:text-4xl text-my-theme">
                        Get A Free Quote
                    </p>
                    <form className="flex flex-col justify-center mt-4 md:mt-5 xl:mt-6">
                        <div className="flex flex-1 flex-col mb-4">
                            <label htmlFor="name" className="mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="border-2 border-gray-200 px-5 py-3"
                            />
                        </div>
                        <div className="flex flex-1 flex-col mb-4">
                            <label htmlFor="name" className="mb-2">
                                Contact No.
                            </label>
                            <input
                                id="contact"
                                type="text"
                                placeholder="Enter your contact no."
                                className="border-2 border-gray-200 px-5 py-3 flex flex-1"
                            />
                        </div>
                        <div className="flex flex-1 flex-col mb-4">
                            <label htmlFor="postal" className="mb-2">
                                Postal Code
                            </label>
                            <input
                                id="postal"
                                type="text"
                                placeholder="Enter postal here"
                                className="border-2 border-gray-200 px-5 py-3 flex flex-1"
                            />
                        </div>
                        <div className="flex flex-1 flex-col">
                            <label htmlFor="clean" className="mb-2">
                                What to clean?
                            </label>
                            <textarea
                                id="clean"
                                rows={3}
                                className="border-2 border-gray-200 px-5 py-3 flex flex-1"
                                placeholder="2 bedrooms, 10 steps of stairs, 5 seating units on sectional couch and hallway"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                et harum eveniet cupiditate quo non ad autem minus molestiae,
                blanditiis quaerat exercitationem quod sit corporis eligendi
                natus nobis voluptate illum, quas veritatis accusantium illo
                eaque nisi doloribus. Perspiciatis nostrum laborum cumque quos
                quibusdam amet, eum placeat earum excepturi saepe error totam
                omnis nisi in aliquam, quaerat quas optio id quo. Id accusamus
                quibusdam eligendi laborum assumenda recusandae amet quis
                accusantium ab, hic nisi atque quae veritatis harum rerum
                numquam consectetur sequi eius reprehenderit quod quidem omnis
                quisquam enim nobis. Sit nemo rem ad eos eveniet porro dolor vel
                libero voluptas! Magnam totam laboriosam asperiores voluptatum
                ea nobis, neque, alias sunt deleniti quos veritatis repudiandae.
                Vel aliquid mollitia voluptatibus sed reiciendis! Et molestias
                enim officiis nihil ducimus dolor nesciunt similique deleniti
                nulla fuga quibusdam eligendi sit, voluptates cumque libero
                sequi nemo id aliquid ea quos, dolorem magni dolore neque. Fugit
                quos id consequuntur necessitatibus! Illum quia mollitia eos
                libero reiciendis nulla quis expedita, sit ut atque! Blanditiis
                dicta, fuga eaque odio dolor ad beatae eum aperiam, saepe cumque
                nisi mollitia sequi assumenda asperiores temporibus optio
                architecto reprehenderit minima voluptates nesciunt quod
                voluptatem quis iste voluptatum. Impedit aperiam aspernatur
                iste, aliquid earum cupiditate voluptatum rem minus nesciunt
                unde deleniti laborum non eligendi error doloremque ea culpa
                eveniet quo qui delectus ipsa beatae architecto modi.
                Reiciendis, dolore perferendis? Recusandae itaque quae quas
                cupiditate vel, repudiandae ab odit placeat neque? Doloribus
                modi officia laudantium quibusdam! Dicta ducimus ipsum nostrum
                nisi laborum pariatur harum incidunt corrupti, earum et delectus
                voluptatem error odit quasi optio, fugit eos. Magnam assumenda
                quos aliquam nostrum vitae, eos mollitia totam inventore quae,
                labore cupiditate. Molestias eum ipsa cupiditate harum illo
                quaerat maiores porro sit dolores? Neque illum, vel dolorem
                placeat, expedita harum qui a modi voluptatem necessitatibus
                aspernatur, iusto animi optio non obcaecati quasi at minus!
                Deleniti, nemo ipsam accusamus quidem quibusdam, eaque magni
                natus praesentium accusantium iste aperiam quo earum et impedit
                velit expedita, iusto nisi! Molestias, dolorum molestiae dicta
                dolores placeat omnis suscipit nesciunt harum, iure veniam optio
                deleniti illo esse ratione sed tenetur recusandae eligendi vero.
                Iure blanditiis explicabo incidunt aliquid nihil, perspiciatis
                atque sed veritatis eos unde enim repellendus deserunt repellat
                natus sunt? Autem libero, consequatur debitis atque cumque,
                magni eius, sint delectus dolor possimus perspiciatis
                accusantium soluta laborum. Ratione quam et ab libero.
                Temporibus nobis veritatis quibusdam aperiam laboriosam totam
                dolore adipisci. Soluta dolor eum impedit ipsum rem accusamus
                numquam illum nesciunt! Dolorem reprehenderit ducimus, assumenda
                animi accusantium molestiae unde deleniti quod provident! Sequi,
                quaerat nemo, nam eum quia tempora ab dignissimos mollitia
                aperiam odio reiciendis culpa? Velit sequi autem suscipit omnis,
                totam vitae eius quidem rerum quia eligendi fugiat vel nesciunt
                numquam modi consectetur praesentium explicabo harum tempora
                doloremque nihil. Magnam facilis dolores magni fuga vero
                reiciendis soluta obcaecati. Fuga quidem, quaerat amet saepe
                dolorum accusantium deserunt fugiat minus velit quae iusto
                expedita ipsam quasi ratione omnis nobis ducimus neque rem sit
                dolorem natus quas, quisquam deleniti labore? Fuga labore
                voluptatem soluta laboriosam assumenda beatae! Laboriosam neque
                corporis, distinctio sunt culpa, a expedita blanditiis eius
                tempora iste beatae nemo optio ad velit asperiores atque quasi
                quos voluptate fugit ex nulla molestiae maiores nostrum
                eligendi! Nihil, neque cumque incidunt possimus omnis nulla
                soluta quasi est assumenda nisi cupiditate vitae corrupti, qui
                autem enim, reiciendis fuga ipsum laboriosam obcaecati quos
                delectus ratione facere. Eum recusandae nemo reiciendis saepe
                vero, quae alias neque esse incidunt voluptatum sit temporibus,
                quod, nesciunt officiis dolor aspernatur dignissimos
                consequuntur blanditiis! Vero nihil vitae, repellat inventore
                veritatis dolores quasi qui atque ratione eligendi tenetur
                optio, vel sed itaque adipisci repudiandae libero quas
                repellendus. Repudiandae atque laudantium voluptates maxime enim
                quo quas aspernatur earum, pariatur corrupti suscipit quaerat
                commodi dolores vitae, magni ipsum. Ut, porro quae laborum ullam
                nesciunt iusto ipsam dolores vitae, minus expedita magnam in,
                quo voluptatum. Quo beatae voluptate commodi molestiae eum
                necessitatibus sequi explicabo, dolore placeat eligendi porro a
                nesciunt dignissimos aperiam, animi iusto aliquam delectus? Fuga
                consequatur vero similique ducimus illo, laudantium deleniti
                repellendus necessitatibus. Asperiores nulla commodi blanditiis
                doloribus error. Obcaecati, officiis excepturi eligendi quod,
                cumque atque sequi distinctio, itaque illum omnis assumenda
                minus ducimus nesciunt numquam tempora dolorum vitae labore sint
                necessitatibus molestias? Voluptate quos eligendi ducimus illo
                doloremque rerum temporibus facilis accusamus, expedita vero,
                debitis quod sed ipsam hic consectetur recusandae inventore
                nulla earum facere ratione perspiciatis! Magnam ut aut, ratione
                incidunt praesentium architecto molestias perferendis eius,
                ducimus quam cum nihil dicta, at laudantium a! Porro suscipit
                nisi voluptatum, veniam pariatur iure, voluptates at quae a sunt
                dicta aspernatur quod nihil fuga soluta sit accusamus,
                temporibus tempora earum! Alias tenetur sequi nesciunt
                repellendus, minima, perspiciatis numquam consequatur iste
                architecto deleniti incidunt. Voluptatem qui perferendis itaque
                amet deserunt ducimus iusto id rem doloribus magni, quidem
                magnam tempora incidunt eos architecto, quia cum. Incidunt
                pariatur natus quis excepturi aliquam! Suscipit animi dolore
                facere repellendus! Perspiciatis ex pariatur in animi laudantium
                repudiandae fugit eum reprehenderit, est praesentium dolore
                sequi saepe eaque expedita ab doloremque excepturi itaque
                tempore aliquam optio facilis? Similique expedita iste porro
                nihil? Perspiciatis, nihil vitae, necessitatibus ipsam sapiente
                praesentium quo cum quos dolore quidem aperiam aliquid eius.
                Voluptate illo sed voluptatibus quo mollitia tempora sit
                quibusdam nam vero nesciunt laudantium, ut, eum reiciendis aut
                reprehenderit perspiciatis animi error esse distinctio odit
                magni consequatur. Veniam modi dicta qui rem exercitationem.
                Vero iste, corporis quidem atque reiciendis placeat ab itaque!
                Nam et cum omnis at. Tempora ab cumque consectetur nulla eos
                distinctio quo assumenda quibusdam recusandae aperiam saepe
                ratione, repellat, ipsum earum itaque quidem. Hic officiis
                facere beatae molestiae harum quibusdam porro minima cum,
                explicabo officia alias maiores libero, dicta, odio quisquam
                ullam doloremque quia ipsam accusamus omnis necessitatibus sed
                repellat ea modi. Inventore vel tenetur aut! Odio architecto
                officiis placeat aperiam sequi expedita, at, itaque atque
                molestiae ut, distinctio asperiores? Nemo asperiores quibusdam,
                libero a maxime debitis vel dicta voluptatum amet, saepe
                mollitia tenetur neque. Minima nisi quibusdam maxime, atque
                earum dolorem enim, doloremque maiores, cupiditate at error cum
                laborum aspernatur quas temporibus dolor exercitationem
                deleniti.
            </p>
        </>
    );
};

export default Home;
