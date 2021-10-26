import React from "react";
import Image from "next/image";
import Faq from "react-faq-component";
import { Element } from "react-scroll";

const config = {
  animate: true,
  arrowIcon: <Image src="/images/down-arrow.png" width="16" height="16" />,
};

const styles = {
  rowTitleColor: "#000",
  rowTitleTextSize: "medium",
  rowContentColor: "#2e3d49",
  rowContentTextSize: "15px",
  rowContentPaddingTop: "7px",
  rowContentPaddingBottom: "15px",
};

const faqs = [
  {
    questions: {
      rows: [
        {
          title: "Can Flex Ducts be cleaned?",
          content: "Yes with soft brush equipment.",
        },
        {
          title: "How often should I get my ducts cleaned?",
          content: (
            <p>
              Minimum every 1-2 years.
              <br />
              <br />
              Get ducts cleaned more frequently if...
              <ul className="list-decimal">
                <li>
                  <span className="font-bold pr-2">*</span>Live in an older
                  home.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Have pet.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Have someone with
                  respiratory illness at home.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Have allergies or
                  live with someone with allergies.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Have problem with
                  dust.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Have a smoker in the
                  home.
                </li>
              </ul>
            </p>
          ),
        },
        {
          title: "How often should we get ducts cleaned?",
          content: (
            <p>
              <ul className="list-decimal">
                <li>
                  <span className="font-bold pr-2">*</span>Visible dust in the
                  ducts.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Increase in dust in
                  your home.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Dust around the
                  registers.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Increase in allergy
                  symptoms.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Increase in
                  respiratory discomfort
                </li>
              </ul>
            </p>
          ),
        },
        {
          title: "What other ways to improve indoor air quality?",
          content: (
            <p>
              There are some ways to improve indoor air quality and reduce air
              pollution in your home.
              <br />
              <br />
              <ul className="list-decimal">
                <li>
                  <span className="font-bold pr-2">*</span>Seal ducts.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Use great furnace
                  filters.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Change filters often.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Use air purifier.
                </li>
                <li>
                  <span className="font-bold pr-2">*</span>Air seal crawl space
                  and attic.
                </li>
              </ul>
            </p>
          ),
        },
      ],
    },
  },
  {
    questions: {
      rows: [
        {
          title: "What kind of equipment do you use?",
          content:
            "We usually use modified truck mounted equipment, a 16 feet moving truck and a high pressure commercial vacuum with the adjustable pressure up to 240 Psi. Sometimes we also have to use portable Hyper Vac equipment depending on the situation.",
        },
        {
          title: "Are you people registered and certified?",
          content:
            "Of course we are registered with Better Business Bureau (BBB) and are also certified from the National Air Duct Cleaning Association (NADCA).",
        },
        {
          title: "How long have you people been in this business?",
          content:
            "We have been in this business for more than 14 years and we also have a team of experienced technicians who are well trained to work through different situations.",
        },
        {
          title: "How can I pay you?",
          content:
            "Cash, Card & Online Transfer are being accepted by us. You can choose any of the following as per your ease.",
        },
      ],
    },
  },
];

const FAQ = () => {
  return (
    <Element name="faq">
      <div className="bg-white py-10 md:py-16 px-5 flex flex-col justify-center items-center">
        <h2 className="sec-title font-sans font-semibold text-2xl xs:text-3xl text-center text-black uppercase relative">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-3 md:mt-7 w-full sm:w-11/12 md:w-full xl:w-11/12 py-5">
          {faqs.map((v, i) => (
            <div
              key={i}
              className="col-span-4 lg:col-span-1 flex flex-col justify-center items-center px-5"
            >
              <Faq config={config} styles={styles} data={v.questions} />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default FAQ;
