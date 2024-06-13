import React, {useEffect, useState} from "react";
import bg from "@/assets/312111599074.jpg"
import bg2 from "@/assets/182.jpg"
import bg3 from "@/assets/Abstract-form-of-fluid.png"

import {
    Box, Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import useFetchAllFormation from "@/Effect Hooks/useFetchAllformations.jsx";
import ApplicationModal from "@/Components/ApplicationModal.jsx";
import MoreFormationsGrid from "@/Components/MoreFormationsGrid.jsx";
import SearchBar from "@/Components/Searchbar.jsx";
import Footer from "@/Components/Footer.jsx";
import {motion} from "framer-motion";
import NavBar from "@/Components/NavBar.jsx";
import ShowBar from "@/Components/ShowBar.jsx";
import bg1 from '@/assets/bg1.png'
import MoreAboutEvents from "@/Components/MoreAboutEvents.jsx";

export  default  function SeeMoreAboutEvent(){


    return(


        <>


            <Stack  >
                <motion.div

                    style={{background: 'linear-gradient(109.63deg, #B4A3FF 39.55%, #DEC8FF 96.98%)'}}
                    initial={{y: -100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                >

                 <ShowBar/>


                </motion.div>
                <motion.div
                    initial={{y: -100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
            
                >
            
                    <MoreAboutEvents/>
                </motion.div>


                <motion.div
                    initial={{y: -100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}

                  

                >



                    <Footer/>

                </motion.div>


            </Stack>


        </>


    )


}