import React, {useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoRocketSharp } from "react-icons/io5";
import SatelliteVector from "./illustrations/SatelliteVector"


const Home = () => {
  
  return (
    <HomeContainer>
      <PictureDayLink>
        <Link to="pictureday">Picture of the day<IoRocketSharp /></Link>
      </PictureDayLink>
      <RoverLink>
        <Link to="rover">Latest photos of the Curiosity Rover<IoRocketSharp /></Link>
      </RoverLink>
      <Satellite>
        <SatelliteVector/>
      </Satellite>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  overflow:hidden;
  position: absolute;
  top:0;
  left: 0;
  
  @media screen and (max-width: 425px) {
    padding: 8em 1rem 1rem 2rem;
    justify-content: center;
  
  }
  
  @media screen and (min-width: 767px) {
    padding: 3rem;
  }
`;

const PictureDayLink = styled.div`
  display: flex;
  align-items: center;
  
  text-shadow: 2px 2px 2px rgb(24, 27, 27, 0.8);
  font-size: 30px;
  margin: 1rem 0;
  @media screen and (max-width: 425px) {
    font-size: 20px;
    align-items:left;
    width: 100%;
  }

  a {
    text-decoration: none;
    font-family: "Space Mono", monospace;

    color: #be1e2d;
    transition: all ease-in-out 0.2s;


  }

  svg {

    color: #be1e2d;
    margin-left: 1rem;
    transition: all 0.3s ease-in-out;


  }

  &:hover{
    a{
      color:#32b7e0;
    }
    svg{
      animation: moveRocketPicture 0.3s infinite linear alternate;
      color:#32b7e0;
    }
  }

  @keyframes moveRocketPicture{
    from{
      transform: translate(0,0);
    }
    to{
      transform: translate(3px,-3px);
    }
  }
`;

const RoverLink = styled.div`
  display: flex;
  text-shadow: 2px 2px 2px rgb(24, 27, 27, 0.8);
  align-items: center;
  font-size: 30px;
  margin: 1rem 0;

  @media screen and (max-width: 425px) {
    width: 100%;
    font-size: 20px;
    align-items:left;
  }

  a {
    text-decoration: none;
    font-family: "Space Mono", monospace;
    
    color: #be1e2d;
    transition: all ease-in-out 0.2s;


  }

  svg {

    color: #be1e2d;
    margin-left: 1rem;
    transform: rotate(180deg);
    transition: all 0.3s ease-in-out;


  }

  &:hover{
    a{
      color:#32b7e0;
    }
    svg{
      animation: moveRocketRover 0.3s infinite linear alternate;
      color:#32b7e0;
    }
  }

  @keyframes moveRocketRover{
    from{
      transform: translate(0,0) rotate(180deg);
    }
    to{
      transform: translate(-3px,3px) rotate(180deg);
    }
  }
`;

const Satellite = styled.div`
  position:absolute;
  top: 0;
  right: 0;
  transform: rotate(180deg) translate(-100px,-100px);
  animation: movingSatellite 10s infinite linear;
  z-index: -1;
  @keyframes movingSatellite{
    from{
      
      transfor:rotate(180deg);
    }

    to{
      transform:translate(-1000px,1000px) rotate(200deg) scale(0.4);
    }   
  }

  @media screen and (max-width: 425px){
    @keyframes movingSatellite{
    from{
      
      transfor:rotate(180deg);
    }

    to{
      transform:translate(-800px,1000px) rotate(200deg) scale(0.4);
    }   
  }
  }
`