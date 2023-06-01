import { Flex, Text, Avatar, Stack, Accordion } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "@/features/Auth";
import AccordionItem from "./Sidebar.AccordionItem";
import { sideBarItems } from "./Sidebar.config";
// interface SidebarProps {}

export const Sidebar = React.memo(() => {
  const [curActiveIndex, setCurActiveIndex] = useState(0);
  const { user } = useAuth();
  return (
    <div className="border-r border-red-50 sticky top-0 min-h-screen">
      <Flex gap="4" alignItems={"center"}>
        <Avatar src={user.avatar} name={user.name} />
        <Stack>
          <Text as="b">{user.name}</Text>
          <Text>0 điểm</Text>
        </Stack>
      </Flex>

      <Accordion
        w={"200px"}
        allowMultiple
        onChange={(expandedIndex) => setCurActiveIndex(Number(expandedIndex))}
        index={curActiveIndex}
      >
        {sideBarItems.map((sideBarItem) => (
          <AccordionItem
            key={sideBarItem.label}
            label={sideBarItem.label}
            items={sideBarItem.items}
          />
        ))}
      </Accordion>
    </div>
  );
});

export default Sidebar;
