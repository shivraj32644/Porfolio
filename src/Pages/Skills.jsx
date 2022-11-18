import React, { useRef, useState } from "react";
import styles from "../Styles/Skills.module.css";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import { Image, useBreakpointValue } from "@chakra-ui/react";
import reactImg from "./Images/react-400.png";
import nodejsImg from "./Images/nodejs.png";
import routerImg from "./Images/router3.png";
import mongoImg from "./Images/mongo.png";
import javaImg from "./Images/java.png";
import expressImg from "./Images/express.png";
import { calcLength, motion } from "framer-motion";
import { Variants } from "framer-motion";

export const Skills = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const handleView = () => {
    console.log("hello");
  };
  const { skillRef } = useContext(RefContext);
  // const cardVariants: Variants = {
  //     offscreen: {
  //       y: 300
  //     },
  //     onscreen: {
  //       y: 50,
  //       rotate: -10,
  //       transition: {
  //         type: "spring",
  //         bounce: 0.4,
  //         duration: 0.8
  //       }
  //     }
  //   };

  return (
    <motion.div ref={skillRef} id={styles.mainBox}>
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 3.5,
          type: "spring",
          stiffness: 500,
        }}
        className={"sectionHeading"}
        data-outline="Skills"
      >
        Skills
      </motion.h2>
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={variant ? { x: 50 } : { x: -200 ,opacity:0 , rotate:180}}
          whileInView={{ x: 0,opacity:1, rotate:0 }}
          
          // animate={{ rotate: 360 }}
          whileHover={{ y: -15 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 300,
            // bounce:.5
          }}
          //  onViewportLeave={{x:"-100px"}}
        >
          <div className={styles.content}>
            <img
              src="https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png"
              alt=""
            />
            <h3>HTML</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={variant ? { x: -50 } : { x: -200 }}
          whileInView={{ x: 0,  }}
          
          // animate={{rotate:360}}
          whileHover={{ y: -15 }}
          transition={{ duration: 1, type: "spring", stiffness: 300 }}
        >
          <div className={styles.content}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
              alt=""
            />
            <h3>CSS</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={variant ? { x: 50 } : { x: -200 }}
          whileInView={{ x: 0,  }}
          
          animate={{ rotate: 360 }}
          whileHover={{ y: -15 }}
          transition={{ duration: 1, type: "spring", stiffness: 300 }}
        >
          <div className={styles.content}>
            <img
              src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
              alt=""
            />
            <h3>Javascript</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={variant ? { x: -50 } : { x: -200 }}
          whileInView={{ x: 0,  }}
          
          animate={{ rotate: 360 }}
          whileHover={{ y: -15 }}
          transition={{ duration: 1, type: "spring", stiffness: 300 }}
        >
          <div className={styles.content}>
            <img src={reactImg} alt="react-logo" />
            {/* <Image src='./Images/react-400.png' alt='' /> */}
            <h3>REACT</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={variant ? { x: 50 } : { x: -200 }}
          whileInView={{ x: 0,  }}
          
          animate={{ rotate: 360 }}
          whileHover={{ y: -15 }}
          transition={{ type: "spring", stiffness: 300, duration: 1 }}

          // transition={{}}
        >
          <div className={styles.content}>
            <img src={routerImg} alt="" />

            <h3>Router</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={variant ? { x: -50 } : { x: 100 ,opacity:0}}
          whileInView={{ x: 0,opacity:1  }}
          viewport={{ once: false, amount: .7 }}
          animate={{ rotate: 360 }}
          whileHover={{ y: -15 }}
          transition={{ type: "spring", stiffness: 300, duration: 1 }}
        >
          <div className={styles.content}>
            <img
              src="https://github.com/shivraj32644/Porfolio/blob/main/public/redux.png?raw=true"
              alt=""
            />
            <h3>Redux</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={variant ? { x: 50 } : { x: 300 ,opacity:0}}
          whileInView={{ x: 0,opacity:1 }}
          viewport={{ once: false, amount: .7 }}
          animate={{ rotate: 360 }}
          whileHover={{ y: -15 }}
          transition={{ type: "spring", stiffness: 300, duration: 1 }}
        >
          <div className={styles.content}>
            <img src={mongoImg} alt="" />
            <h3>Mongo DB</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={variant ? { x: -50 } : { x: 300,opacity:0 }}
          whileInView={{ x: 0,opacity:1  }}
          viewport={{ once: false, amount: .7 }}
          animate={{ rotate: 360 }}
          whileHover={{ y: -15 }}
          transition={{ type: "spring", stiffness: 300, duration: 1 }}
        >
          <div className={styles.content}>
            <img src={nodejsImg} alt="" />
            <h3>Node js</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          // initial={variant ? { x: '100px' }:{x:"200px"}}
          // whileInView={{x:0}}
          initial={variant ? { x: 50 } : { x: 300 ,opacity:0}}
          whileInView={{ x: 0, opacity:1 }}
          viewport={{ once: false, amount: .7 }}
          animate={{ rotate: 360 }}
          transition={{ type: "spring", stiffness: 300, duration: 1 }}
          whileHover={{ y: -15 }}
        >
          <div className={styles.content}>
            <img src={expressImg} alt="" />
            <h3>Express</h3>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={variant ? { x: 50 } : { x: 100 ,opacity:0}}
          whileInView={{ x: 0, opacity:1 }}
          viewport={{ once: false, amount: .7 }}
          animate={{ rotate: 360 }}
          transition={{ type: "spring", stiffness: 300, duration: 1 }}
          whileHover={{ y: -15 }}
        >
          <div className={styles.content}>
            <img src={javaImg} alt="" />
            <h3>Java</h3>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
