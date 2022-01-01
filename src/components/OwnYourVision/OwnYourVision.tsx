import React from "react";
import Abstract from "./abstract.png";

const OwnYourVision = () => {
  return (
    <div className="mx-[10vw] md:mt-64 flex flex-col md:flex-row">
      <div className="w-12/12 md:w-6/12">
        <div className="mt-[20vw]">
          <p className="text-center md:text-left text-4xl pt-24 md:pt-0 md:text-6xl font-display ">
            Own your vision
          </p>
          <p className="text-center md:text-left font-sans text-xl md:text-3xl mt-2">
            Minting posts as NFTs makes them truly{" "}
            <span
              className="font-bold"
              style={{
                textShadow: "0px 0px 20px #0084ff, 0px 0px 10px #0084ff",
              }}
            >
              yours
            </span>
            .
          </p>
        </div>
      </div>
      <div className="w-12/12 md:w-6/12 mt-6 md:mt-0">
        <img src={Abstract} alt="Abstract 3D art" />
      </div>
    </div>
  );
};

export default OwnYourVision;
