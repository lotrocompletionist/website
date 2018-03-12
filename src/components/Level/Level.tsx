import * as React from "react";
import { Level } from "../../data/models";

export interface LevelProps {
  level: Level;
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
