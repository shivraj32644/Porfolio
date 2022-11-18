import { Box, useBreakpointValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Global.css";
import { TfiDirectionAlt } from "react-icons/tfi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import {motion} from 'framer-motion'
const data = [
  {
    title: "ADDRESS",
    des:"Indore, Madhya Pradesh"
  },
  {
    title: "LINKEDIN",
    des:"Indore, Madhya Pradesh"
  },
  {
    title: "GITHUB",
    des:"Indore, Madhya Pradesh"
  },
  {
    title: "TWITTER",
    des:"Indore, Madhya Pradesh"
  },
  {
    title: "MOBILE",
    des:"Indore, Madhya Pradesh"
  },
  {
    title: "EMAIL",
    des:"Indore, Madhya Pradesh"
  },
  
]

export const Contact = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const { contactRef } = useContext(RefContext);
  return (
    <Box pt="50px" pb={"50px"} ref={contactRef}>
      <motion.h2
        initial={{ y: -50 ,opacity:0}}
        whileInView={{ y: 0 ,opacity:1}}
        viewport={{once:false, amount:1}}
        transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 500
          }}
        
        className={"sectionHeading"} data-outline="Contact">
        Contact
      </motion.h2>
      <Box display="flex"
        gap='20px'
        flexWrap={"wrap"}
        justifyContent='center'
        w="80%"
        margin={"auto"}
        
      >
        

        <a href="https://www.linkedin.com/in/shivraj-dangi-203892232/" target={'_blank'} >
          <Box w={"220px"}
            as={motion.div}
            initial={variant ? { x: -100 } : { x: -200 }}
          whileInView={{ x: 0,  }}
          whileHover={{ y: -15 }}
          transition={{ duration: 1, type: "spring", stiffness: 300 }}
        p='20px'
          display='flex'
          flexDirection={'column'}
          alignItems={'center'}
          h='180px'
            justifyContent='space-between'
            borderRadius={'8px'}
            boxShadow= "rgba(80, 202, 246, 0.84) 0px 2px 6px">
          <Box
            bgColor={"#1a1a1a"}
            borderRadius="50%"
            h={"80px"}
            w="80px"
            color={"#4dbdfa"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            fontSize={"38px"}
          >
            <AiFillLinkedin />
          </Box>
          <Box
            color={"#fff"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
          >
              <h2 >LinkedIn</h2>
              <p style={{color:"#999999"}}>shivraj-dangi-203892232</p>
          </Box>
        </Box>
        </a>

        <a href="https://github.com/shivraj32644" target={'_blank'} >
          <Box w={"220px"}
             as={motion.div}
            initial={variant ? { x: 100 } : { x: -200 }}
          whileInView={{ x: 0,  }}
          whileHover={{ y: -15 }}
          transition={{ duration: 1, type: "spring", stiffness: 300 }}
        p='20px'
          display='flex'
          flexDirection={'column'}
          alignItems={'center'}
          h='180px'
            justifyContent='space-between'
            borderRadius={'8px'}
            boxShadow= "rgba(80, 202, 246, 0.84) 0px 2px 6px"
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
            fontSize={"35px"}
          >
            <BsGithub />
          </Box>
          <Box
            color={"#fff"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
          >
            <h2>GITHUB</h2>
            <p style={{color:"#999999"}}>shivraj32644</p>
          </Box>
          </Box>
          </a>

          <a href="https://twitter.com/Shivraj86224489" target={'_blank'} >
          <Box w={"220px"}
             as={motion.div}
            initial={variant ? { x: -100 } : { x: 200 }}
          whileInView={{ x: 0,  }}
          whileHover={{ y: -15 }}
          transition={{ duration: 1, type: "spring", stiffness: 300 }}
        p='20px'
          display='flex'
          flexDirection={'column'}
          alignItems={'center'}
          h='180px'
            justifyContent='space-between'
            borderRadius={'8px'}
            boxShadow= "rgba(80, 202, 246, 0.84) 0px 2px 6px"
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
            fontSize={"30px"}
          >
            <BsTwitter />
          </Box>
          <Box
            color={"#fff"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
          >
            <h2>Twitter</h2>
            <p style={{color:"#999999"}}>Shivraj86224489</p>
          </Box>
        </Box>
        </a>

        <a href="mailto:shivraj32644@gmail.com" target={'_blank'} >
          <Box w={"220px"}
             as={motion.div}
            initial={variant ? { x: 100 } : { x: 200 }}
          whileInView={{ x: 0,  }}
          whileHover={{ y: -15 }}
          transition={{ duration: 1, type: "spring", stiffness: 300 }}
        p='20px'
          display='flex'
          flexDirection={'column'}
          alignItems={'center'}
          h='180px'
            justifyContent='space-between'
            borderRadius={'8px'}
            boxShadow= "rgba(80, 202, 246, 0.84) 0px 2px 6px"
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
            fontSize={"35px"}
          >
            <AiOutlineMail />
          </Box>
          <Box
            color={"#fff"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
          >
            <h2>Email</h2>
            <p style={{color:"#999999"}} >shivraj32644@gmail</p>
          </Box>
          </Box>
          </a>
      </Box>
    </Box>
  );
};
