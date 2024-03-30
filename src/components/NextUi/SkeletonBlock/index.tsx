import React from "react";
import { Skeleton } from "@nextui-org/react";

export const SkeletonBlock: React.FC = () => {
  return (
    <Skeleton>
      <div className="w-[200px] h-[30px]"></div>
    </Skeleton>
  );
};
