import {Avatar, HStack, Text, WrapItem} from "@chakra-ui/react";
import twitter from "@/assets/twitter.png";
import f from "@/assets/facebook.png";
import y from "@/assets/youtube.png";
import i from "@/assets/instagram.png";
import t from "@/assets/tiktok.png";

import React from "react";
import {Icon} from "@chakra-ui/icons";

export  default function () {
    
    return(

        <HStack
            mt={5}w
            p="2"
            justifyContent="center"
            spacing={5}
        >
            <Text fontWeight="semibold" fontSize={["lg", "xl", "2xl"]}>
                Watch More
            </Text>

            <WrapItem>
                <Avatar
                    boxSize='2.25em'
                    name='Kola Tioluwani'
                    src={twitter}
                />{' '}
            </WrapItem>

            <WrapItem>
                <Avatar
                    boxSize='2.25em'
                    name='Kola Tioluwani'
                    src={f}
                />{' '}
            </WrapItem>
            <WrapItem>
                <Avatar
                    boxSize='2.25em'
                    name='Kola Tioluwani'
                    src={t}
                />{' '}
            </WrapItem>
            <WrapItem>
                <Avatar
                    boxSize='2.25em'
                    name='Kola Tioluwani'
                    src={i}
                />{' '}
            </WrapItem>
                
             
       
         
        </HStack>
        
        
    )
    
}