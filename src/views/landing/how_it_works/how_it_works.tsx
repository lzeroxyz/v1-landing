import { MutableRefObject, useEffect, useRef, useState } from "react";
import CalendarSVG from "./../../../assets/images/landing/how_it_works/calendar.svg";
import CalendarBlobSVG from "./../../../assets/images/landing/how_it_works/calendar_blob.svg";
import CreditCardSVG from "./../../../assets/images/landing/how_it_works/credit_card.svg";
import CreditCardBlobSVG from "./../../../assets/images/landing/how_it_works/credit_card_blob.svg";
import SelectionsSVG from "./../../../assets/images/landing/how_it_works/selections.svg";
import SelectionsBlobSVG from "./../../../assets/images/landing/how_it_works/selections_blob.svg";

type FeatureData = {
  title: string;
  title_color: string;
  image: string;
  blob_image: string;
  description: string;
  flipped: boolean;
};

export function LandingPageHowItWorks() {
  const featuresData: MutableRefObject<FeatureData[]> = useRef([
    {
      title: "Group organization made easy !",
      title_color: "#E6951B",
      image: CalendarSVG,
      blob_image: CalendarBlobSVG,
      description:
        "Browse & book events, accommodations, activities and services all on ONE platform.",
      flipped: false,
    },
    {
      title: "Split and pay your share",
      title_color: "#D0B9E7",
      image: CreditCardSVG,
      blob_image: CreditCardBlobSVG,
      description:
        "No more frustrating back and forth with your friends! Each user pays ONLY what they owe.",
      flipped: true,
    },
    {
      title: "Provide your services",
      title_color: "#E6951B",
      image: SelectionsSVG,
      blob_image: SelectionsBlobSVG,
      description:
        "Make additional income by listings your services, for less fees than traditional platforms!",
      flipped: false,
    },
  ]);

  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(
      featuresData.current.map((feature) => {
        const titleDescriptionObject = (
          <div className="flex flex-col justify-center">
            {feature.flipped ? (
              <h1 className="text-base lg:text-4xl font-bold font-primary text-[#D0B9E7] mb-4">
                {feature.title}
              </h1>
            ) : (
              <h1 className="text-base lg:text-4xl font-bold font-primary text-[#E6951B] mb-4">
                {feature.title}
              </h1>
            )}
            <p className="text-base font-secondaryregular text-[#474747]">
              {feature.description}
            </p>
          </div>
        );

        const finalObject = feature.flipped ? (
          <div className="flex justify-between w-full mb-16 last:mb-4">
            {titleDescriptionObject}
            <img
              src={feature.blob_image}
              className="absolute right-0 h-[25%] w-[40%] lg:h-1/2 lg:w-[36%]"
            />
            <img src={feature.image} className="relative w-32 lg:w-auto" />
          </div>
        ) : (
          <div className="flex justify-between mb-16 last:mb-4">
            <img
              src={feature.blob_image}
              className="absolute left-0 h-[25%] w-[40%] lg:h-1/2 lg:w-[36%]"
            />
            <img src={feature.image} className="relative w-32 lg:w-auto" />
            {titleDescriptionObject}
          </div>
        );

        return finalObject;
      })
    );
  }, [featuresData, setFeatures]);

  return (
    <section
      id="how_it_works"
      className="flex flex-col justify-between mx-5 lg:py-8 lg:mx-64"
    >
      <p className="w-full text-small lg:text-3xl text-center font-bold font-primary mb-5 text-[#333333]">
        Starting with an expenses management dApp
      </p>
      <div className="flex flex-col">{features}</div>
    </section>
  );
}
