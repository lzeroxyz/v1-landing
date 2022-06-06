import { MutableRefObject, useEffect, useRef, useState } from "react";
import EthCCCoverImage from "../../../assets/images/landing/events/ethcc.jpg";
import EthLisbonCoverImage from "../../../assets/images/landing/events/eth_lisbon.png";
import NftNycCoverImage from "../../../assets/images/landing/events/nft_nyc.jpg";
import RoadToDevConCoverImage from "../../../assets/images/landing/events/road_to_devcon.png";

type EventData = { name: string; image: string };

export function LandingPageEvents() {
  const eventsData: MutableRefObject<EventData[]> = useRef([
    {
      name: "ETHCC Week Paris",
      image: EthCCCoverImage,
    },
    {
      name: "NFT NYC",
      image: NftNycCoverImage,
    },
    {
      name: "ETH Lisbon",
      image: EthLisbonCoverImage,
    },
    {
      name: "Road to DevCon",
      image: RoadToDevConCoverImage,
    },
  ]);

  const [primaryEvent, setPrimaryEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const primaryEvent = eventsData.current[0];

    if (primaryEvent !== null) {
      setPrimaryEvent(
        <div className="w-full h-full mb-3 lg:mt-5 lg:mb-8 drop-shadow-lg lg:drop-shadow-2xl">
          <p className="absolute flex items-center px-3 text-xs bg-white rounded-full h-3.5 lg:h-12 left-2 top-2 lg:left-6 lg:top-5 font-primary">
            {primaryEvent.name}
          </p>
          <img
            className="w-full h-32 lg:h-80 rounded-lg lg:rounded-[50px] object-cover"
            src={primaryEvent.image}
          />
        </div>
      );
    }

    setEvents(
      eventsData.current.slice(1).map((event) => (
        <div className="flex w-1/3 mx-1 lg:mx-12 lg:h-1/5 drop-shadow-lg lg:drop-shadow-2xl">
          <p className="absolute flex items-center justify-center pl-2 pr-1 text-xs bg-white rounded-full w-fit lg:h-12 top-1 lg:left-6 lg:top-5 font-primary">
            {event.name}
          </p>
          <img
            className="rounded-lg lg:rounded-[50px] h-28d lg:h-80 w-full object-cover"
            src={event.image}
          ></img>
        </div>
      ))
    );
  }, [eventsData, setEvents]);

  return (
    <div
      id="elements"
      className="flex flex-col justify-between py-8 mx-4 lg:mx-32"
    >
      <p className="w-full mb-3 text-base font-bold text-center font-primary lg:mb-5 lg:text-3xl">
        Featured Events
      </p>
      {primaryEvent}
      <div className="flex justify-between w-full lg:mt-8">{events}</div>
    </div>
  );
}
