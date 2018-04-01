import * as React from "react";

import { WorldInstance } from "./WorldInstance";
import { worldInstances } from "@app/data/world-instance";

export default function WorldInstances() {
  return (
    <>
      {worldInstances.map(worldInstance => (
        <WorldInstance key={worldInstance.id} worldInstance={worldInstance} />
      ))}
    </>
  );
}
