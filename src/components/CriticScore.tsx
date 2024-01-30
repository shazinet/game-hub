import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 80 ? "orange" : "";
  return (
    <Badge fontSize={"14px"} colorScheme={color} paddingX={2} borderRadius={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
