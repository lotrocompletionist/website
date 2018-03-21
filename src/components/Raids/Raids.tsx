import * as React from "react";

import { Raid } from "../Raid/Raid";
import { raids } from "../../data/raid";

export default function Raids() {
  return <>{raids.map(raid => <Raid key={raid.name} raid={raid} />)}</>;
}
