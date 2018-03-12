import * as React from "react";

import { Instance } from "../Instance/Instance";
import { worldInstances } from "../../data/data";

export default function Instances() {
  return (
    <>
      <h2>Instances</h2>

      {worldInstances.map((worldInstance) => 
        <Instance instance={worldInstance} />)
      }
    </>
  );
}
