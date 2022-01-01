import React from 'react';
import CreateContentThatLasts from './components/CreateContentThatLasts/CreateContentThatLasts';
import GainRecognitionRemainAnonymous from './components/GainRecognitionRemainAnonymous/GainRecognitionRemainAnonymous';
import LandingComponent from './components/LandingComponent/LandingComponent';
import OwnYourVision from './components/OwnYourVision/OwnYourVision';
import SocialMediaReimagined from './components/SocialMediaReimagined/SocialMediaReimagined';

function App() {
  return (
    <div className="text-white">
      <LandingComponent />
      <SocialMediaReimagined />
      <CreateContentThatLasts />
      <OwnYourVision />
      <GainRecognitionRemainAnonymous />
      <div className='w-12/12 h-48'></div>
    </div>
  );
}

export default App;
