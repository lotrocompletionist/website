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
import { Instance } from "../../data/models";
import { Level } from "../Level/Level";

export interface RaidProps {
  raid: Instance;
}

export function Raid(props: RaidProps) {
  return (
    <>
      <CardContent>
        <Media>
          <MediaLeft>
            <Image isSize="48x48" src="https://via.placeholder.com/96x96" />
          </MediaLeft>
          <MediaContent>
            <Title isSize={4}>{props.raid.name}</Title>
            <Subtitle isSize={6}>
              {props.raid.abbreviations.join(", ")}
            </Subtitle>
          </MediaContent>
        </Media>
        <Content>
          {props.raid.cluster}
          <br />
          <small>
            <Level level={props.raid.level} />
          </small>
        </Content>
      </CardContent>
    </>
  );
}
