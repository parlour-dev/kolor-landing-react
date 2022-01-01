import React from "react";

const GainRecognitionRemainAnonymous = () => {
  return (
    <div className="mx-[10vw] md:mt-64">
      <p className="text-center md:text-left text-4xl pt-24 md:pt-0 md:text-6xl font-display">
        Gain recogniotion. <br /> Remain anonymous.
      </p>
      <div className="flex flex-col md:flex-row mt-10 justify-between">
        <div className="w-12/12 md:w-5/12 mt-6 md:mt-0 min-h-72 bg-[#16151c] rounded-3xl border border-x-violet-400 border-y-indigo-500">
          <p className="relative p-6 font-display text-3xl md:text-5xl">Recognition</p>
          <p className="relative font-sans px-6 text-xl md:text-3xl py-2">
            Get following by creating <b>anything</b>.
          </p>
        </div>

        <div className="w-12/12 md:w-5/12 mt-6 md:mt-0 min-h-72 bg-[#16151c] rounded-3xl border border-x-violet-400 border-y-indigo-500">
          <p className="relative p-6 font-display text-3xl md:text-5xl">Anonymity</p>
          <p className="relative font-sans px-6 text-xl md:text-3xl py-2">
            Become untraceable and uncensored. <b>Speak your mind</b>. <br /><br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default GainRecognitionRemainAnonymous;
