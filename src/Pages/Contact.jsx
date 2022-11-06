import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Global.css";
import { TfiDirectionAlt } from "react-icons/tfi";
export const Contact = () => {
  const { contactRef } = useContext(RefContext);
  return (
    <Box pt="50px" pb={"50px"} ref={contactRef}>
      <h2 className={"sectionHeading"} data-outline="Contact">
        Contact
      </h2>
      <Box display="flex" gap='20px'  flexWrap={"wrap"} w="80%" margin={"auto"}>
        <Box w={"22%"}
        p='20px'
          display='flex'
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent='space-around'
          border="1px solid white"
        >
          <Box
            bgColor={"#1a1a1a"}
            borderRadius="50%"
            h={"80px"}
            w="80px"
            color={"#4dbdfa"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            fontSize={"28px"}
          >
            <TfiDirectionAlt />
          </Box>
          <Box
            color={"#fff"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
          >
            <h2>ADDRESS</h2>
            <p>Indore, Madhya Pradesh</p>
          </Box>
        </Box>

        <Box w={"22%"}
        p='20px'
         display='flex'
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent='space-around'
          border="1px solid white">
          <Box
            bgColor={"#1a1a1a"}
            borderRadius="50%"
            h={"80px"}
            w="80px"
            color={"#4dbdfa"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            fontSize={"28px"}
          >
            <TfiDirectionAlt />
          </Box>
          <Box
            color={"#fff"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
          >
            <h2>ADDRESS</h2>
            <p>Indore, Madhya Pradesh</p>
          </Box>
        </Box>


        <Box w={"22%"}
        p='20px'
         display='flex'
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent='space-around'
        
          border="1px solid white">
          <Box
            bgColor={"#1a1a1a"}
            borderRadius="50%"
            h={"80px"}
            w="80px"
            color={"#4dbdfa"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            fontSize={"28px"}
          >
            <TfiDirectionAlt />
          </Box>
          <Box
            color={"#fff"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
          >
            <h2>ADDRESS</h2>
            <p>Indore, Madhya Pradesh</p>
          </Box>
        </Box>


        <Box w={"22%"}
        p='20px'
         display='flex'
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent='space-around'
        
          border="1px solid white">
          <Box
            bgColor={"#1a1a1a"}
            borderRadius="50%"
            h={"80px"}
            w="80px"
            color={"#4dbdfa"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            fontSize={"28px"}
          >
            <TfiDirectionAlt />
          </Box>
          <Box
            color={"#fff"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
          >
            <h2>ADDRESS</h2>
            <p>Indore, Madhya Pradesh</p>
          </Box>
        </Box>


        <Box w={"22%"}
        p='20px'
         display='flex'
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent='space-around'
          border="1px solid white">
          <Box
            bgColor={"#1a1a1a"}
            borderRadius="50%"
            h={"80px"}
            w="80px"
            color={"#4dbdfa"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            fontSize={"28px"}
          >
            <TfiDirectionAlt />
          </Box>
          <Box
            color={"#fff"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
          >
            <h2>ADDRESS</h2>
            <p>Indore, Madhya Pradesh</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
