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
import { IVirtueDeed } from "../../data/virtue-deed";

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
          </MediaContent>
        </Media>
        <Content>
          {props.virtueDeed.virtue}
          <br />
          <small>
            {props.virtueDeed.level}
            <br/>
            {props.virtueDeed.region}
          </small>
        </Content>
      </CardContent>
    </>
  );
}
