"use client";
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  Box,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { NavItem, SidebarItem, navigationItems } from "@/constants/layout";
import Link from "next/link";

function MainSidebar() {
  return (
    <Accordion allowMultiple={true} index={[0, 1, 2]}>
      {navigationItems.map((navigationItem: SidebarItem) => (
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
              {navigationItem.items.map((item: NavItem) => (
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
