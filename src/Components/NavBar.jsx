﻿'use client'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import {
    Box,
    Flex,

    useDisclosure,
    useColorModeValue,
    Stack, Text,
} from '@chakra-ui/react'

import { Divider } from '@chakra-ui/react'
const Links = [ 'Home', 'Team', 'About','Reviews' , 'Contact' ,'Formations']



export default function NavBar() {


    return (
        <>

            <Box  top={0} left={0} right={0} zIndex={1000} alignItems={'center'}>
                <Flex justifyContent="center"   color='grey' fontSize='12px' fontWeight='bold'
                      alignItems="center" p='0px 10px 0px 10px'>

                    
                    <svg width="90" height="74"   viewBox="0 0 98 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3_378)">
                            <path
                                d="M15.2496 29.9353C15.2453 29.9118 15.2239 29.8947 15.1993 29.8947C10.2558 29.8947 5.31224 29.8947 0.369804 29.8936C-0.0781451 29.8936 -0.207814 29.0921 0.502688 29.0931C5.3326 29.0931 10.155 29.0931 14.9699 29.0931C15.0471 29.0931 15.1092 29.0311 15.1092 28.9531C15.1092 28.9467 15.1092 28.9403 15.1082 28.9339C14.9196 27.6449 14.7674 26.3645 14.6527 25.0927C14.5273 23.7022 14.4384 22.8664 14.4566 21.772C14.4684 21.0805 14.9796 20.8357 15.5872 20.684C23.3084 18.7441 28.6356 11.7426 27.8276 3.72456C27.7536 2.9839 27.8308 2.32981 28.627 2.16201C42.238 -0.710872 55.7858 -0.720491 69.2703 2.13422C69.9669 2.28171 70.2701 2.73594 70.1791 3.49691C69.2178 11.5459 74.5407 18.6715 82.2683 20.6594C83.4353 20.9597 83.5875 21.2953 83.5168 22.5201C83.3925 24.694 83.1792 26.8615 82.8781 29.0215C82.8738 29.0557 82.8974 29.0878 82.9317 29.0921C82.9349 29.0921 82.9381 29.0921 82.9413 29.0921H97.5607C98.2519 29.0921 98.0858 29.8926 97.3571 29.8926C92.5058 29.8936 87.6533 29.8947 82.802 29.8936C82.7538 29.8936 82.727 29.9172 82.7195 29.9642L82.5844 30.8438C82.5802 30.8748 82.6005 30.9036 82.6316 30.9079C82.6348 30.9079 82.637 30.9079 82.6402 30.9079C87.0275 30.9079 91.4159 30.9079 95.8043 30.9068C96.1708 30.9068 96.4226 30.9859 96.4998 31.3557C96.5073 31.3931 96.503 31.4284 96.4848 31.4615C96.3658 31.6849 96.2179 31.8858 96.0401 32.0622C94.4262 33.6761 92.7672 35.3295 91.0644 37.0224C91.0194 37.0673 91.0183 37.14 91.0644 37.1849C92.7972 38.9131 94.5451 40.6573 96.309 42.4165C96.6016 42.7083 96.6798 43.2395 96.1762 43.34C95.7282 43.4297 94.9898 43.3603 94.6212 43.3603C89.4462 43.3571 84.2659 43.3571 79.0812 43.3592C79.0094 43.3592 78.9601 43.3923 78.9312 43.4575L78.5936 44.2452C78.5733 44.2922 78.5958 44.3457 78.6429 44.366C78.6547 44.3713 78.6665 44.3735 78.6794 44.3735H97.6668C97.744 44.3735 97.8158 44.4077 97.8651 44.4675C98.1716 44.8384 97.9101 45.1483 97.4889 45.1483H78.2946C78.2357 45.1483 78.1832 45.1836 78.1596 45.237C72.4992 58.0539 62.4332 68.669 49.0612 73.487C49.0269 73.4988 48.9926 73.4999 48.9572 73.4902C48.8126 73.4507 48.6357 73.3909 48.4257 73.3128C35.2541 68.3783 25.3928 57.8807 19.8009 45.1879C19.7902 45.1644 19.7677 45.1494 19.742 45.1494C13.2628 45.1494 6.82969 45.1451 0.443747 45.1355C-0.140301 45.1355 -0.0985064 44.3948 0.283 44.3948C6.62822 44.381 12.9756 44.3724 19.3272 44.3703C19.3583 44.3703 19.384 44.3446 19.384 44.3136C19.384 44.3072 19.383 44.2997 19.3808 44.2933L19.0668 43.4479C19.0508 43.4062 19.0208 43.3859 18.9768 43.3859C12.8095 43.3507 7.29265 43.3432 2.42629 43.3635C2.11659 43.3645 1.704 43.4041 1.51432 43.1294C1.36429 42.9103 1.40823 42.6827 1.64506 42.4443C3.40149 40.6873 5.1665 38.9259 6.94114 37.1603C6.97329 37.1282 6.97329 37.0769 6.94114 37.0459C5.19222 35.3134 3.44543 33.5713 1.69972 31.8207C1.24855 31.3696 1.59577 30.9165 2.15838 30.9111C6.4932 30.8652 10.8698 30.8684 15.2882 30.9207C15.3611 30.9207 15.4211 30.863 15.4211 30.7903C15.4211 30.7807 15.4211 30.7722 15.4189 30.7636L15.2496 29.9332V29.9353ZM16.5292 23.341C17.9652 43.6328 28.9603 63.7152 48.8126 71.3089C48.9272 71.3527 49.1073 71.3463 49.2016 71.3099C69.2124 63.573 80.3436 43.107 81.5021 22.5832C81.5032 22.5522 81.4892 22.533 81.4592 22.5244C73.0714 20.265 67.6307 12.744 68.0872 4.09757C68.0926 3.99817 68.0465 3.93939 67.949 3.91908C61.3648 2.58952 54.5941 1.89909 47.757 2.02841C41.7611 2.1417 35.821 2.77442 29.9355 3.92656C29.8883 3.93511 29.8551 3.97893 29.8583 4.02703C30.4188 12.7376 24.9041 20.1742 16.5517 22.5148C16.5099 22.5265 16.4895 22.5533 16.4906 22.596C16.4949 22.783 16.5077 23.0321 16.5292 23.341Z"
                                fill="#7D35C2"/>
                            <path
                                d="M48.9421 70.0618C30.0726 62.855 19.2039 43.8617 17.5257 24.5424C17.4871 24.0989 17.3199 23.8338 17.859 23.6436C25.0862 21.0881 30.2237 15.0549 31.5343 7.56059C31.6897 6.66603 31.8043 5.86551 31.8761 5.15905C31.9158 4.76146 32.5534 4.7636 32.8631 4.71016C43.7821 2.81307 54.7279 2.84621 65.7005 4.80955C65.8281 4.832 65.9352 4.86941 66.022 4.92071C66.0553 4.94101 66.0756 4.96987 66.081 5.00835C66.1399 5.45403 66.1967 5.89544 66.2492 6.3347C67.2223 14.4617 72.5719 21.0604 80.3146 23.7163C80.4496 23.7622 80.4989 23.9236 80.4914 24.0658C80.4625 24.6183 80.4014 25.3152 80.3071 26.1542C78.2013 44.8931 67.3562 62.9266 49.1564 70.0318C49.0611 70.0693 48.9893 70.0799 48.9421 70.0618ZM18.3262 24.3928C19.923 43.2589 30.4862 61.9626 48.8993 69.2196C48.9346 69.2335 48.9711 69.2356 49.0075 69.2249C49.1639 69.1822 49.3172 69.1298 49.4683 69.0678C66.4046 62.1357 76.7642 45.514 79.2387 27.9497C79.3962 26.835 79.5419 25.6818 79.677 24.4879C79.6866 24.4035 79.6373 24.3244 79.5569 24.2945C71.5292 21.3446 66.1356 14.2202 65.3662 5.72443C65.3576 5.62931 65.2858 5.55129 65.1926 5.53526C54.5629 3.63069 43.6632 3.65955 33.0292 5.48609C32.7485 5.53419 32.6434 5.51281 32.6113 5.84306C31.7861 14.3644 26.385 21.3222 18.3744 24.3159C18.3423 24.3276 18.323 24.3597 18.3262 24.3928Z"
                                fill="#7D35C2"/>
                            <path
                                d="M28.6526 24.3662C28.2508 24.0039 28.1822 23.5668 28.4479 23.0569C28.5819 22.7994 29.0545 22.5664 29.3353 22.4039C35.7876 18.6899 42.2411 14.9791 48.6967 11.2715C49.0396 11.0738 49.7116 11.4938 50.0127 11.668C56.404 15.3393 62.7953 19.0116 69.1855 22.6829C70.2518 23.2963 69.6667 24.7584 68.5393 24.5671C68.3947 24.5425 68.1964 24.4581 67.9435 24.3117C61.654 20.681 55.3613 17.0568 49.0632 13.4369C49.0332 13.4198 48.9968 13.4198 48.9657 13.4369C42.7094 17.0301 36.4542 20.6244 30.2001 24.2198C29.7039 24.5051 29.182 24.8439 28.6526 24.3662Z"
                                fill="#7D35C2"/>
                            <path
                                d="M42.9784 46.041C42.1736 45.498 41.5767 44.783 41.1898 43.8948C41.1684 43.8435 41.1255 43.8029 41.0719 43.7848C38.4368 42.8848 36.8914 40.416 37.3458 37.6521C37.3512 37.6168 37.3405 37.5858 37.3137 37.5613C37.1433 37.4084 36.975 37.2631 36.8089 37.1231C34.7846 35.413 34.0334 32.7549 34.8993 30.2754C35.2947 29.1393 36.8743 29.5871 36.5657 30.8376C35.9677 33.2701 36.7361 35.1266 38.8718 36.408C39.3895 36.7191 39.3487 37.0792 39.1976 37.6435C38.7561 39.2927 39.4827 40.9792 40.9798 41.8118C41.1662 41.9155 41.5778 42.0565 42.2132 42.2361C42.6998 42.3729 42.8884 43.3947 43.0984 43.6811C44.7177 45.8956 48.0966 44.9561 48.1009 42.1517C48.1073 37.6949 48.1084 33.2455 48.103 28.8037C48.103 28.7556 48.0634 28.716 48.0141 28.716C48.0119 28.716 48.0098 28.716 48.0076 28.716C47.4482 28.762 46.9821 28.9725 46.6102 29.3498C46.3948 29.5689 46.2662 29.9387 46.0712 30.1364C45.6339 30.5778 45.0167 30.5308 44.6673 30.0349C44.2258 29.4075 44.8259 28.684 45.2728 28.1645C45.5889 27.7979 44.5366 27.1332 44.274 27.0327C43.8561 26.8735 43.2667 26.9675 42.9387 26.6405C42.2486 25.9543 42.9645 25.0287 43.7929 25.1078C45.1292 25.2339 46.1515 25.8602 46.8599 26.9878C46.891 27.037 46.9489 27.0637 47.0067 27.0541L48.0355 26.8938C48.0741 26.8873 48.103 26.8542 48.103 26.8157C48.1084 25.4017 48.1073 23.9899 48.0998 22.5802C48.0869 20.0044 45.3478 18.7315 43.4703 20.4918C43.0406 20.8947 42.9795 21.3917 42.255 21.4986C40.2864 21.7893 38.904 23.4576 39.0594 25.4456C39.1001 25.9735 39.3552 26.493 39.5523 27.0038C39.9156 27.9476 38.7357 28.4082 38.1121 28.6156C37.3748 28.8614 36.8379 28.0438 37.1079 27.3822C37.1851 27.1941 37.3415 27.0733 37.4808 26.929C37.5259 26.882 37.5419 26.8147 37.5226 26.7527C36.511 23.5902 38.4325 20.5206 41.5938 19.7629C41.6646 19.7458 41.8103 19.6218 41.8757 19.548C43.8497 17.3025 47.0024 17.3592 48.9368 19.6282C48.9668 19.6635 49.0193 19.6677 49.0557 19.6367C49.0589 19.6335 49.0632 19.6303 49.0654 19.6271C50.7114 17.636 53.4741 17.3089 55.492 18.9474C55.6624 19.0853 55.925 19.3557 56.2808 19.7586C56.3054 19.7864 56.3354 19.8045 56.3719 19.812C59.1506 20.433 61.0099 22.8805 60.6788 25.7074C60.6391 26.0462 60.5663 26.4256 60.4602 26.8478C60.4505 26.8852 60.4613 26.9151 60.4923 26.9376C62.3506 28.2746 63.434 29.9109 63.4683 32.2024C63.5015 34.3624 62.521 36.2541 60.7345 37.5057C60.6777 37.5452 60.6488 37.6136 60.6595 37.682C61.0807 40.4726 59.5868 42.8848 56.912 43.8168C56.8594 43.835 56.8166 43.8756 56.7951 43.9269C56.359 44.97 55.7278 45.5376 54.8297 46.1799C54.8008 46.2002 54.7783 46.228 54.7644 46.2611C54.4729 46.9558 54.2521 47.6687 54.101 48.3997C53.8074 49.8266 54.2361 51.1647 53.6006 52.5787C52.5214 54.9802 49.7951 56.2852 47.2553 55.3479C45.5611 54.7237 44.349 53.3525 43.9847 51.573C43.7725 50.5341 44.0072 49.3349 43.7521 48.2362C43.5839 47.5127 43.3503 46.8094 43.0513 46.1275C43.0352 46.0923 43.0116 46.0634 42.9784 46.041ZM53.1376 35.1234C54.0474 35.7059 53.2191 36.8291 52.65 37.4533C52.6232 37.4822 52.62 37.5142 52.6393 37.5484C52.8976 37.9984 53.2641 38.3137 53.741 38.4943C54.1117 38.6354 54.5372 38.5627 54.8823 38.7626C55.7567 39.2692 55.193 40.4961 54.2939 40.4245C52.9233 40.3166 51.872 39.6892 51.139 38.5424C51.1058 38.49 51.0447 38.4622 50.9825 38.4719L50.0223 38.6193C49.9698 38.6279 49.9302 38.6717 49.928 38.7252C49.8916 39.748 49.8873 40.7761 49.9152 41.8107C49.942 42.8218 50.0448 43.5293 50.7371 44.1845C51.8956 45.2832 53.6927 45.125 54.7269 43.8884C55.192 43.3316 55.1662 42.3932 55.9571 42.203C57.6503 41.7968 58.9642 40.4085 58.9352 38.5926C58.9288 38.179 58.8088 37.7323 58.7295 37.2983C58.5762 36.4551 59.426 36.237 59.9361 35.8352C62.6163 33.7243 62.0805 29.7666 59.112 28.234C58.199 27.7627 58.2558 27.3662 58.6384 26.5015C59.0124 25.6529 59.0145 24.551 58.6309 23.7045C58.0554 22.438 57.0277 21.6984 55.5467 21.4868C55.3945 21.4654 55.1609 21.304 55.0516 21.1523C54.5061 20.3966 53.9735 19.8943 53.0519 19.7468C51.7777 19.5427 50.4885 20.2577 50.0845 21.505C49.9752 21.8427 49.9216 22.4369 49.9237 23.2866C49.9334 27.7766 49.9302 32.2676 49.9141 36.7597C49.9141 36.7864 49.9355 36.8078 49.9623 36.8078C49.9623 36.8078 49.9634 36.8078 49.9645 36.8078C50.5989 36.781 51.1111 36.5235 51.5001 36.034C51.8902 35.5434 52.1978 34.5206 53.1376 35.1234ZM45.6929 47.5586L52.0703 47.5554C52.1249 47.5554 52.1603 47.5298 52.1763 47.4774L52.381 46.803C52.3982 46.7474 52.3778 46.7175 52.3199 46.7132C50.9965 46.6021 49.9216 46.0388 49.0954 45.0235C49.0546 44.9743 48.9818 44.9668 48.9325 45.0064C48.926 45.0106 48.9207 45.016 48.9164 45.0224C48.0344 46.0794 46.8985 46.6469 45.5096 46.726C45.4646 46.7282 45.4303 46.7677 45.4335 46.8126C45.4335 46.818 45.4346 46.8233 45.4357 46.8286L45.6168 47.5009C45.6275 47.5394 45.6532 47.5586 45.6929 47.5586ZM51.8559 49.5818L46.0133 49.5925C45.9544 49.5925 45.9072 49.6395 45.9072 49.6983V50.6271C45.9115 52.2709 47.2339 53.6004 48.8617 53.5972H49.0203C50.6482 53.594 51.9663 52.2602 51.9631 50.6164L51.962 49.6876C51.962 49.6288 51.9149 49.5818 51.8559 49.5818Z"
                                fill="#7D35C2"/>
                            <path
                                d="M54.1728 30.3277C54.1557 30.286 54.1075 30.2668 54.0657 30.285C54.0528 30.2903 54.0421 30.2989 54.0335 30.3095C53.7849 30.6259 53.5116 30.9113 53.2126 31.1656C52.5279 31.7492 51.4316 31.1068 51.767 30.2187C52.0317 29.5176 53.5299 28.7085 53.5438 28.0662C53.562 27.2282 53.8492 26.4406 54.4032 25.702C54.8919 25.0522 55.806 24.769 56.1768 25.7234C56.4201 26.3518 55.761 26.743 55.5338 27.2699C55.2852 27.8471 55.2691 28.4296 55.4856 29.0185C55.671 29.5208 56.2154 29.9643 56.2068 30.4955C56.1972 31.0128 55.6656 31.4585 55.1588 31.3441C54.7055 31.2415 54.355 30.7488 54.1728 30.3277Z"
                                fill="#7D35C2"/>
                            <path
                                d="M43.8315 35.1884C43.8465 35.2184 43.8829 35.2312 43.9129 35.2162C43.9204 35.2119 43.9279 35.2066 43.9333 35.2002C44.3834 34.6594 45.0639 33.8557 45.8237 34.2511C46.5031 34.6059 46.3552 35.2771 45.9115 35.7421C45.454 36.2219 44.9931 36.6954 44.5313 37.1635C44.4916 37.2031 44.4691 37.2576 44.468 37.3132C44.4627 38.4022 44.0972 39.3182 43.3717 40.061C42.8338 40.6136 41.9164 40.4639 41.7707 39.6463C41.6796 39.1376 42.1961 38.7528 42.4073 38.3296C42.8113 37.5184 42.7427 36.7232 42.1994 35.9419C41.9818 35.6288 41.7085 35.2397 41.7364 34.8603C41.7761 34.3174 42.3783 33.9305 42.8959 34.1132C43.3096 34.2586 43.6397 34.7962 43.8315 35.1884Z"
                                fill="#7D35C2"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_3_378">
                                <rect width="98" height="73.5" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>


                    <Divider orientation='vertical' borderColor='black'/>

                    <Flex justifyContent="center"  alignItems="center">
                        {Links.map((link, index) => (
                            <ScrollLink
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            
                            <Link
                                href={`#${link}`}
                                _hover={{ textStyle:'none'}}
                               fontSize={{base: '8px', // 0px
                                       sm: '12px', // ~480px. em is a relative unit and is dependant on the font size.
                                       md: '15px', // ~768px
                                       lg: '15px', // ~992px
                                       xl: '15px', // ~1280px
                                       '2xl': '15px', 
                                       
                                        }}
                                
                                key={link} alignSelf='center'

                                  
                                  mr={index === Links.length - 1 ? 0 : 4}

                                  
                            
                            
                            >
                                {link}
                            </Link>
                            </ScrollLink>
                        ))}
                    </Flex>
                </Flex>
            </Box>


        </>
    )
}
