import * as React from "react";

export interface HelloProps { title: string }

export const Hello = (props: HelloProps) => <h1>Hello from {props.title}!</h1>;
