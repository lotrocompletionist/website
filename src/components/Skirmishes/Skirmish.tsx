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
import { LevelRange } from "@app/components/Shared/LevelRange/LevelRange";
import { Bosses } from "@app/components/Shared/Bosses/Bosses";
import { ISkirmish } from "@app/data/skirmish";

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
            <LevelRange range={props.skirmish.level} />
            <br />
            <Bosses bosses={props.skirmish.bosses} />
          </small>
        </Content>
      </CardContent>
    </>
  );
}
