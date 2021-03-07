import React from "react";
import styled from "styled-components";
import SpaceVector from "./illustrations/SpaceVector";
import RoverVector from "./illustrations/RoverVector";
import { Link, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Header() {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Title>
            Garzon
            <br />
            Space
          </Title>
        </Link>
        <TransitionGroup>
          {useLocation().pathname === "/pictureday" && (
            <CSSTransition
              in={true}
              timeout={{ enter: 1000, exit: 2000 }}
              classNames="fade"
            >
              <SpaceVector />
            </CSSTransition>
          )}
          {useLocation().pathname === "/rover" && (
            <CSSTransition
              in={true}
              timeout={{ enter: 1000, exit: 2000 }}
              classNames="fade"
            >
              <RoverVector />
            </CSSTransition>
          )}
        </TransitionGroup>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-self: flex-start;
  padding: 1rem 2rem;
  justify-content: flex-start;
  align-items: center;
  height: 250px;
  @media screen and (max-width: 425px) {
    padding: 1rem;
  }

  a {
    text-decoration: none;
  }

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
`;

const Title = styled.div`
  font-size: 40px;
  font-family: "Space Mono", monospace;
  color: #be1e2d;
  font-weight: bold;
`;
