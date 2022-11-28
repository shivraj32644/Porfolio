
import { Box } from '@chakra-ui/react';

import { motion } from "framer-motion";
import { useRef } from 'react';
import { Navbar } from './Components/Navbar';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Resume } from './Pages/Github';
import { Home } from './Pages/Home';
import { Intro } from './Pages/Intro';
import { Project } from './Pages/Project';
import { Skills } from './Pages/Skills';
import styles from './Styles/Global.css'
function App() {
  return (
    <Box bg='#000' >
      
      <Home></Home>
   </Box>
  );
}

export default App;



/*
How to import images from public folder



*/