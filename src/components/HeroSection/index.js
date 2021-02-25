import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowDownlad,
  DownloadFile,
  HeroAvatar
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import Avatar from "../../images/avatar.png";
import Typewriter from 'typewriter-effect';


const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const typingEffect=()=>{
   
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            playsInline
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <HeroAvatar src={Avatar}>
          </HeroAvatar>
          <HeroH1>Hi, I'm Hemanth</HeroH1>
          <HeroP>I'm a<Typewriter 
              options={{
                strings: ["front-end developer!", 'back-end developer!', 'software engineer!', 'tech enthusiast!'],
                autoStart: true,
                loop: true,
              }}
            />
            </HeroP>
          <HeroBtnWrapper>
            <Button to="../files/resume.pdf" target="_blank" download onMouseEnter={onHover} onMouseLeave={onHover}>
              {hover ? <DownloadFile size={30}/> : <ArrowDownlad size={30}/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
