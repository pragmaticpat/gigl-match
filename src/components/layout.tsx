import React from "react";
import "./layout.css";
import { Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex
      flexDirection={"column"}
      maxW={"90vw"}
      alignItems={"center"}
      height={"90vh"}
      m={10}
    >
      {children}
    </Flex>
  );
}
