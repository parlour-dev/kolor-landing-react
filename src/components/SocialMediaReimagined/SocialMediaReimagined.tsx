import React from "react";
import PostIcon from "./postIcon.png";
import GetTokens from "./getTokens.png";
import Nft from './nft.png';

const SocialMediaReimagined = () => {
  return (
    <div className="mx-[10vw] md:mt-64">
      <p className="text-center md:text-left text-4xl pt-24 md:pt-0 md:text-6xl font-display font-bold">
        Social Media reimagined
      </p>

      <div className="flex flex-col md:flex-row">
        <div className="flex mx-auto">
          <div className="w-[100%] md:w-[40rem] px-4 h-64 rounded-3xl mt-10 bg-[#16151c] text-center">
            <div className="font-display text-lg  mt-4 rounded-full w-10 h-10 bg-[#2e63fb] mx-auto flex items-center justify-center">
              1
            </div>
            <p className="text-4xl font-display mt-20">
              Post anything you like
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-6/12 mx-auto">
          <img className="w-[20rem]" src={PostIcon} alt="Post" />
        </div>
      </div>

      <div className="flex md:flex-row flex-wrap-reverse mt-10">
        <div className="flex justify-center items-center w-6/12 mx-auto">
          <img
            className="w-[20rem]"
            src={GetTokens}
            alt="Get Tokens for your work"
          />
        </div>
        <div className="flex mx-auto">
          <div className="w-[100%] md:w-[40rem] px-4 h-64 rounded-3xl mt-10 bg-[#16151c] text-center">
            <div className="font-display text-lg  mt-4 rounded-full w-10 h-10 bg-[#2e63fb] mx-auto flex items-center justify-center">
              2
            </div>
            <p className="text-4xl font-display mt-20">
              Get crypto and Kolor Token
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-10">
        <div className="flex mx-auto">
          <div className="w-[100%] md:w-[40rem] px-4 h-64 rounded-3xl mt-10 bg-[#16151c] text-center">
            <div className="font-display text-lg  mt-4 rounded-full w-10 h-10 bg-[#2e63fb] mx-auto flex items-center justify-center">
              3
            </div>
            <p className="text-4xl font-display mt-20">
              Mint your post as NFT
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-6/12 mx-auto">
          <img className="w-[20rem]" src={Nft} alt="NFT" />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaReimagined;
