import * as React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { TCard } from "../types";
import StarRatings from "react-star-ratings";

interface CardComponent extends TCard {
  img: number;
}

export const Card = ({
  id,
  area,
  asset,
  emissions_offset,
  rating,
}: Partial<CardComponent>) => {
  const [ratingValue, setRatingValue] = React.useState(rating);
  const boxShadowColor = useColorModeValue("#1A202C", "gray");
  const bgForEmissionOffset = useColorModeValue("#1A202C", "white");
  const starTitle = useColorModeValue("#1A202C", "white");
  const cardBg = useColorModeValue("white", "#1A202C");
  return (
    <Flex
      minW="10rem"
      borderRadius="12px"
      p={2}
      position="relative"
      justifyContent="center"
      bg={cardBg}
      boxShadow={`1px 1px 10px 1px ${boxShadowColor}`}
      data-testid="card"
    >
      <Image
        w="full"
        h="350px"
        borderRadius="12px"
        src={`../assets/${id}.jpg`}
        alt={area}
        fontSize="16px"
        objectFit="cover"
      />
      <Flex
        position="absolute"
        top="50%"
        left="50%"
        p={10}
        transform="translate(-50%, -50%)"
        direction="column"
        w="full"
        alignItems="center"
        color={cardBg}
      >
        <Heading
          as="h2"
          fontWeight="bold"
          fontSize="1.5rem"
          isTruncated
          mb={1}
          data-testid={area}
        >
          {area}
        </Heading>
        <Text as="span" fontSize="1.5rem" ml="4" mb={3} data-testid={asset}>
          {asset}
        </Text>
        <Flex
          p="1rem"
          w="full"
          borderRadius="10px"
          justifyContent="space-around"
          bgColor={bgForEmissionOffset}
          color={cardBg}
          data-testid={emissions_offset}
        >
          <Text as="span">Emissions offset:</Text>
          <Text as="span">
            {emissions_offset} CO<sub>2</sub>e
          </Text>
        </Flex>
      </Flex>
      <Flex
        position="absolute"
        bottom="0"
        p="1rem .7rem 1.5rem"
        alignItems="center"
        justifyContent="center"
        borderRadius="15px"
        bg={cardBg}
      >
        <Box fontSize="1.3rem" pr="10px" color={starTitle}>
          Trip rating
        </Box>
        <Flex alignItems="center" justifyContent="center">
          <StarRatings
            rating={ratingValue}
            starRatedColor="yellow"
            starHoverColor="yellow"
            starDimension="1.3rem"
            changeRating={setRatingValue}
            numberOfStars={5}
            name="rating"
          />
          <Text color={starTitle} ml={2}>
            {ratingValue}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
