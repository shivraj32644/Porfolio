import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../Components/Navbar";
import { Skills } from "./Skills";
import { Project } from "./Project";
import { Resume } from "./Resume";
import { About } from "./About";
import { Intro } from "./Intro";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";

export const Home = () => {
  const allref = useContext(RefContext)
  console.log(allref)
  return (
    <Container bg={"#000"}  maxW={'86%'}>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Project />
      <Resume />
    </Container>
  );
};
