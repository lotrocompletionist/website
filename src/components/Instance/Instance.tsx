import * as React from "react";
import { Instance } from "../../data/models";

export interface InstanceProps {
  instance: Instance
}

export function Instance(props: InstanceProps) {
  return <div>{props.instance.name}</div>;
}
