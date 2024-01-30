import React from "react";
import { Game, Platform } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* Solution 01 */}
        {/* {game.parent_platforms.map((platform) => (
          <Text>{platform.platform.name}</Text>
        ))} */}
        {/* Solution 02 */}
        {/* {game.parent_platforms.map(({ platform }) => (
          <Text color={"gray.500"}>{platform.name}</Text>
        ))} */}
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
