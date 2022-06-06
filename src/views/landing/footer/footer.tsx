import FooterSVG from "../../../assets/images/landing/footer_background.svg";
import Logo from "../../../assets/images/logo.svg";

export function LandingPageFooter() {
  return (
    <section id="footer" className="mx-6 lg:mx-24">
      <img src={FooterSVG} className="absolute left-0 w-full h-80"></img>
      <div className="flex flex-col justify-center w-full h-80">
        <div className="inline-flex items-end justify-end w-40 h-14">
          <img className="h-full rounded-lg w-11" src={Logo} />
          <p className="text-4xl text-yellow-500 w-28 h-5/6 font-boldslanted">
            Zero
          </p>
        </div>
        <p
          className="text-lg leading-9 text-gray-400"
          style={{ width: 386, height: 30 }}
        >
          Ⓒ2022 LZero Protocol
        </p>
      </div>
    </section>
  );
}
