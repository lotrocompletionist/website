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
import { IRaid } from "@app/data/raid";

export interface RaidProps {
  raid: IRaid;
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
            <LevelRange range={props.raid.level} />
            <br />
            <Bosses bosses={props.raid.bosses} />
          </small>
        </Content>
      </CardContent>
    </>
  );
}
