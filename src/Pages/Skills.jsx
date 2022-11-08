
import React, { useState } from "react";
import styles from "../Styles/Skills.module.css";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import {Image} from '@chakra-ui/react'
export const Skills = () => {
  const { skillRef } = useContext(RefContext);

  return (
    <div ref={skillRef} id={styles.mainBox}>
      <h2 className={"sectionHeading"} data-outline="Skills">
        Skills
      </h2>
      <div className={styles.container}>
        
        <div className={styles.card}>
            <div className={styles.content}>
                <img  src="https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png" alt=""/>
                <h3>HTML</h3>
                
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt=""/>
                <h3>CSS</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt=""/>
                <h3>Javascript</h3> 
            </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
                      {/* <img src="./Images/react-400.png" alt="react-logo" /> */}
                      <Image src='./Images/react-400.png' alt='' />
                <h3>REACT</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src="https://cdn.freebiesupply.com/logos/thumbs/2x/react-router-logo.png" alt=""/>
                <h3>Router</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src="https://w7.pngwing.com/pngs/724/234/png-transparent-redux-react-javascript-vue-js-single-page-application-others.png" alt=""/>
                <h3>Redux</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src="" alt=""/>
                <h3>Mongo DB</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src="" alt=""/>
                <h3>Node js</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src="" alt=""/>
                <h3>Express</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src="" alt=""/>
                <h3>Java</h3> 
            </div>
        </div>
    </div>
    </div>
  );
};
