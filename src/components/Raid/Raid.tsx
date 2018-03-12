import * as React from "react";
import { Instance } from "../../data/models";

export interface RaidProps {
  raid: Instance
}

export function Raid(props: RaidProps) {
  return <div>{props.raid.name}</div>;
}
