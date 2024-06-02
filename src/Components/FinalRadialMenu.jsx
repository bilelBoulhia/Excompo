import React, { useState } from 'react';
import p from "@/assets/president.png";
import man from "@/assets/man.jpg";
import DepertmanetsBox from './DepertmanetsBox';

const RadialMenu = () => {


    
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


    const arrayNames = Object.keys(data);

    const handleClick = (name) => {
        const selectedArray = data[name];
        setSelectedArray(selectedArray);
     
    };

    const calculatePosition = (index, total) => {
        const angle = (index / total) * 360;
        const radians = (angle * Math.PI) / 180;
        const radius = 200;
        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);
        return { x, y };
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={styles.container}>
                {arrayNames.map((name, index) => {
                    const { x, y } = calculatePosition(index, arrayNames.length);
                    return (
                        <div
                            key={index}
                            style={{
                                ...styles.item,
                                transform: `translate(${x}px, ${y}px)`,
                            }}
                            onClick={() => handleClick(name)}
                        >
                            {name}
                        </div>
                    );
                })}
            </div>
            <DepertmanetsBox selectedArray={selectedArray} />
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        position: 'absolute',
        padding: '10px',
        borderRadius: '10px',
        background: '#3498db',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
};

export default RadialMenu;
