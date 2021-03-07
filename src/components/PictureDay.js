import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import moment from "moment";
import { Link } from "react-router-dom";
import { IoRocketSharp } from "react-icons/io5";

const PictureDay = () => {

  const [data, setData] = useState('');

  useEffect(()=>{
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`)
    .then((response)=> response.json())
    .then((result) => setData(result)).catch((error) => console.log(error));
  },[]);

  return (
    <PictureDayContainer>
      <div className="pictureDay">
        <MediaContainer>
          {(data.media_type === 'image' ? <img src={data.url} alt="landscape"/> : <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={data.url}
                width="100%"
                height="100%"
              />
            </div> )}
        </MediaContainer>
        <Content>
          <h2>{data.title}</h2>
          <span>
            {moment(data.date).format("MMMM Do YY")}
          </span>
          <hr />
          <p>
            {data.explanation}
          </p>
        </Content>
      </div>
      <HomeLink>
        <Link to="/">Go back home<IoRocketSharp /></Link>
      </HomeLink>
    </PictureDayContainer>
  );
};

export default PictureDay;

const PictureDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 1rem;
  width: 100%;

  .pictureDay{
    display: flex;
    flex-direction:column;
    width:80%;
    max-width: 700px;
    margin: 0 auto;
    @media screen and (max-width:425px){
      width:100%;
    }
  }
`;

const MediaContainer = styled.div`


  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
    border-radius: 5px;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    

  }

`;

const Content = styled.div`
  background-color: rgba(4, 31, 43, 0.788);
  padding: 1rem;
`;

const HomeLink = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  height:80px;
  font-size: 30px;
  @media screen and (max-width: 425px) {
    font-size: 20px;
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