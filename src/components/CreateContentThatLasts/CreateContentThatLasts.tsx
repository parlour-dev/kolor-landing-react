import React from "react";
import Blockchain from './blockchain.png';
import Infinity from './infinity.png';

const CreateContentThatLasts = () => {
  return (
    <div className="mx-[10vw] md:mt-64">
      <p className="font-bold text-center md:text-left text-4xl pt-24 md:pt-0 md:text-6xl font-display">
        Create content that <span style={{textShadow: '0px 0px 50px #0084ff, 0px 0px 40px #0084ff'}}>lasts</span>
      </p>
      <div className='flex flex-col md:flex-row mt-10 justify-between'>
          <img className='w-12/12 md:w-5/12' src={Blockchain} alt="Blockchain" />
          <div className='text-left w-12/12 md:w-5/12 mt-6 md:mt-0 min-h-72 bg-[#16151c] relative overflow-hidden rounded-3xl border border-x-violet-400 border-y-indigo-500'>
            <img className='absolute mt-20 ml-32' src={Infinity} alt="For ever." />
            <p className='font-bold relative p-6 font-display text-2xl md:text-3xl'>Your posts stay on the blockchain forever if you mint them as NFTs</p>
            <p className='relative font-sans px-6 text-lg md:text-2xl py-2 underline'>What happens after you submit a post?</p>
          </div>
      </div>
    </div>
  );
};

export default CreateContentThatLasts;
