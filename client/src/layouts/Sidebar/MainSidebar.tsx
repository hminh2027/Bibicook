"use client";
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  Box,
  Flex,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { navigationItems } from "@/constants/layout";
import Link from "next/link";

type Props = {};

function MainSidebar({}: Props) {
  return (
    <Accordion allowMultiple={true} index={[0, 1, 2]}>
      {navigationItems.map((navigationItem) => (
        <AccordionItem key={navigationItem.label}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {navigationItem.label}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack>
              {navigationItem.items.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default MainSidebar;
