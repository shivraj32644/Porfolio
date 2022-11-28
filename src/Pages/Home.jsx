import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../Components/Navbar";
import { Skills } from "./Skills";
import { Project } from "./Project";
import { Resume } from "./Github";
import { About } from "./About";
import { Intro } from "./Intro";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import { Contact } from "./Contact";

export const Home = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  return (
    <>
      <Navbar />
    <Container bg={"#000"} overflow="hidden"  maxW={ variant ? "96%" :"86%" }>
      <Intro />
      <About />
      <Skills />
      <Project />
      <Resume />
      <Contact/>
      </Container>
      </>
  );
};
