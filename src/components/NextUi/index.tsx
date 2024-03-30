import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { SkeletonBlock } from "./SkeletonBlock";
import { SkeletonCircle } from "./SkeletonCircle";

export const NextUi: React.FC = () => {
  return (
    <NextUIProvider>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Next UI</h2>
        <SkeletonBlock />
        <SkeletonCircle />
      </div>
    </NextUIProvider>
  );
};
