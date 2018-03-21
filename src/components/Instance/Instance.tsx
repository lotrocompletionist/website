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
import { IInstance } from "../../data/instance";

export interface InstanceProps {
  instance: IInstance;
}

export function Instance(props: InstanceProps) {
  return (
    <>
      <CardContent>
        <Media>
          <MediaLeft>
            <Image isSize="48x48" src="https://via.placeholder.com/96x96" />
          </MediaLeft>
          <MediaContent>
            <Title isSize={4}>{props.instance.name}</Title>
            <Subtitle isSize={6}>
              {props.instance.abbreviations.join(", ")}
            </Subtitle>
          </MediaContent>
        </Media>
        <Content>
          {props.instance.cluster}
          <br />
          <small>
            <Level level={props.instance.level} />
          </small>
        </Content>
      </CardContent>
    </>
  );
}
