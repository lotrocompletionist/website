import * as React from "react";

import { WorldInstance } from "../WorldInstance/WorldInstance";
import { worldInstances } from "../../data/world-instance";

export default function WorldInstances() {
  return (
    <>
      {worldInstances.map(worldInstance => (
        <WorldInstance key={worldInstance.name} worldInstance={worldInstance} />
      ))}
    </>
  );
}
