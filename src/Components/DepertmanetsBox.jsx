import React, { useState } from 'react';
import p from "@/assets/president.png";
import man from "@/assets/man.jpg";
import { Button, Text, Stack, useMediaQuery } from "@chakra-ui/react";

const CombinedComponent = () => {
    const data = {
        ITManager: [
            { I: man, T: 'b' },
            { T: 'c' },
            { T: 'd' },
            { T: 'f' },
            { T: 'w' }
        ],
        ITManager2: [
            { I: man, T: 'b' },
            { T: 'c' },
            { T: 'd' },
            { T: 'f' },
            { T: 'w' }
        ],
        ITManager3: [
            { I: man, T: 'b' },
            { T: 'c' },
            { T: 'd' },
            { T: 'f' },
            { T: 'w' }
        ],
        ITManager4: [
            { I: man, T: 'b' },
            { T: 'c' },
            { T: 'd' },
            { T: 'f' },
            { T: 'w' }
        ],
        ITManager5: [
            { I: man, T: 'b' },
            { T: 'c' },
            { T: 'd' },
            { T: 'f' },
            { T: 'w' }
        ],
        ITManager6: [
            { I: man, T: 'b' },
            { T: 'c' },
            { T: 'd' },
            { T: 'f' },
            { T: 'w' }
        ],
        ITManager7: [
            { I: man, T: 'b' },
            { T: 'c' },
            { T: 'd' },
            { T: 'f' },
            { T: 'w' }
        ],
        REManager: [
            { I: p, T: 'The ultimate director of the club' },
            { T: 'Study club project' },
            { T: 'Making final decisions' },
            { T: 'Ensures cohesion among all department' },
            { T: 'Fosters communication among them' }
        ]
    };

    const [selectedArray, setSelectedArray] = useState(data.ITManager);
    const [selectedImage, setSelectedImage] = useState(man);

    const arrayNames = Object.keys(data);

    const handleClick = (name) => {
        const selectedArray = data[name];
        const selectedImage = selectedArray[0].I || man;
        setSelectedArray(selectedArray);
        setSelectedImage(selectedImage);
    };

    // Media queries for different screen sizes
    const [is320px] = useMediaQuery("(max-width: 320px)");
    const [is480px] = useMediaQuery("(min-width: 321px) and (max-width: 480px)");
    const [is720px] = useMediaQuery("(min-width: 481px) and (max-width: 720px)");
    const [is992px] = useMediaQuery("(min-width: 721px) and (max-width: 992px)");
    const [isBeyond992px] = useMediaQuery("(min-width: 993px)");

    let containerSize = '500px';
    let itemFontSize = '14px';
    let imageSize = '250px';
    let radius = 150;

    if (is320px) {
        containerSize = '200px';
        itemFontSize = '10px';
        imageSize = '150px';
        radius = 120;
    } else if (is480px) {
        containerSize = '250px';
        itemFontSize = '12px';
        imageSize = '200px';
        radius = 150;
    } else if (is720px) {
        containerSize = '300px';
        itemFontSize = '14px';
        imageSize = '230px';
        radius = 170;
    } else if (is992px) {
        containerSize = '350px';
        itemFontSize = '16px';
        imageSize = '250px';
        radius = 180;
    } else if (isBeyond992px) {
        containerSize = '500px';
        itemFontSize = '18px';
        imageSize = '300px';
        radius = 210;
    }

    const calculatePosition = (index, total) => {
        const angle = (index / total) * 360;
        const radians = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);
        return { x, y };
    };

    const radialStyles = {
        container: {
            position: 'relative',
            width: containerSize,
            margin: '50px',
            height: containerSize,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        item: {
            position: 'absolute',
            padding: '10px',
            borderRadius: '10px',
            fontFamily: 'poppins',
            color: '#7450CD',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: itemFontSize,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
        },
        image: {
            border: '1px solid purple',
            background: `url(${selectedImage}) no-repeat center center/contain`,
            height: imageSize,
            width: imageSize,
            borderRadius: '50%',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack direction={['column', 'column', 'column', 'row']} align="center" justify="center">
                <div style={{ ...radialStyles.container }}>
                    <div style={{ ...radialStyles.image }}></div>
                    {arrayNames.map((name, index) => {
                        const { x, y } = calculatePosition(index, arrayNames.length);
                        return (
                            <div
                                key={index}
                                style={{
                                    ...radialStyles.item,
                                    transform: `translate(${x}px, ${y}px)`,
                                }}
                                onClick={() => handleClick(name)}
                            >
                                {name}
                            </div>
                        );
                    })}
                </div>

                <Stack
                    width="320px"
                    height="320px"
                    borderRadius="8"
                    border="1.07px solid transparent"
                    alignSelf="center"
                    borderColor="#D3C8FF"
                    boxShadow="0px 5.36px 16.08px 0px rgba(0, 0, 0, 0.2)"
                    bg="#F7F5FF"
                    alignContent="center"
                    flexDirection="column"
                    alignItems="center"
                    p="1em 0 0 0"
                >
                    <div className="arrow-left">
                        {selectedArray && selectedArray.map((item, index) => (
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
                                        base: '12px',
                                        sm: '12px',
                                        md: '15px',
                                        lg: '15px',
                                        xl: '15px',
                                        '2xl': '15px',
                                    }}
                                    color="#161851"
                                    textShadow="1px 1px 3px rgba(0, 0, 0, 0.2)"
                                >
                                    {item.T}
                                </Text>
                            </Button>
                        ))}
                    </div>
                </Stack>
            </Stack>
        </div>
    );
};

export default CombinedComponent;
