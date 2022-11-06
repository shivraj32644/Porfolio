import {
  Box,
  Center,
  Flex,
  Heading,
  Highlight,
  HStack,
  useBreakpointValue,
  useOutsideClick,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
import Typewriter from "typewriter-effect";
import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RefContext } from "../Context/RefContext";
export const Navbar = () => {
  const {aboutRef,introRef,projectRef,githubRef,skillRef,contactRef} = useContext(RefContext)
 


  
    


  const varient = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const homeRef = useRef(null);
  const about = useRef(null);
  const skill = useRef(null);
  const project = useRef(null);
  const github = useRef(null);
  const contect = useRef(null);
  // // const [isModalOpen, setIsModalOpen] = React.useState(false)
  useOutsideClick({
    ref: homeRef,
    handler: () => (homeRef.current.style.borderBottom = "none"),
  });
  useOutsideClick({
    ref: about,
    handler: () => (about.current.style.borderBottom = "none"),
  });
  useOutsideClick({
    ref: skill,
    handler: () => (skill.current.style.borderBottom = "none"),
  });
  useOutsideClick({
    ref: project,
    handler: () => (project.current.style.borderBottom = "none"),
  });
  useOutsideClick({
    ref: github,
    handler: () => (github.current.style.borderBottom = "none"),
  });
  useOutsideClick({
    ref: contect,
    handler: () => (contect.current.style.borderBottom = "none"),
  });

  const handleRef = (e) => {
    homeRef.current.style.borderBottom = "3px solid #4dbdfa";
    introRef.current.scrollIntoView() 

    
  };
  const handleRef2 = (e) => {
    about.current.style.borderBottom = "3px solid #4dbdfa";
    aboutRef.current.scrollIntoView() 

  };
  const handleRef3 = (e) => {
    skill.current.style.borderBottom = "3px solid #4dbdfa";
    skillRef.current.scrollIntoView() 
  };
  const handleRef4 = (e) => {
    project.current.style.borderBottom = "3px solid #4dbdfa";
    projectRef.current.scrollIntoView()   
  };
  const handleRef5 = (e) => {
    github.current.style.borderBottom = "3px solid #4dbdfa";
     githubRef.current.scrollIntoView()   
  };
  const handleRef6 = (e) => {
    contect.current.style.borderBottom = "3px solid #4dbdfa";
    contactRef.current.scrollIntoView()  
  };
  return (
    <Box className={styles.navbar}
      position='sticky'
      top={'0px'}
      backgroundColor ='#000'
      h='80px'
      zIndex={'600'}
      w={'100%'}
    
    >
      
        {varient ? (
          <>

            <Flex
        height="60px"
        display="flex"
        align="center"
        justifyContent="space-between"
      >
            <Center w="20%" h="40px" bg="transparent">
              <Heading fontSize={"22px"}>
                <Highlight
                  query={"S"}
                  styles={{
                    px: "0",
                    py: "1",
                    color: "#4dbdfa",
                    fontSize: "35px",
                  }}
                >
                  SHIVRAJ
                </Highlight>
              </Heading>
            </Center>{" "}
              <AiOutlineMenu />{" "}
              </Flex>
          </>
        ) : (
          <>
            <Flex
        // spacing="24px"
        height="60px"
        // width={"90%"}
        margin="auto"
        display="flex"
        align="center"
        justifyContent="space-around"
      >
            <Center w="20%" h="40px" bg="transparent">
              <Heading fontSize={"22px"}>
                <Highlight
                  query={"S"}
                  styles={{
                    px: "0",
                    py: "1",
                    color: "#4dbdfa",
                    fontSize: "35px",
                  }}
                >
                  SHIVRAJ
                </Highlight>
              </Heading>
              </Center>
              
              <Flex
                w={'800px'}
                h={"100%"}
                transition='.5s'
              alignItems="center"
              justifyContent={"space-around"}
                // border={'1px solid white'}
            >
              <Box onClick={handleRef} ref={homeRef}>
                HOME
              </Box>
              <Box onClick={handleRef2} ref={about}>
                ABOUT
              </Box>
              <Box onClick={handleRef3} ref={skill}>
                SKILLS
              </Box>
              <Box onClick={handleRef4} ref={project}>
                PROJECTS
              </Box>
              <Box onClick={handleRef5} ref={github}>
                GITHUB
              </Box>
              <Box onClick={handleRef6} ref={contect}>
                CONTACT
              </Box>
              </Flex>
              </Flex>
          </>
        )}
    </Box>
  );
};
