import { MutableRefObject, useEffect, useRef, useState } from "react";
import GitcoinSVG from "../../../assets/images/landing/integrated_with/gitcoin.svg";
import GnosisSafeSVG from "../../../assets/images/landing/integrated_with/gnosis_safe.svg";
import KlerosSVG from "../../../assets/images/landing/integrated_with/kleros.svg";

type PartnerData = { name: string; image: string };

export function LandingPageIntegratedWith() {
  const integrationsData: MutableRefObject<PartnerData[]> = useRef([
    {
      name: "Kleros",
      image: KlerosSVG,
    },
    {
      name: "Gitcoin",
      image: GitcoinSVG,
    },
    {
      name: "Gnosis Safe",
      image: GnosisSafeSVG,
    },
  ]);

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setPartners(
      integrationsData.current.map((partner) => (
        <div className="flex flex-col items-center justify-center h-full py-2 mx-2 lg:py-6 lg:mx-10 lg:w-1/5">
          <img src={partner.image} className="lg:w-2/3" alt={partner.name} />
        </div>
      ))
    );
  }, [integrationsData, setPartners]);

  return (
    <section
      id="partners"
      className="flex flex-col justify-between mx-5 lg:py-8 lg:mx-32"
    >
      <p className="w-full mb-2 text-base font-bold text-center font-primary lg:mb-5 text-lg:text-3xl">
        Integrated with
      </p>
      <div className="flex justify-between w-full h-9 lg:h-32">{partners}</div>
    </section>
  );
}
