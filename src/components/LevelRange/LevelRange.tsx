import * as React from "react";
import { ILevelRange } from "../../data/level-range";

export interface LevelRangeProps {
  range: ILevelRange;
}

export function LevelRange(props: LevelRangeProps) {
  const maximum = props.range.maximum ? " - " + props.range.maximum : "";

  return (
    <>
      Level: {props.range.minimum}
      {maximum}
    </>
  );
}
