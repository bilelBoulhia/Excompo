import {Card, CardBody, Stack} from "@chakra-ui/react";
import NavBar from "@/Admin_Components/NavBar.jsx";

import {motion} from "framer-motion";
import DarkLightTheme from "@/Theme/DarkLightTheme.jsx";

export  default function AdminPage(){
    
    
    
    
    
    return(

        <>


            <motion.div
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}
            >
                <Card borderRadius='0px'>
                    <CardBody>
                        <NavBar></NavBar>

                        <DarkLightTheme/>
                    </CardBody>

                </Card>
      

            
            </motion.div>

           


        </>


    )


}