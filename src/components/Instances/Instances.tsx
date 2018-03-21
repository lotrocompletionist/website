import * as React from "react";

import { Instance } from "../Instance/Instance";
import { instances } from "../../data/instance";

export default function Instances() {
  return (
    <>
      {instances.map(instance => (
        <Instance key={instance.name} instance={instance} />
      ))}
    </>
  );
}
