import { LandingPageBePartOfLZero } from "./be_part_of_lzero/be_part_of_lzero.tsx";
import { LandingPageEvents } from "./events/events.tsx";
import { LandingPageFooter } from "./footer/footer.tsx";
import { LandingPageHero } from "./hero/hero.tsx";
import { LandingPageHowItWorks } from "./how_it_works/how_it_works.tsx";
import { LandingPageIntegratedWith } from "./integrated_with/integrated_with.tsx";
import { LandingPageJoinCommunity } from "./join_community/join_community.tsx";

export function LandingPage() {
  return (
    <>
      <LandingPageHero></LandingPageHero>
      <LandingPageEvents></LandingPageEvents>
      <LandingPageHowItWorks></LandingPageHowItWorks>
      <LandingPageIntegratedWith></LandingPageIntegratedWith>
      <LandingPageBePartOfLZero></LandingPageBePartOfLZero>
      <LandingPageJoinCommunity></LandingPageJoinCommunity>
      <LandingPageFooter></LandingPageFooter>
    </>
  );
}
