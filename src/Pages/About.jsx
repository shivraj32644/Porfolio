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
import shivrajImg from './Images/faviconWithoutBG.png'
//  myimg from '~/public/faviconWithoutBG.png'


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
import {motion} from 'framer-motion'
import shiv from './Images/shivraj.png'

export const About = () => {
  const { aboutRef } = useContext(RefContext);
  const varient = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  return (
    <Box ref={aboutRef} mt={'90px'} pt='90px' pb={'90px'} >
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: .8,
        }}
        
        ref={aboutRef} className={styles.sectionHeading} data-outline="About">
        About me
      </motion.h2>
      
        {varient ? (
          <>
          <Box
        // margin="auto"
            display={'flex'}
        alignItems={"center"}
            justifyContent='space-around'
            flexDirection={'column'}
            mt={"-90px"}
            // border='1px solid white'
            // overflow={""}
      >
             <Box
                display='flex'
                alignItems={'center'}
                justifyContent='center'>
                <Image
                  h={"150px"}
                borderRadius='50%'
                  width={'150px'}
                  objectFit={'cover'}
                  // src="https://raw.githubusercontent.com/shivraj32644/Porfolio/main/public/favicon.png" alt="man" />
                  src={shivrajImg} alt="man" />
                

            </Box>
            <Box color={"white"} mt='20px' display={'flex'} flexDirection='column' >
              <p style={{ color: "#999999", width: "80%", marginLeft: "30px", textAlign:'justify' }}>
              The function of a good software is to make the complex appear to be simple. - <i>Grady Booch</i> 
              </p>
              <ScaleFade initialScale={0.9} in>
                <TableContainer>
                  <Table
                    className={styles.table}
                    mt="20px"
                    mb={"20px"}
                    size={"sm"}
                    variant="unstyled"
                    w={"80px"}
                    display='flex'
                    
                  >
                    <Tbody>
                      <Tr>
                        <Td>Name :</Td>
                        <Td>Shivraj Dangi</Td>
                      </Tr>
                      <Tr>
                        <Td>Date of Birth :</Td>
                        <Td>February 14, 1999</Td>
                      </Tr>
                      <Tr>
                        <Td>Address :</Td>
                        <Td>Indore, Madhya Pradesh </Td>
                      </Tr>
                      <Tr>
                        <Td>Zip Code :</Td>
                        <Td>453001 </Td>
                      </Tr>
                      <Tr>
                        <Td>Email :</Td>
                        <Td>shivraj32644@gmail.com </Td>
                      </Tr>
                      <Tr>
                        <Td>Mobile :</Td>
                        <Td>+91 8359900115 </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </ScaleFade>
              <a href="https://drive.google.com/file/d/1lAttLQ8_W4kJsezF6pR-h1lPBltgaIcR/view" target={"_blank"}>
              <Button mt={"30px"} ml="15px" bg="#4dbdfa" color={"black"}>
                Download Resume
                </Button>
                </a>
              </Box>
              </Box>
          </>
        ) : (
          <>
          <Flex
        margin="auto"
        alignItems={"center"}
        justifyContent='space-around'
        mt={"-100px"}
      >
              <Box
                w="36%"
                // border={'1px solid white'}
                display='flex'
                alignItems={'center'}
                justifyContent='center'>
                <Image
                  // h={"380px"}
                  borderRadius='20%'
                  // width={'380px'}
                  width={'60%'}

                  // objectFit={'contain'}
                  // src="https://raw.githubusercontent.com/shivraj32644/Porfolio/main/public/favicon.png" alt="myimg" />
                  // src={ window.location.origin+"/favicon.png" } alt="myimg" />
                  src={ shiv} alt="myimg" />
                  {/* // src={ process.env.PUBLIC_URL+"/favicon.png" } alt="myimg" /> */}
                  {/* // src={ "%PUBLIC_URL%/faviconWithoutBG.png" } alt="myimg" /> */}
                {/* process.env.PUBLIC_URL+"/favicon.png" */}

            </Box>

            <Box color={"white"} w={"664px"}>
              <p style={{ color: "#999999", width: "80%", marginLeft: "15px" }}>
              The function of a good software is to make the complex appear to be simple. - <i>Grady Booch</i> 
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
                        <Td>Shivraj Dangi</Td>
                      </Tr>
                      <Tr>
                        <Td>Date of Birth :</Td>
                        <Td>February 14, 1999</Td>
                      </Tr>
                      <Tr>
                        <Td>Address :</Td>
                        <Td>Indore, Madhya Pradesh </Td>
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
              </Flex>
          </>
        )}
      
    </Box>
  );
};
