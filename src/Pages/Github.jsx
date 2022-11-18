import { Box, Button, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { Navbar } from "../Components/Navbar";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Global.css";
import {motion} from 'framer-motion'

export const Resume = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });

  const { githubRef } = useContext(RefContext);
  return (
    <Box ref={githubRef} pt="60px" pb={'40px'} >
      <motion.h2
       initial={{ y: -50 ,opacity:0}}
        whileInView={{ y: 0 ,opacity:1}}
        viewport={{once:false, amount:1}}
        transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 500
          }}
        className="sectionHeading" data-outline="Github">
        Github
      </motion.h2>

      <Box
        display={"flex"}
        flexWrap="wrap"
        gap={"20px"}
        justifyContent="center"
        alignItems={"center"}
        flexDirection='column'
      >
        <Box >
        <img src="https://github-profile-trophy.vercel.app/?username=shivraj32644" alt=""/>
        </Box>
        <Box
        
        
          display={'flex'} alignItems='center' flexWrap={'wrap'} columnGap={'15px'}>
          <motion.img
            initial={variant ? { x: 100,opacity:0 } : { x: 300 ,opacity:0} }
          whileInView={{ x: 0, opacity:1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: false, amount: .7 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
          
            src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=shivraj32644&theme=2077" alt="" />
          <motion.img
             initial={variant ? { x: -100 ,opacity:0} : { x: -300,opacity:0 }}
          whileInView={{ x: 0, opacity:1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: false, amount: .7 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
            
            src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=shivraj32644&theme=2077" alt="" />
        </Box>
        <Box
        
        
        >
          <motion.img
            initial={{opacity:0}}
            whileInView={{ opacity: 1, rotateX: [0,360]  }}
            whileHover={{ y: -5 }}
            viewport={{ once: false, amount: .7 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
            
            src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shivraj32644&theme=2077" alt="" />

        </Box>
        <Box
         
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          
        >
       <img src="https://github-readme-streak-stats.herokuapp.com/?user=shivraj32644&theme=tokyonight_duo&hide_border=true&background=DD272700" alt="" />
          
        </Box>

        <Box id="graph"
        // h={}
        >
          <Image h={variant?"4.0rem":"7.25rem"} src="http://ghchart.rshah.org/shivraj32644" alt="Github chart" />

        </Box>
      </Box>


    </Box>
  );
};


/*

[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=shivraj32644&theme=tokyonight_duo&hide_border=true&background=DD272700)](https://git.io/streak-stats)
*/