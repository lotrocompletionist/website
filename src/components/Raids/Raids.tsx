import * as React from "react";

import { Raid } from "./Raid";
import { raids } from "@app/data/raid";

export default function Raids() {
  return <>{raids.map(raid => <Raid key={raid.id} raid={raid} />)}</>;
}
