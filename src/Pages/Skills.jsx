import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { ImHtmlFive2 } from "react-icons/im";
import styles from "../Styles/Skills.module.css";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SkillSlider } from "../Components/SkillSlider";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
export const Skills = () => {
  const { skillRef } = useContext(RefContext);
 
  return (
    <div ref={skillRef} id={styles.mainBox}>
       <h2 className={'sectionHeading'} data-outline="Skills">
            Skills
          </h2>
      <div className={styles.container}  >
        <div className={styles.servicebox} >
        <div className={styles.icon} style={{backgroundColor:"#4eb7ff"}} >
            < ImHtmlFive2 className={styles.ionicon} />
            
        </div>
        <div className={styles.content}>
        <h2>HTML</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusamus possimus doloribus quaerat nulla nemo. Repudiandae animi,
            sapiente dolores non debitis
          </p> */}
            {/* <SkillSlider val={90} /> */}
        </div>
        </div>


        <div className={styles.servicebox}>
        <div className={styles.icon} style={{backgroundColor:"#fd6494"}}>
           < DiCss3 className={styles.ionicon}/>
        </div>
        <div className={styles.content}>
          <h2>CSS</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusamus possimus doloribus quaerat nulla nemo. Repudiandae animi,
            sapiente dolores non debitis
          </p> */}
        </div>
        </div>


        <div className={styles.servicebox}>
        <div className={styles.icon} style={{backgroundColor:"#43f390"}}>
           < SiJavascript className={styles.ionicon}/>
        </div>
        <div className={styles.content}>
          <h2>Javascript</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusamus possimus doloribus quaerat nulla nemo. Repudiandae animi,
            sapiente dolores non debitis
          </p> */}
        </div>
        </div>


        <div className={styles.servicebox}>
        <div className={styles.icon} style={{backgroundColor:"#ffb508"}}>
           < FaReact className={styles.ionicon}/>
        </div>
        <div className={styles.content}>
          <h2>React</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusamus possimus doloribus quaerat nulla nemo. Repudiandae animi,
            sapiente dolores non debitis
          </p> */}
        </div>
        </div>


        <div className={styles.servicebox}>
        <div className={styles.icon} style={{backgroundColor:"#37ba82"}}>
           < DiMongodb className={styles.ionicon}/>
        </div>
        <div className={styles.content}>
          <h2>Mongo DB</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusamus possimus doloribus quaerat nulla nemo. Repudiandae animi,
            sapiente dolores non debitis
          </p> */}
        </div>
        </div>


        <div className={styles.servicebox}>
        <div className={styles.icon} style={{backgroundColor:"#cd57ff"}}>
           <Image src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" className={styles.ionicon} h="80px" />
        </div>
        <div className={styles.content}>
          <h2>Express js</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusamus possimus doloribus quaerat nulla nemo. Repudiandae animi,
            sapiente dolores non debitis
          </p> */}
        </div>
        </div>


        <div className={styles.servicebox}>
        <div className={styles.icon} style={{backgroundColor:"#4eb7ff"}}>
           < FaNodeJs className={styles.ionicon}/>
        </div>
        <div className={styles.content}>
          <h2>Node js</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusamus possimus doloribus quaerat nulla nemo. Repudiandae animi,
            sapiente dolores non debitis
          </p> */}
        </div>
        </div>
        

       
      </div>
    </div>
  );
};
