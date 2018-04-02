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
import { IVirtueDeed } from "@app/data/virtue-deeds";
import { Level } from "@app/components/Shared/Level/Level";

export interface VirtueDeedProps {
  virtueDeed: IVirtueDeed;
}

export function VirtueDeed(props: VirtueDeedProps) {
  return (
    <>
      <CardContent>
        <Media>
          <MediaLeft>
            <Image isSize="48x48" src="https://via.placeholder.com/96x96" />
          </MediaLeft>
          <MediaContent>
            <Title isSize={4}>{props.virtueDeed.deed}</Title>
            <Subtitle isSize={6}>{props.virtueDeed.region}</Subtitle>
          </MediaContent>
        </Media>
        <Content>
          {props.virtueDeed.virtue}
          <br />
          <small>
            <Level level={props.virtueDeed.level} />
          </small>
        </Content>
      </CardContent>
    </>
  );
}
