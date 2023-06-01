import { Container, Flex } from "@chakra-ui/react";
import { PageIcon } from "../../common";
import { FooterItem, footerItems } from "./Footer.config";

export const Footer = () => {
  return (
    <Container maxWidth={"container.xl"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"4"}
        py={"12"}
      >
        <PageIcon />
        {footerItems.map((item) => (
          <div className="flex items-center gap-2" key={item.label}>
            <item.icon fontSize={"3rem"} />
            <div className="flex flex-col mx-4">
              <div className="font-light">{item.label}</div>
              <div className="">{item.value}</div>
            </div>
          </div>
        ))}
      </Flex>
    </Container>
  );
};

export default Footer;
