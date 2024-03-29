import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
      <Box bg="white" borderRadius='lg' align="center">
        <Image src={imageSrc} alt={title} borderRadius='lg' />
        <Box align="left" px={4} color="black">
          <VStack align="left" spacing='20px' py={4}>
            <Heading as="h3" size="md">{title}</Heading>
            <Text>{description}</Text>
            <HStack>
              <Text>See more</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </VStack>
        </Box>
      </Box>
  );
};

export default Card;
