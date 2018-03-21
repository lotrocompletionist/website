import * as React from "react";
import {
  CardContent,
  Media,
  MediaLeft,
  MediaContent,
  Content,
  Image,
  Title,
  Subtitle
} from "bloomer";
import { Level } from "../Level/Level";
import { ISkirmish } from "../../data/skirmish";

export interface SkirmishProps {
  skirmish: ISkirmish;
}

export function Skirmish(props: SkirmishProps) {
  return (
    <>
      <CardContent>
        <Media>
          <MediaLeft>
            <Image isSize="48x48" src="https://via.placeholder.com/96x96" />
          </MediaLeft>
          <MediaContent>
            <Title isSize={4}>{props.skirmish.name}</Title>
          </MediaContent>
        </Media>
        <Content>
          {props.skirmish.type}
          <br />
          <small>
            <Level level={props.skirmish.level} />
          </small>
        </Content>
      </CardContent>
    </>
  );
}
