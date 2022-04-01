import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "./../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 bg-white rounded-full overflow-hidden">
            <img
              src={Delivery}
              alt="bike"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] md:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          iure modi facere nostrum voluptas sapiente repellat similique ipsum
          corporis illo? Aut in eos nobis nostrum praesentium earum, modi optio.
          Totam.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 items-center relative">
        <img
          src={HeroBg}
          alt="hero"
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4 flex-wrap gap-4">
          {heroData &&
            heroData.map((item) => (
              <div
                key={item.id}
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl felx flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={item.imageSrc}
                  alt="icecream"
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {item.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3">
                  {item.desc}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
