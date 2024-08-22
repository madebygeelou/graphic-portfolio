// src/App.js
import React from 'react';
import VideoHover from '../components/videoHover';

const Videography = () => {
  return (
    <>
    <main class="videography-page">
    <div class='filmheader'>
      <video class="filmclip" autoPlay muted loop playsInline>
        <source src ='./assets/everyfilmforwebsite1.mp4'></source></video>
      <h1 class='filmTitle'>FILMS</h1>
    </div>
    <div className="videos">
      <VideoHover
        src="./assets/conceopt1.mp4" 
        width="300px" 
        height="auto" 
      />
      <VideoHover
        src="./assets/lvlvid1.mp4"
        width="300px" 
        height="auto" 
      />
      <VideoHover
        src="./assets/resized4dayvacation_1.mp4"
        width="300px" 
        height="auto" 
      />
      <VideoHover
        src="./assets/HOCO.mp4"
        width="300px" 
        height="auto" 
      />
      <VideoHover
        src="./assets/afuera1.mp4"
        width="300px" 
        height="auto" 
      />
      <VideoHover
        src="./assets/deitities11.mp4"
        width="300px" 
        height="auto" 
      />
      <VideoHover
        src="./assets/finishedcity.mp4"
        width="300px" 
        height="auto" 
      />
      <VideoHover
        src="./assets/finishedvideoworkout.mp4"
        width="300px" 
        height="auto" 
      />
      <VideoHover
        src="./assets/nyxtracklistshortened.mp4"
        width="300px" 
        height="auto" 
      />
    </div>
    </main>
    </>
  );
};

export default Videography;
