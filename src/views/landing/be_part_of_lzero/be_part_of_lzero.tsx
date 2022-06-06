import PhoneSVG from "../../../assets/images/landing/be_part_of_lzero/phone.svg";
import PhoneBlobSG from "../../../assets/images/landing/be_part_of_lzero/phone_blob.svg";

export function LandingPageBePartOfLZero() {
  return (
    <section
      id="be_part_of_lzero"
      className="flex flex-col items-center justify-between py-12 mx-5 lg:py-8 lg:mx-32"
    >
      <div className="flex items-center justify-between pb-6 lg:pb-0">
        <img src={PhoneBlobSG} className="absolute right-0 h-1/2 w-[36%]" />
        <div className="flex flex-col justify-center w-full lg:w-3/5 lg:mx-5">
          <div className="w-4/5">
            <p className="mb-5 text-base font-bold text-gray-800 lg:mb-10 lg:text-4xl font-primary">
              Want to be a part of LZero?
            </p>
            <p className="text-xs text-gray-800 font-secodaryregular lg:text-2xl lg:mb-14">
              More users = more listings = more choice! <br /> We aim to become
              the #1 Web3 P2P service providing platform, and would love to have
              you on board!
            </p>
          </div>
          <div className="flex justify-center w-4/5">
            <input
              type="button"
              className="hidden lg:block text-center px-4 py-2 bg-[#E6951B] shadow rounded-lg h-16 text-white w-2/4"
              value="Fund Us"
            />
          </div>
        </div>
        <img src={PhoneSVG} className="relative w-2/4 lg:w-2/5" />
      </div>
      <input
        type="button"
        className="text-center px-4 py-2 bg-[#E6951B] shadow rounded-lg h-9 lg:h-16 text-white w-full lg:hidden"
        value="Fund Us"
      />
    </section>
  );
}
