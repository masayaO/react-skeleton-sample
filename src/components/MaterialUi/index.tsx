import React from "react";
import { SkeletonPageTitle } from "./SkeletonPageTitle";
import { SkeletonCircle } from "./SkeletonCircle";

export const MaterialUi: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Material UI</h2>
      <SkeletonPageTitle />
      <SkeletonCircle />
    </div>
  );
};
