import * as React from "react";
import { VirtueDeed } from "../VirtueDeed/VirtueDeed";
import { virtueDeeds } from "../../data/virtue-deed";

export default function VirtueDeeds() {
  return (
    <>
      {virtueDeeds.map(virtueDeed => (
        <VirtueDeed key={virtueDeed.id} virtueDeed={virtueDeed} />
      ))}
    </>
  );
}
