import React from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Highlight,
  HStack,
  Image,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from "../Styles/Home.module.css";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import gif from './Images/introGif.gif'

export const Intro = () => {
  const { introRef } = useContext(RefContext);
  const varient = useBreakpointValue(
    {
      base: true,
      md: false,
      lg: false,
      
    }
  )
  return (
    <Center ref={introRef} >
      <Flex
        // w={"95%"}
        h="90vh"
        margin="auto"
        justifyContent={"space-around"}
        alignItems="center"
        spacing={5}
        borderRadius={"8px"}
        color="#fff"
        
      >
        {varient ? (
          <>
            <Box>
              
          <Heading lineHeight="tall" textAlign="start">
            <Heading fontFamily="monospace" color='#4dbdfa' mb={'15px'} size="sm" fontSize="35px">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 35,
                  cursor:"",
                  
                  typeString:('A simple yet powerful native javascript'),
                  strings: [
                    
                    "Hello 👋",
                    "Hii 👋",
                    "Namaste 🙏" ,
                  ],
                  
                }}
              />
            </Heading>
          </Heading>
         
          <Heading lineHeight="tall">
            <Highlight
              query={"Shivraj Dangi"}
              styles={{ px: "2", py: "1", color: "#4dbdfa" }}
            >
              I am Shivraj Dangi
            </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Web Developer"}
              styles={{ px: "0", py: "1", color: "#4dbdfa" }}
            >
              Aspiring Full Stack
            </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Developer"}
              styles={{ px: "0", py: "1", color: "#4dbdfa" }}
            >
              Developer
            </Highlight>
          </Heading>
        </Box>
        </>

      ):(
      <>
              <Box w={"42%"}>
              {/* <img style={{height:'45px'}} src='https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif' alt='' />", */}
          <Heading lineHeight="tall" textAlign="start">
            <Heading fontFamily="monospace" color='#4dbdfa' mb={'15px'} size="sm" fontSize="35px">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 35,
                  cursor:"",
                  
                  typeString:('A simple yet powerful native javascript'),
                  strings: [
                    
                    "Hello 👋 ",
                    "Hii 👋",
                    "Namaste 🙏" ,
                  ],
                  
                }}
              />
            </Heading>
          </Heading>
         
          <Heading lineHeight="tall">
            <Highlight
              query={"Shivraj Dangi"}
              styles={{ px: "2", py: "1", color: "#4dbdfa" }}
            >
              I am Shivraj Dangi
            </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Web Developer"}
              styles={{ px: "0", py: "1", color: "#4dbdfa" }}
            >
              Aspiring Full Stack
            </Highlight>
          </Heading>
          <Heading lineHeight="tall">
            <Highlight
              query={"Developer"}
              styles={{ px: "0", py: "1", color: "#4dbdfa" }}
            >
              Developer
            </Highlight>
          </Heading>
        </Box>



        <Box w={"40%"}>
          <Image
            src={
              gif
            }
            alt="img2"
          />
                {/* <Image
                  borderRadius={'30px'}
            src={
              "https://i.pinimg.com/originals/18/a4/94/18a4949fc9c8067172d3b96e302e7097.gif"
            }
            alt="img2"
          /> */}
        </Box>
      </>
        )}
        
      </Flex>
    </Center>
  );
};

/*


<Highlight
              query={"Hii"}
              styles={{ px: "0", py: "1", color: "#4dbdfa" }}
            >
              Hii 👋
            </Highlight>


*/
