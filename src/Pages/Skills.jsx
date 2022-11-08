
import React, { useState } from "react";
import styles from "../Styles/Skills.module.css";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import { Image } from '@chakra-ui/react'
import reactImg from './Images/react-400.png'
import nodejsImg from './Images/nodejs.png'
import routerImg from './Images/router3.png'
import mongoImg from './Images/mongo.png'
import javaImg from './Images/java.png'
import expressImg from './Images/express.png'
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
                      <img src={reactImg} alt="react-logo" />
                      {/* <Image src='./Images/react-400.png' alt='' /> */}
                <h3>REACT</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src={routerImg} alt=""/>
                
                <h3>Router</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src="https://github.com/shivraj32644/Porfolio/blob/main/public/redux.png?raw=true" alt=""/>
                <h3>Redux</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src={mongoImg} alt=""/>
                <h3>Mongo DB</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src={nodejsImg} alt=""/>
                <h3>Node js</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src={expressImg} alt=""/>
                <h3>Express</h3> 
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.content}>
                <img  src={javaImg} alt=""/>
                <h3>Java</h3> 
            </div>
        </div>
    </div>
    </div>
  );
};
