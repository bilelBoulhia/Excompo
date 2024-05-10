import {Box, Flex, HStack, Image, Stack, Text} from '@chakra-ui/react';
import bg1 from '@/assets/bg1.png';

export default function MoreAboutEvents() {
    // Sample array of random image URLs
    const randomImages = [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
    ];

    return (
        <>
            <Box
                
                h="500px" // Adjust the height as needed
                backgroundImage={`url(${bg1})`}
                backgroundSize="cover"
                backgroundPosition="center"
                mb="4"
            >
                {/* You can add any additional styling or content for the box here */}
            </Box>

            <Flex
                direction={["column", "column", "column", "row"]}
                align="center"
                justify="center"
                wrap="nowrap"
             
                
                h='100%'
            >
                {randomImages.map((imageUrl, index) => (
                    <Image key={index} src={imageUrl} alt={`Random Image ${index}`} m={5}/>
                ))}
            </Flex>

            <Box mb="4">
                <Text>
                    Breaking News: Scientists Discover New Species of Giant Squid

                    In a groundbreaking discovery, marine biologists have identified a new species of giant squid lurking in the depths of the Pacific Ocean. The elusive creature, tentatively named Magnisquidus giganteus, is estimated to measure up to 30 meters in length, making it one of the largest known cephalopods.

                    The discovery was made during an expedition led by a team of researchers from the Oceanic Institute of Marine Biology. Dr. Rebecca Martinez, the lead scientist on the expedition, described the moment of discovery as "truly awe-inspiring."

                    "We were conducting routine deep-sea exploration when our underwater cameras captured footage of this massive creature gliding through the darkness," Dr. Martinez said in a statement. "We couldn't believe our eyes. It was unlike anything we had ever seen before."

                    Initial observations suggest that Magnisquidus giganteus possesses unique anatomical features, including unusually large eyes and elongated tentacles. Scientists speculate that these adaptations may help the creature navigate the pitch-black depths of the ocean and locate prey.

                    "This discovery challenges our understanding of deep-sea ecosystems and highlights the importance of continued exploration and research," said Dr. James Anderson, a marine biologist not involved in the study. "The fact that such a large and mysterious creature has evaded detection until now underscores how much we still have to learn about the world's oceans."

                    The newfound giant squid has already captured the imagination of scientists and the public alike, sparking renewed interest in the study of marine biology and deep-sea exploration. Researchers are now eager to conduct further studies to learn more about this enigmatic creature and its role in the underwater ecosystem.
                </Text>
            </Box>
        </>
    );
}
