import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { IoRocketSharp } from "react-icons/io5";
import moment from "moment";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Spaceman from "./illustrations/SpacemanVector";

const Rover = () => {
  const [data, setData] = useState("");

  useEffect(()=>{
    let date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    let formatDate = moment(date).format('YYYY-MM-DD');
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formatDate}&camera=mast&page=1&api_key=${process.env.REACT_APP_NASA_KEY}`)
    .then((response)=> response.json())
    .then((result) => setData(result)).catch((error) => console.log(error));
  },[]);

  return (
    <RoverContainer>
      <SimpleReactLightbox>
        <SRLWrapper>
          <TransitionGroup>
            {data ? (
              <CSSTransition
                in={true}
                timeout={{ enter: 1000, exit: 1000 }}
                classNames="spaceman"
              >
        
                <div className="gallery">
                  {data.photos.map((image) => {
                    return (
                      <figure className="item" id={image.id}>
                        <img src={image.img_src} alt={image.id} />
                      </figure>
                    );
                  })}
                </div>
              </CSSTransition>
            ) : (
              <CSSTransition
                in={true}
                timeout={{ enter: 1000, exit: 1000 }}
                classNames="spaceman"
              >
                <Spaceman />
              </CSSTransition>
            )}
          </TransitionGroup>
        </SRLWrapper>
      </SimpleReactLightbox>
      <HomeLink>
        <Link to="/">
          Go back home
          <IoRocketSharp />
        </Link>
      </HomeLink>
    </RoverContainer>
  );
};

export default Rover;

const RoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 1rem;
  width: 70%;
  margin: 0 auto;

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-rows: auto;
    grid-gap: 1rem;
    width: 100%;
  }

  .item {
    transition: all 1s ease-in-out;
    &:hover {
      cursor: pointer;
      img {
        box-shadow: 1px 2px 20px -2px rgba(50, 183, 224, 0.61);
      }
    }

    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const HomeLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 2px rgb(24, 27, 27, 0.8);
  font-size: 30px;
  margin: 2rem 0;
  @media screen and (max-width: 425px) {
    font-size: 20px;
    align-items: left;
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

  &:hover {
    a {
      color: #32b7e0;
    }
    svg {
      animation: moveRocketPicture 0.3s infinite linear alternate;
      color: #32b7e0;
    }
  }

  @keyframes moveRocketPicture {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(3px, -3px);
    }
  }
`;
