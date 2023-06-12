import { Flex, VStack, Text, Button } from "@chakra-ui/react";

interface Props {
  name: string;
  refetch?: () => void;
}
export default function ErrorContent({ name, refetch }: Props) {
  return (
    <VStack justifyContent={"center"} gap={4}>
      <Text>{`Error occur while loading ${name}`}</Text>
      {refetch && (
        <Button colorScheme="red" onClick={refetch}>
          Refetch
        </Button>
      )}
    </VStack>
  );
}
