import React from "react";
import sneakersImage from '../assets/sneakers.png';

function HomePage() {
  return (
    <section
      id="hero-section"
      className="flex flex-col gap-[15vh] md:gap-0"
    >
      <div className="flex flex-col-reverse md:flex-row min-h-screen w-full items-center justify-center px-[3vw] gap-5 md:gap-0">
        <div className="z-50 md:mt-[9vh] flex flex-col">
          <div className="text-center md:text-left md:relative md:left-[4vw] xl:left-[2vw] text-[clamp(1.5rem,8vw,2.5rem)] md:scale-110 md:text-[clamp(1.5rem,4.05vw,3rem)] whitespace-normal font-secondary font-bold uppercase">
            <span className="block whitespace-nowrap">More Than Sneakers.</span>
            <span className="block"> A Statement.</span>
          </div>
          <button className="self-center md:self-start sm:relative md:left-[2vw] xl:left-0 bg-[#b43434] shadow-xl text-sm text-white py-3 px-15 md:px-9 font-bold mt-5">
            SHOP NOW
          </button>
        </div>
        <img
          src={sneakersImage}
          alt="sneakers"
          className="max-w-[85vw] pt-[15vh] md:pt-0 sm:max-w-[75vw] md:max-w-[50vw] z-50"
        />
        <p className="absolute text-[45vw] md:text-[50vh] text-black/10 font-extrabold font-hero w-full z-0 overflow-hidden">
          SNEAKERSNEAKERS
        </p>
      </div>
    </section>
  );
}

export default HomePage;
