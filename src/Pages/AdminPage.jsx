import {Stack} from "@chakra-ui/react";
import NavBar from "@/Admin_Components/NavBar.jsx";
import CreateEvent from "@/Admin_Components/CreateEvent.jsx";
import {motion} from "framer-motion";
import DarkLightTheme from "@/Theme/DarkLightTheme.jsx";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import EventManagement from "@/AdminSubPages/EventManagement.jsx";
export  default function AdminPage(){
    
    
    
    
    
    return(

        <>


            <motion.div
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}
            >
                <NavBar></NavBar>
            </motion.div>

            <motion.div
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}
            >
                <DarkLightTheme/>
            </motion.div>

           


        </>


    )


}