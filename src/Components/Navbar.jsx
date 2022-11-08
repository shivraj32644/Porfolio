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
  const {cur, SetCur,aboutRef,introRef,projectRef,githubRef,skillRef,contactRef} = useContext(RefContext)


  // const h = aboutRef.current.offsetHeight
  // console.log(h);

  
  let lastKnownScrollPosition = 0;
  let ticking = false;
  
  function doSomething(scrollPos) {
    // console.log(scrollPos)
    if (scrollPos < 604) {
      SetCur("home")
    }
    if (scrollPos > 605 && scrollPos < 1293) {
      SetCur("about")
    }
    if (scrollPos >= 1293 && scrollPos < 1968) {
      SetCur("skill")
    }
    if (scrollPos >= 1968 && scrollPos < 3943) {
      SetCur("project")
    }
    if (scrollPos >= 3943 && scrollPos < 4800) {
      SetCur("github")
    }
    if (lastKnownScrollPosition > 4800) {
      SetCur("contact")
    }
  }
  
  document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
    

  });
 
 
  const varient = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });

  const handleRef = (e) => {
    introRef.current.scrollIntoView() 
    SetCur("home")
  };
  const handleRef2 = (e) => {
    aboutRef.current.scrollIntoView() 
    SetCur("about");
  

  };
  const handleRef3 = (e) => {
    skillRef.current.scrollIntoView() 
    SetCur("skill")
  };
  const handleRef4 = (e) => { 
    projectRef.current.scrollIntoView()  
    SetCur("project")
  };
  const handleRef5 = (e) => {  
    githubRef.current.scrollIntoView() 
    SetCur("github")
  };
  const handleRef6 = (e) => { 
    contactRef.current.scrollIntoView()  
    SetCur("contact")
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
                className='nav'
            >
              <Box className="nav-item" onClick={handleRef} p='8px' borderBottom={cur==="home"?"3px solid #4dbdfa":"none"} >
                HOME
              </Box>
              <Box className="nav-item" onClick={handleRef2} p='8px' borderBottom={cur==="about"?"3px solid #4dbdfa":"none"} >
                ABOUT
              </Box>
              <Box className="nav-item" onClick={handleRef3} p='8px' borderBottom={cur==="skill"?"3px solid #4dbdfa":"none"}>
                SKILLS
              </Box>
              <Box className="nav-item" onClick={handleRef4} p='8px' borderBottom={cur==="project"?"3px solid #4dbdfa":"none"} >
                PROJECTS
              </Box>
              <Box className="nav-item" onClick={handleRef5} p='8px' borderBottom={cur==="github"?"3px solid #4dbdfa":"none"} >
                GITHUB
              </Box>
              <Box className="nav-item" onClick={handleRef6} p='8px' borderBottom={cur==="contact"?"3px solid #4dbdfa":"none"} >
                CONTACT
              </Box>
              </Flex>
              </Flex>
          </>
        )}
    </Box>
  );
};
