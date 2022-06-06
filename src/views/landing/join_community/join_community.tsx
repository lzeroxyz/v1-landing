import EmailLogoSVG from "../../../assets/images/landing/join_community/email.svg";
import GitcoinLogoSVG from "../../../assets/images/landing/join_community/gitcoin.svg";
import TwitterLogoSVG from "../../../assets/images/landing/join_community/twitter.svg";

export function LandingPageJoinCommunity() {
  return (
    <section
      id="join_community"
      className="flex flex-col justify-between mx-5 lg:mx-32 lg:py-8"
    >
      <div className="flex items-center justify-around w-full h-16 bg-purple-300 rounded-lg shadow lg:h-64 lg:rounded-3xl font-primary">
        <p className="text-base font-bold lg:w-4/6 lg:w-4/5 lg:text-4xl text-gray-50">
          Join our community
        </p>
        <div className="flex items-center justify-around w-2/6 lg:w-1/5">
          <div className="flex items-center justify-center bg-[#E5951C] h-6 w-6 lg:w-16 lg:h-16 rounded-md lg:rounded-2xl">
            <a href="">
              <img src={TwitterLogoSVG} />
            </a>
          </div>
          <div className="flex items-center justify-center bg-[#E5951C] h-6 w-6 lg:w-16 lg:h-16 rounded-md lg:rounded-2xl">
            <a href="">
              <img src={EmailLogoSVG} />
            </a>
          </div>
          <div className="flex items-center justify-center bg-[#E5951C] h-6 w-6 lg:w-16 lg:h-16 rounded-md lg:rounded-2xl">
            <a href="">
              <img src={GitcoinLogoSVG} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
