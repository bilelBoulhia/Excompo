﻿import NavBar from "@/Components/NavBar.jsx";
import WelcomePage from "@/Components/WelcomePage.jsx";
import { motion } from 'framer-motion';
import {Stack} from "@chakra-ui/react";
import Carousel from "@/Components/Carousel.jsx";
import FormationCards from "@/Components/FormationCards.jsx";
import MainService from "@/Components/MainService.jsx";
import VisitUs from "@/Components/VisitUs.jsx";
import Whyus from "@/Components/Whyus.jsx";
import AnotherCarousel from "@/Components/AnotherCarousel.jsx";
import GetInTouch from "@/Components/GetInTouche.jsx";
import GroupPictures from "@/Components/GroupPictures.jsx";
import Footer from "@/Components/Footer.jsx";
export  default function LandingPage(){
    
    
    
    return(

        <>
            <Stack spacing='1px'>

                <motion.div
                    initial={{y: -100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    <NavBar/>
                </motion.div>


                <motion.div
                    id="home"
                    initial={{x: 100, opacity: 0}}

                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <WelcomePage/>
                </motion.div>


                <motion.div
                    id="Team"
                    initial={{x: 100, opacity: 0}}

                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <Carousel/>
                </motion.div>
                <motion.div
                    initial={{x: 100, opacity: 0}}

                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <VisitUs/>
                </motion.div>


                <motion.div
                    id="Formations"
                    initial={{x: 100, opacity: 0}}

                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <FormationCards/>
                </motion.div>

                <motion.div
                    id="About Us"
                    initial={{x: 100, opacity: 0}}

                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <MainService/>
                </motion.div>

                <motion.div
                    initial={{x: 100, opacity: 0}}

                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <Whyus/>
                </motion.div>

                <motion.div
                    id="Reviews"
                    initial={{x: 100, opacity: 0}}

                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <AnotherCarousel/>
                </motion.div>
                <motion.div
                    initial={{x: 100, opacity: 0}}

                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <GetInTouch/>
                </motion.div>
                <motion.div
                    initial={{x: 100, opacity: 0}}

                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <GroupPictures/>
                </motion.div>
                <motion.div
                    initial={{x: 100, opacity: 0}}

                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <Footer/>
                </motion.div>

            </Stack>


        </>


    );


}