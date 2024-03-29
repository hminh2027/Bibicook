"use client";
import { Divider, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import MainHeader from "./Header/MainHeader";
import MainSidebar from "./Sidebar/MainSidebar";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <Flex direction={"column"} className=" h-screen w-screen">
      <MainHeader />
      <Divider />
      <Flex className="flex-1">
        <div className="w-[150px] border-r border-r-gray-200">
          <MainSidebar />
        </div>
        <div className="flex-1 p-4">{children}</div>
      </Flex>
    </Flex>
  );
}

export default MainLayout;
