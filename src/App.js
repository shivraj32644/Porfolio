
import { Box } from '@chakra-ui/react';

import { motion } from "framer-motion";
import { AllRoutes } from './Routes/AllRoutes';
import styles from './Styles/Global.css'
function App() {
  return (
   <Box  bg='#000' >
    <AllRoutes/>
   </Box>
  );
}

export default App;
