import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import GlobalStyle from "./theme/globalStyles";
import Header from "./components/Header";
import Home from "./components/Home";
import PictureDay from "./components/PictureDay";
import Rover from "./components/Rover";

const App = () => {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Header />
        <div className="main-wrapper">
          <Route key="/home" path="/" exact component={Home}>
            {({ match }) => {
              return (
                <CSSTransition
                  in={match != null}
                  timeout={{ enter: 1000, exit: 1000 }}
                  classNames="home"
                  unmountOnExit
                >
                  <Home />
                </CSSTransition>
              );
            }}
          </Route>

          <Route
            key="/pictureday"
            path="/pictureday"
            exact
            component={PictureDay}
          >
            {({ match }) => {
              return (
                <CSSTransition
                  in={match != null}
                  timeout={{ enter: 1000, exit: 500 }}
                  classNames="pictureday"
                  unmountOnExit
                >
                  <PictureDay />
                </CSSTransition>
              );
            }}
          </Route>

          <Route
            key="/rover"
            path="/rover"
            exact
            component={Rover}
          >
            {({ match }) => {
              return (
                <CSSTransition
                  in={match != null}
                  timeout={{ enter: 1000, exit: 300 }}
                  classNames="rover"
                  unmountOnExit
                >
                  <Rover />
                </CSSTransition>
              );
            }}
          </Route>
        </div>
      </>
    </Router>
  );
};

export default App;
