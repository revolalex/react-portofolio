import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [.03, .87, .73, .9],
    duration: .6,
  }


  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Développer</h4>
              <p>JavaScript full-stack</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Looking</h4>
              <p
                style={{ cursor: 'pointer' }}
                className="clipboard"
              >
              for oportunity
              </p>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Contat me</h4>
              <CopyToClipboard text="revolalex@gmail.com" className="hover">
                <p
                  style={{ cursor: 'pointer' }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  revolalex@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Alexandre Rodriguez - {new Date().getFullYear()}</p>
          </div>
        </div>
        <ButtonsBottom left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;