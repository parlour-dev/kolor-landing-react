import * as React from "react";
import { Helmet } from "react-helmet";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";


import LandingComponent from "../components/LandingComponent/LandingComponent";
import SocialMediaReimagined from "../components/SocialMediaReimagined/SocialMediaReimagined";
import CreateContentThatLasts from "../components/CreateContentThatLasts/CreateContentThatLasts";
import OwnYourVision from "../components/OwnYourVision/OwnYourVision";
import GainRecognitionRemainAnonymous from "../components/GainRecognitionRemainAnonymous/GainRecognitionRemainAnonymous";

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Kolor - the crypto social media. Mint posts as NFTs, appreciate creators in crypto."
        />
        <title>Kolor - Social Media Reimagined</title>
      </Helmet>
      <LandingComponent />
      <div data-aos="zoom-in-down" data-aos-duration="1000">
        <SocialMediaReimagined />
      </div>
      <div data-aos="zoom-in-down" data-aos-duration="1000">
        <CreateContentThatLasts />
      </div>
	  <div data-aos="zoom-in-down" data-aos-duration="1000">
        <OwnYourVision />
      </div>
	  <div data-aos="zoom-in-down" data-aos-duration="1000">
        <GainRecognitionRemainAnonymous />
      </div>
	  <div className='w-[100%] h-64'/>
      {/* <div data-aos="zoom-in-down" data-aos-duration="1000"></div> */}
    </>
  );
};

export default IndexPage;
