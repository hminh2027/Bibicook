import {
  AccordionButton,
  AccordionIcon,
  AccordionItem as ChakraAccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "./Sidebar.NavLink";
import { FaListUl } from "react-icons/fa";
interface AccordionItemProps {
  label: string;
  items: {
    label: string;
    link: string;
  }[];
}

const AccordionItem = ({ label, items }: AccordionItemProps) => {
  return (
    <ChakraAccordionItem>
      <AccordionButton
        px="0"
        _expanded={{ color: "yellow.600", background: "none" }}
      >
        <Flex as="span" flex="1" gap="4" px="1" alignItems={"center"}>
          <FaListUl />
          <Text>{label}</Text>
        </Flex>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel px="0" pb={4}>
        <Flex direction={"column"}>
          {items.map((item) => (
            <NavLink key={item.link} to={item.link}>
              <Text>{item.label}</Text>
            </NavLink>
          ))}
        </Flex>
      </AccordionPanel>
    </ChakraAccordionItem>
  );
};

export default AccordionItem;
