import * as React from "react";
import { ILevel } from "../../data/level";

export interface BossesProps {
  bosses: string[];
}

export function Bosses(props: BossesProps) {
  return <>Bosses: {props.bosses.join(", ")}</>;
}
