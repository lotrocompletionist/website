import * as React from "react";
import { IBoss } from "@app/data/boss";

export interface BossesProps {
  bosses: IBoss[];
}

export function Bosses(props: BossesProps) {
  return <>Bosses: {props.bosses.map(boss => boss.name).join(", ")}</>;
}
