import * as React from "react";
import { skirmishes } from "@app/data/skirmish";
import { Skirmish } from "./Skirmish";

export default function Skirmishes() {
  return (
    <>
      {skirmishes.map(skirmish => (
        <Skirmish key={skirmish.id} skirmish={skirmish} />
      ))}
    </>
  );
}
