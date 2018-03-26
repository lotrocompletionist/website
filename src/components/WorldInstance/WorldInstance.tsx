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
import { LevelRange } from "../LevelRange/LevelRange";
import { Bosses } from "../Bosses/Bosses";
import { IWorldInstance } from "../../data/world-instance";

export interface WorldInstanceProps {
  worldInstance: IWorldInstance;
}

export function WorldInstance(props: WorldInstanceProps) {
  return (
    <>
      <CardContent>
        <Media>
          <MediaLeft>
            <Image isSize="48x48" src="https://via.placeholder.com/96x96" />
          </MediaLeft>
          <MediaContent>
            <Title isSize={4}>{props.worldInstance.name}</Title>
            <Subtitle isSize={6}>
              {props.worldInstance.abbreviations.join(", ")}
            </Subtitle>
          </MediaContent>
        </Media>
        <Content>
          {props.worldInstance.cluster}
          <br />
          <small>
            <LevelRange range={props.worldInstance.level} />
            <br />
            <Bosses bosses={props.worldInstance.bosses} />
          </small>
        </Content>
      </CardContent>
    </>
  );
}
