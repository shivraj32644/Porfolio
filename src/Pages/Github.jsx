import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { Navbar } from "../Components/Navbar";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Global.css";
export const Resume = () => {
  const { githubRef } = useContext(RefContext);
  return (
    <Box ref={githubRef} pt="60px" pb={'40px'} >
      <h2 className="sectionHeading" data-outline="Github">
        Github
      </h2>

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
        <Box   display={'flex'} alignItems='center' flexWrap={'wrap'} columnGap={'15px'}>
          <img src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=shivraj32644&theme=2077" alt="" />
          <img src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=shivraj32644&theme=2077" alt="" />
        </Box>
        <Box >
          <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shivraj32644&theme=2077" alt="" />

        </Box>
        <Box
         
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          
        >
       <img src="https://github-readme-streak-stats.herokuapp.com/?user=shivraj32644&theme=tokyonight_duo&hide_border=true&background=DD272700" alt="" />
          
        </Box>

        <Box id="graph">
          <img src="http://ghchart.rshah.org/4dbdfa/shivraj32644" alt="Github chart" />

        </Box>
      </Box>


    </Box>
  );
};


/*

[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=shivraj32644&theme=tokyonight_duo&hide_border=true&background=DD272700)](https://git.io/streak-stats)
*/