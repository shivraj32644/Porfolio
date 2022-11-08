import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  ScaleFade,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../Components/Navbar";
import styles from "../Styles/About.module.css";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";

export const About = () => {
  const { aboutRef } = useContext(RefContext);
  const varient = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  return (
    <Box ref={aboutRef} mt={'90px'} pt='90px' pb={'90px'}>
      <h2 ref={aboutRef} className={styles.sectionHeading} data-outline="About">
        About me
      </h2>
      <Flex
        margin="auto"
        alignItems={"center"}
        justifyContent='space-around'
        mt={"-140px"}
      >
        {varient ? (
          <>
            
            <Box color={"white"} w={"664px"}>
              <p style={{ color: "#999999", width: "80%", marginLeft: "15px" }}>
              The function of a good software is to make the complex appear to be simple.
              </p>
              <ScaleFade initialScale={0.9} in>
                <TableContainer>
                  <Table
                    className={styles.table}
                    mt="40px"
                    mb={"20px"}
                    size={"sm"}
                    variant="unstyled"
                    w={"80px"}
                  >
                    <Tbody>
                      <Tr>
                        <Td>Name :</Td>
                        <Td>Shivraj</Td>
                      </Tr>
                      <Tr>
                        <Td>Date of Birth :</Td>
                        <Td>February 14, 1999</Td>
                      </Tr>
                      <Tr>
                        <Td>Address :</Td>
                        <Td>Indore, Madhay Pradesh </Td>
                      </Tr>
                      <Tr>
                        <Td>Zip Code :</Td>
                        <Td>453001 </Td>
                      </Tr>
                      <Tr>
                        <Td>Email :</Td>
                        <Td> shivraj32644@gmail.com </Td>
                      </Tr>
                      <Tr>
                        <Td>Mobile :</Td>
                        <Td> +91 8359900115 </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </ScaleFade>
              <a href="https://drive.google.com/file/d/1lAttLQ8_W4kJsezF6pR-h1lPBltgaIcR/view" target={"_blank"}>
              <Button mt={"120px"} ml="15px" bg="#4dbdfa" color={"black"}>
                Download Resume
                </Button>
                </a>
            </Box>
          </>
        ) : (
          <>
              <Box
                w="36%"
                // border={'1px solid white'}
                display='flex'
                alignItems={'center'}
                justifyContent='center'>
                <Image
                  h={"380px"}
                  borderRadius='50%'
                  width={'380px'}
                  // overflow='hidden'
                  objectFit={'contain'}
                  src="https://i.imgur.com/hb7oZvr.jpg" alt="man" />
                {/* <img src={process.env.PUBLIC_URL + './public/img2.png'} alt="logo" /> */}

            </Box>

            <Box color={"white"} w={"664px"}>
              <p style={{ color: "#999999", width: "80%", marginLeft: "15px" }}>
              The function of a good software is to make the complex appear to be simple.
              </p>
              <ScaleFade initialScale={0.9} in>
                <TableContainer>
                  <Table
                    className={styles.table}
                    mt="40px"
                    mb={"20px"}
                    size={"sm"}
                    variant="unstyled"
                    w={"80px"}
                  >
                    <Tbody>
                      <Tr>
                        <Td>Name :</Td>
                        <Td>Shivraj</Td>
                      </Tr>
                      <Tr>
                        <Td>Date of Birth :</Td>
                        <Td>February 14, 1999</Td>
                      </Tr>
                      <Tr>
                        <Td>Address :</Td>
                        <Td>Indore, Madhay Pradesh </Td>
                      </Tr>
                      <Tr>
                        <Td>Zip Code :</Td>
                        <Td>453001 </Td>
                      </Tr>
                      <Tr>
                        <Td>Email :</Td>
                        <Td> shivraj32644@gmail.com </Td>
                      </Tr>
                      <Tr>
                        <Td>Mobile :</Td>
                        <Td> +91 8359900115 </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                </ScaleFade>
                <a href="https://drive.google.com/file/d/1lAttLQ8_W4kJsezF6pR-h1lPBltgaIcR/view" target={'_blank'}>
              <Button mt={"20px"} ml="15px" bg="#4dbdfa" color={"black"}>
                Download Resume
                  </Button>
                  </a>
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
};
