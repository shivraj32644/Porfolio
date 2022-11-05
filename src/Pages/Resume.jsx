import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { Navbar } from "../Components/Navbar";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Global.css";
export const Resume = () => {
  const { resumeRef } = useContext(RefContext);
  return (
    <Box ref={resumeRef} pb={'40px'} >
      <h2 className="sectionHeading" data-outline="Resume">
        Resume
      </h2>

      <Box
        display={"flex"}
        flexWrap="wrap"
        gap={"20px"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Box borderRadius={'5px'} w={"500px"} bg="#1a1a1a" p={"30px"}>
          <Heading as="h2" size="lg" color={"#4dbdfa"} noOfLines={1}>
            2021-2022
          </Heading>
          <Text color={"white"}>Full Stack Web Development</Text>
          <Text color={"white"}> Masai School </Text>
        </Box>

        <Box borderRadius={'5px'} w={"500px"} bg="#1a1a1a" p={"30px"}>
          <Heading as="h2" size="lg" color={"#4dbdfa"} noOfLines={1}>
            2021-2022
          </Heading>
          <Text color={"white"}>Full Stack Web Development</Text>
          <Text color={"white"}> Masai School </Text>
        </Box>

        <Box borderRadius={'5px'} w={"500px"} bg="#1a1a1a" p={"30px"}>
          <Heading as="h2" size="lg" color={"#4dbdfa"} noOfLines={1}>
            2021-2022
          </Heading>
          <Text color={"white"}>Full Stack Web Development</Text>
          <Text color={"white"}> Masai School </Text>
        </Box>

        <Box borderRadius={'5px'} w={"500px"} bg="#1a1a1a" p={"30px"}>
          <Heading as="h2" size="lg" color={"#4dbdfa"} noOfLines={1}>
            2021-2022
          </Heading>
          <Text color={"white"}>Full Stack Web Development</Text>
          <Text color={"white"}> Masai School </Text>
        </Box>

        <Box borderRadius={'5px'} w={"500px"} bg="#1a1a1a" p={"30px"}>
          <Heading as="h2" size="lg" color={"#4dbdfa"} noOfLines={1}>
            2021-2022
          </Heading>
          <Text color={"white"}>Full Stack Web Development</Text>
          <Text color={"white"}> Masai School </Text>
        </Box>

        <Box borderRadius={'5px'} w={"500px"} bg="#1a1a1a" p={"30px"}>
          <Heading as="h2" size="lg" color={"#4dbdfa"} noOfLines={1}>
            2021-2022
          </Heading>
          <Text color={"white"}>Full Stack Web Development</Text>
          <Text color={"white"}> Masai School </Text>
        </Box>

        <Box
          w={"500px"}
          mt='30px'
          display="flex"
          justifyContent="center"
          alignItems={"center"}
        >
          <Button bg="#4dbdfa" color={"black"}>
            Download Resume
          </Button>
        </Box>
      </Box>


    </Box>
  );
};
