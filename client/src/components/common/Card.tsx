import {
  Box,
  CardBody,
  CardProps,
  Card as ChakraCard,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props extends CardProps {
  cardTitle?: string | ReactNode;
}
export default function Card({ cardTitle, children }: Props) {
  const title = cardTitle && (
    <>
      <div className="border-b border-b-[hsl(210,23%,95%)] p-4">
        {cardTitle}
      </div>
    </>
  );
  return (
    <ChakraCard>
      <CardBody
        sx={{
          padding: 0,
        }}
      >
        {title}
        <Box
          sx={{
            padding: 4,
          }}
        >
          {children}
        </Box>
      </CardBody>
    </ChakraCard>
  );
}
