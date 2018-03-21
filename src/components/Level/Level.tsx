import * as React from "react";
import { ILevel } from "../../data/level";

export interface LevelProps {
  level: ILevel;
}

export function Level(props: LevelProps) {
  const maximum = props.level.maximum ? " - " + props.level.maximum : "";

  return (
    <>
      Level: {props.level.minimum}
      {maximum}
    </>
  );
}
