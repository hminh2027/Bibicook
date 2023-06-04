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
    // <Grid
    //   templateAreas={`"header header"
    //                 "nav main"
    //                `}
    //   gridTemplateRows={"150px 1fr "}
    //   gridTemplateColumns={"150px 1fr"}
    //   gap="1rem"
    //   className="h-screen"
    // >
    //   <GridItem area={"header"}>
    //     <MainHeader />
    //   </GridItem>
    //   <GridItem area={"nav"}>
    //     <MainSidebar />
    //   </GridItem>
    //   <GridItem area={"main"}>{children}</GridItem>
    // </Grid>
    <Flex direction={"column"} className=" h-screen w-screen">
      <MainHeader />
      <Divider />
      <Flex className="flex-1">
        <div className="w-[150px]">
          <MainSidebar />
        </div>
        <div className="flex-1">{children}</div>
      </Flex>
    </Flex>
  );
}

export default MainLayout;
