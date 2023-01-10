import HeroSvg from "../../../assets/images/landing/hero_background.svg";
import Logo from "../../../assets/images/logo.svg";
import WorldSVG from "../../../assets/images/world.svg";

export function LandingPageHero() {
  return (
    <section id="hero" className="w-screen h-80 lg:h-screen">
      <img src={HeroSvg} alt="Hero" className="absolute w-full h-80 lg:h-full"></img>
      <div className="relative flex flex-col h-full pt-6 lg:pt-16">
        <div className="flex justify-between mx-5 lg:mx-32">
          <div id="logo" className="flex items-center">
            <img className="w-4 h-6 rounded-lg lg:w-11 lg:h-20" src={Logo} alt="Logo"></img>
            <p className="text-base lg:text-4xl w-28 h-full font-boldslanted text-[#E6951B] flex items-center font-primary">
              Zero
            </p>
          </div>
          <div
            id="tooling"
            className="z-10 inline-flex items-center space-x-11"
          >
            <a href='https://discord.gg/gyrn8A2wCz'>
            <input
              type="button"
              className="px-4 py-2 bg-[#E6951B] shadow rounded-lg text-sm font-secondary font-bold text-gray-50 lg:w-40 lg:h-16"
              value="Contribute">
              </input>
              </a>
          </div>
        </div>
        <div className="flex items-center justify-center h-full mx-5 lg:mx-32">
          <div className="flex flex-col justify-center h-full">
            <p className="text-xl font-bold font-primary drop-shadow-lg lg:text-6xl lg:mb-5">
              <span className="text-[#333333]">
              A collective of builders making tools for communities to coordinate
              </span>
            </p>
            <p className="text-[#6B6B6B] font-primary text-xs lg:text-2xl lg:mt-5">
              Starting with group travel and co-living
            </p>
          </div>
          <img src={WorldSVG} alt="World" className="h-32 lg:h-full lg:w-[28.75rem]" />
        </div>
      </div>
    </section>
  );
}
