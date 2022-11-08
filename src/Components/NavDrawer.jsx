import React, { useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Center,
  Box,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { RefContext } from "../Context/RefContext";

export const NavDrawer = () => {
  const {
    MobileCur,
    SetMobileCur,
    aboutRef,
    introRef,
    projectRef,
    githubRef,
    skillRef,
      contactRef,
  } = useContext(RefContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
    };
    
    let lastKnownScrollPosition = 0;
    let ticking = false;
    
    function doSomething(scrollPos) {
    //   console.log(scrollPos)
      if (scrollPos < 700) {
        SetMobileCur("home")
      }
      if (scrollPos >= 700 && scrollPos < 1400) {
        SetMobileCur("about")
      }
      if (scrollPos >= 1400 && scrollPos < 4200) {
        SetMobileCur("skill")
      }
      if (scrollPos >= 4200 && scrollPos < 6700) {
        SetMobileCur("project")
      }
      if (scrollPos >= 6700 && scrollPos < 7900) {
        SetMobileCur("github")
      }
      if (lastKnownScrollPosition > 7900) {
        SetMobileCur("contact")
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

  const handleRef = (e) => {
    introRef.current.scrollIntoView();
    SetMobileCur("home");
    onClose();
  };
  const handleRef2 = (e) => {
    aboutRef.current.scrollIntoView();
    SetMobileCur("about");
    onClose();
  };
  const handleRef3 = (e) => {
    skillRef.current.scrollIntoView();
    SetMobileCur("skill");
    onClose();
  };
  const handleRef4 = (e) => {
    projectRef.current.scrollIntoView();
    SetMobileCur("project");
    onClose();
  };
  const handleRef5 = (e) => {
    githubRef.current.scrollIntoView();
    SetMobileCur("github");
    onClose();
  };
  const handleRef6 = (e) => {
    contactRef.current.scrollIntoView();
    SetMobileCur("contact");
    onClose();
  };

  return (
    <>
      <AiOutlineMenu onClick={() => handleClick()} />

      <Drawer
        onClose={onClose}
        colorScheme="cyan"
        isOpen={isOpen}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={'#fff'} />
          {/* <DrawerHeader>{`${size} drawer contents`}</DrawerHeader> */}
                  <DrawerBody
                      bg={'#000'}
                      blur='2xl'
                      color={"#fff"}
                  >
            <Flex
              margin="auto"
              display="flex"
              align="center"
              flexDirection={"column"}
              justifyContent="space-around"
            >
              <Flex
                alignItems="center"
                justifyContent={"space-around"}
                className="nav"
                direction={"column"}
              >
                <Box
                  className="nav-item"
                  onClick={handleRef}
                  p="8px"
                  border={MobileCur === "home" ? "1px solid #4dbdfa" : "none"}
                >
                  HOME
                </Box>
                <Box
                  className="nav-item"
                  onClick={handleRef2}
                  p="8px"
                  border={MobileCur === "about" ? "1px solid #4dbdfa" : "none"}
                >
                  ABOUT
                </Box>
                <Box
                  className="nav-item"
                  onClick={handleRef3}
                  p="8px"
                  border={MobileCur === "skill" ? "1px solid #4dbdfa" : "none"}
                >
                  SKILLS
                </Box>
                <Box
                  className="nav-item"
                  onClick={handleRef4}
                  p="8px"
                  border={
                    MobileCur === "project" ? "1px solid #4dbdfa" : "none"
                  }
                >
                  PROJECTS
                </Box>
                <Box
                  className="nav-item"
                  onClick={handleRef5}
                  p="8px"
                  border={MobileCur === "github" ? "1px solid #4dbdfa" : "none"}
                >
                  GITHUB
                </Box>
                <Box
                  className="nav-item"
                  onClick={handleRef6}
                  p="8px"
                  border={
                    MobileCur === "contact" ? "1px solid #4dbdfa" : "none"
                  }
                >
                  CONTACT
                </Box>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
