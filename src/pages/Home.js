import React from "react";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Home = () => {

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    }
  };

  return (
    <main>
      <div className="desktopMain">
        <Mouse />
        <motion.div
          className="home"
          initial="initial"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          <Navigation />
          <SocialNetwork />
          <div className="home-main">
            <div className="main-content">
              <h3>Discover 10 projects I liked to realize</h3>
              <motion.h1 drag onDragEnd dragConstraints={{ left: -250, right: 950, top: -200, bottom: 250 }}>
                Dev JavaScript
            </motion.h1>
              <motion.h2 drag onDragEnd dragConstraints={{ left: -250, right: 1250, top: -200, bottom: 250 }}>
                <DynamicText />
              </motion.h2>
            </div>
          </div>
          <ButtonsBottom right={"/project-1"} />
        </motion.div>
      </div>

      <div className="smallMain">
        <div className="smallDiv">
          <h3>Sorry but this website containt effect only available on desktop version.</h3>
          <br/>
          <h3>Please try to make you screen size bigger</h3>
        </div>
      </div>
    </main>

  );
};

export default Home;
