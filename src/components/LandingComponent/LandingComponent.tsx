import React from "react";
import Logo from "./web-logo.png";
import Background from "./background.png";
import "animate.css";
import Bell from "./landingIcons/bell.png";
import Comment from "./landingIcons/comment.png";
import doubleBubble from "./landingIcons/doubleBubble.png";
import Like from "./landingIcons/like.png";
import Bubble from "./landingIcons/bubble.png";
import Profile from "./landingIcons/profile.png";
import Share from "./landingIcons/share.png";

const LandingComponent = () => {
  return (
    <div className='h-screen'>
      <img
        className="absolute select-none w-screen"
        draggable="false"
        src={Background}
        alt="Background"
      />
      <a href="https://kolor.social">
        <img
          className="relative w-32 md:w-40 pt-8 mx-[10vw] transition hover:scale-105 hover:drop-shadow-2xl duration-300"
          src={Logo}
          alt="Kolor logo"
        />
      </a>
      <div className="relative flex flex-col md:flex-row mx-[10vw]">
        <div className="w-12/12 md:w-6/12 flex flex-col justify-center md:justify-left">
          <p className="text-center font-bold md:text-left pt-24 md:pt-80 text-4xl md:text-6xl font-display animate__animated animate__fadeInLeft">
            The blockchain social media.
          </p>

          <a
            href="https://app.kolor.social"
            className="font-bold mx-auto md:mx-0 font-display mt-28 px- py-4 bg-[blue] w-64 text-center text-2xl rounded-full shadow-lg shadow-cyan-500/50 transition hover:scale-110 hover:drop-shadow-2xl duration-300 animate__animated animate__fadeInLeft animate__delay-1s"
            style={{ boxShadow: "inset 0px 0px 0.6vmax 0.01vmax #00a2ff" }}
          >
            Launch Dapp
          </a>
        </div>
        <div className="pt-48 md:pt-24 lg:mt-0 w-12/12 flex justify-between">
          <img
            src={Bell}
            alt="Bell"
            className="animate__animated animate__backInDown mt-[6vmax] w-[10vmax] absolute"
          />
          <img
            src={Comment}
            alt="Comment"
            className="animate__animated animate__backInDown animate__faster ml-[12vmax] mt-[18vmax] w-[12.5vmax] absolute"
          />
          <img
            src={doubleBubble}
            alt="doubleBubble"
            className="animate__animated animate__backInDown animate__fast mt-[10vmax] ml-[32vmax] w-[2.5vmax] absolute"
          />
          <img
            src={Like}
            alt="Like"
            className="animate__animated animate__backInDown animate__slow ml-[16vmax] mt-[2vmax] w-[9vmax] absolute"
          />
          <img
            src={Bubble}
            alt="Bubble"
            className="animate__animated animate__backInDown animate__fast mt-[20vmax] w-[2.5vmax] absolute"
          />
          <img
            src={Profile}
            alt="Profile"
            className="animate__animated animate__backInDown animate__slow mt-[30vmax] w-[6vmax] absolute"
          />
          <img
            src={Share}
            alt="Share"
            className="animate__animated animate__backInDown animate__faster mt-[30vmax] ml-[25vmax] w-[10vmax] absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
