// RadialMenu.js
import React, { useEffect, useState } from 'react';
import p from '@/assets/president.png';
import man from '@/assets/man.jpg'
import {
    Button,
    Text,
    Stack, Box, Image
} from "@chakra-ui/react";
import styles from './RadialMenuStyles.module.css';

export default function RadialMenu() {
    const REManager = [
        { I: p, T: 'The ultimate director of the club' },
        { T: 'Study club project' },
        { T: 'Making final decisions' },
        { T: 'Ensures cohesion among all department' },
        { T: 'Fosters communication among them' }
    ]

    const ITManager = [
        { I: man, T: 'b' },
        { T: 'c' },
        { T: 'd' },
        { T: 'f' },
        { T: 'w' }
    ];

    const TEST =[

        
        {
            I:null,
            T: 'find out more about our staff!'
        }

        ]

    const [selectedArray, setSelectedArray] = useState(REManager);
    
    const handleClick = (arrayName) => {
        let selectedArr;
        switch (arrayName) {
            case 'REmanager':
                selectedArr =  REManager;
                break;
            case 'ITmanager':
                selectedArr = ITManager;
                
                    
            
        }
        setSelectedArray(selectedArr);
    };

    
    return (
        <>
            <Stack
                spacing='3em' direction={['column', 'column', 'column', 'row']} align="center" justify="center" p='0px 50px 0px 50px'>
                <div className={styles.wrap} >
                    <a onClick={() => handleClick('REmanager')}>
                        <div><span>RE MANAGER</span></div>
                    </a>
                    <a onClick={() => handleClick('ITmanager')}>
                        <div><span>IT MANAGER</span></div>
                    </a>
                    <a>
                        <div><span>IA MANAGER</span></div>
                    </a>
                    <a>
                        <div><span>RH MANAGER</span></div>
                    </a>
                    <a>
                        {selectedArray[0]?.I && (
                            <Image bgColor='white' backgroundPosition='contain' src={selectedArray[0].I}></Image>
                        )}
                       
                    </a>
                </div>
                <Stack
                    width="320px"
                    height="320px"
                    borderRadius="8"
                    border="1.07px solid transparent" // Transparent border to maintain the border-radius
                    alignSelf="center"
                    borderColor="#D3C8FF"
                    boxShadow="0px 5.36px 16.08px 0px rgba(0, 0, 0, 0.2)"
                    bg="#F7F5FF"
                    alignContent="center"
                    flexDirection="column"
                    alignItems="center"
                    p="1em 0 0 0"
                    position="relative" // Add position relative to the Stack
                >
                    {/* Add the arrow */}
                    <style >{`
    .arrow-left::before {
      content: '';
      position: absolute;
      
      left: -25px; // Adjust the left position as needed
      top: 50%;
      transform: translateY(-20%);
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-right: 25px solid #D3C8FF; // Adjust the border color as needed
    }
  `}</style>

                    <div className="arrow-left">
                        {selectedArray.map((item, index) => (
                            <Button
                                mt={4}
                                borderRadius="15px"
                                w="18em"
                                key={index}
                                style={{
                                    background: 'linear-gradient(90deg, #DEC8FF 0%, #B1A1FF 100%)',
                                }}
                            >
                                <Text
                                    fontSize={{
                                        base: '10px',
                                        sm: '10px',
                                        md: '15px',
                                        lg: '15px',
                                        xl: '15px',
                                        '2xl': '15px',
                                    }}
                                    color="#161851"
                                >
                                    {item.T}
                                </Text>
                            </Button>
                        ))}
                    </div>
                </Stack>
        
            </Stack>
        </>
    )
}

{
    /*
             const [isSpinning, setIsSpinning] = useState(false);
    const [rotationDegrees, setRotationDegrees] = useState(0);

    const wheelStyle = {
        transform: `rotate(${rotationDegrees}deg)`,
        transition: 'transform 5s linear',
    };
 
    *    // useEffect(() => {
    //     let animationFrameId;
    //
    //     const spin = () => {
    //         setRotationDegrees((prevDegrees) => prevDegrees + 0.05);
    //         animationFrameId = requestAnimationFrame(spin);
    //     };
    //
    //     if (!isSpinning) {
    //         spin();
    //     }
    //
    //     return () => {
    //         cancelAnimationFrame(animationFrameId);
    //     };
    //
    // }, [isSpinning]);
    //
    // const handleSpin = () => {
    //     setIsSpinning(!isSpinning);
    // };
    //
    // const handleStopSpin = () => {
    //     setIsSpinning(false);
    //     setRotationDegrees(0);
    // };
    * 
    * 
    * 
    * 
    * 
    * */
    
    
}