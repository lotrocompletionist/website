import * as React from "react";

export interface LevelProps {
  level?: number;
}

export function Level(props: LevelProps) {
  if (props.level === undefined) return null;

  return <>Level: {props.level}</>;
}
