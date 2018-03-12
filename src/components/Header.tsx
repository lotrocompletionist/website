import * as React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <>
    <h1>LoTRO completionist</h1>
    <ul>
      <li>
        <Link to="/instances">Instances</Link>
      </li>
      <li>
        <Link to="/raids">Raids</Link>
      </li>
    </ul>
  </>
);
