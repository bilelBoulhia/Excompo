import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    Textarea, useToast,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form

import { useRef, useState } from "react";
import play from "@/assets/play.png";
import pause from "@/assets/pause.png";

export default function GetInTouch() {
    const toast = useToast()
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm(); // Initialize the useForm hook

    const onSubmit = (data) => {
        toast({
            title: 'Submitted',
            description: "We will contact you soon",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
        console.log(data);
    };

    return (
        <Stack justifyContent="center" alignItems="center" mt={10}>
            <Box textAlign="center" p="0px 20px 0px 20px">
                <Heading
                    fontSize={{
                        base: "sm",
                        sm: "20px",
                        md: "25px",
                        lg: "20px",
                        xl: "20px",
                        "2xl": "20px",
                    }}
                    color="black"
                    fontWeight="medium"
                >
                    Get In Touch
                </Heading>
                <Heading
                    mt={5}
                    fontSize={{
                        base: "mg",
                        sm: "22px",
                        md: "28px",
                        lg: "29px",
                        xl: "20px",
                        "2xl": "25px",
                    }}
                    fontWeight="bold"
                    color="black"
                >
                    Leave a review
                </Heading>
            </Box>

            <Stack maxW="30em">
                <Text
                    p={2}
                    mt="5em"
                    textAlign="center"
                    fontSize={{
                        base: "13px",
                        sm: "15px",
                        md: "10px",
                        lg: "15px",
                        xl: "10px",
                        "2xl": "12px",
                    }}
                    color="#3B5266"
                >
                    Want to tell your experience ? let us imporove our work by leave a
                    raview :) thank you.
                </Text>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack mt={5} p="5" mb="4em" alignItems="center">
                        <Input
                            placeholder="Your Name"
                            {...register("name", { required: "Name is required" })}
                            isInvalid={errors.name}
                        />
                        {errors.name && (
                            <Text color="red.500">{errors.name.message}</Text>
                        )}
                        <Textarea
                            resize="vertical"
                            rows={8}
                            placeholder="Your Review"
                            {...register("review", { required: "Review is required" })}
                            isInvalid={errors.review}
                        />
                        {errors.review && (
                            <Text color="red.500">{errors.review.message}</Text>
                        )}
                        <Button
                            borderRadius="20"
                            w="10em"
                            bg="black"
                            color="white"
                            type="submit"
                            isLoading={isSubmitting}
                        >
                            Submit
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Stack>
    );
}