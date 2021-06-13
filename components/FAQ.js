import React from "react";
import Faq from "react-faq-component";

const config = {
    animate: true,
    arrowIcon: <img src="/images/down-arrow.png" width="18" />,
};

const styles = {
    rowTitleColor: "#305454",
    rowTitleTextSize: "medium",
    rowContentColor: "#212121",
    rowContentTextSize: "15px",
    rowContentPaddingTop: "7px",
    rowContentPaddingBottom: "15px",
};

const faqs = [
    {
        questions: {
            rows: [
                {
                    title: "How long will it take to clean my carpets?",
                    content:
                        "On average, it will take our technician's around 20 minutes per room. Sometimes, we have to repeat the process which can increase the duration of the service.",
                },
                {
                    title: "How long will it take for my carpet to dry?",
                    content:
                        "It only takes around 5-7 hours for the carpet to dry. Our drying time can be affected by humidity, temperature and airflow to the carpets.",
                },
                {
                    title: "Are the products you use safe?",
                    content:
                        "Yes. The products that we use are entirely safe and child/pet-friendly. Although we do recommend that they are kept away from carpets and furnishings until they are completely dry.",
                },
                {
                    title: "Will you be able to remove all the stains from the carpet?",
                    content:
                        "We have the best professionals for the carpet stain removal. They have a better understanding of the sources of the stain and their chemical behaviour. They choose the method for removal accordingly and that helps in removing most of the types of stain. We do not take guarantee that all the stains will be removed, but there are rare chances that any of them will remain after our professionals have given the stain removal service.",
                },
            ],
        },
    },
    {
        questions: {
            rows: [
                {
                    title: "Do I need to vacuum before the technician arrives?",
                    content:
                        "To achieve optimum results, a light vacuuming of the high traffic areas is recommended but not required.",
                },
                {
                    title: "Do you move furniture?",
                    content:
                        "We do not move furniture because carpet cleaning requires a single technician. The cleaner could help moving light furniture as long as it doesn't pose any extra risks.",
                },
                {
                    title: "Is the staff insured and reliable?",
                    content:
                        "Yes, our technicians are professionally trained and certified.",
                },
                {
                    title: "How can I pay you?",
                    content: "We take cash, cards and email transfer.",
                },
            ],
        },
    },
];

const FAQ = () => {
    return (
        <div className="bg-white py-10 md:py-16 px-5 flex flex-col justify-center items-center">
            <h2 className="font-bold text-2xl sm:text-3xl xl:text-4xl text-center text-black uppercase">
                FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-3 md:mt-7 w-full sm:w-11/12 md:w-full xl:w-11/12 py-5">
                {faqs.map((v, i) => (
                    <div
                        key={i}
                        className="col-span-4 lg:col-span-1 flex flex-col justify-center items-center px-5"
                    >
                        <Faq
                            styles={styles}
                            config={config}
                            data={v.questions}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
