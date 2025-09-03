import React from "react";
import { cn } from "../../lib/utils";

type HorizontalDividerProps = {
  className?: string;
};

const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div className={cn("w-full my-8 border-b border-b-gray-800", className)} />
  );
};

export default HorizontalDivider;
