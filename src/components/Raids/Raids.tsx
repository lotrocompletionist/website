import * as React from "react";

import { Raid } from "../Raid/Raid";
import { raids } from "../../data/data";

export default function Raids() {
  return (
    <>
      <h2>Raids</h2>

      {raids.map((raid) => 
        <Raid raid={raid} />)
      }
    </>
  );
}
