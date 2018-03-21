import * as React from "react";
import { skirmishes } from "../../data/skirmish";
import { Skirmish } from "../Skirmish/Skirmish";

export default function Skirmishes() {
  return (
    <>
      {skirmishes.map(skirmish => (
        <Skirmish key={skirmish.name} skirmish={skirmish} />
      ))}
    </>
  );
}
