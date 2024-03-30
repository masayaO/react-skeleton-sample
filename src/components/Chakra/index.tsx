import React from "react";
import { SkeletonPageTitle } from "./SkeletonPageTitle";
import { ChakraProvider } from "@chakra-ui/react";
import { SkeletonCircle } from "./SkeletonCircle";

export const Chakra: React.FC = () => {
  return (
    <ChakraProvider>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Chakra UI</h2>
        <SkeletonPageTitle />
        <SkeletonCircle />
      </div>
    </ChakraProvider>
  );
};
