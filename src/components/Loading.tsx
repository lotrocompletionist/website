import * as React from "react";
import { LoadingComponentProps } from "react-loadable";

export class Loading extends React.Component<LoadingComponentProps, {}> {
  render() {
    if (this.props.error)
      return <div>Error!</div>;
    else if (this.props.timedOut)
      return <div>Timed out...</div>;
    else if (this.props.pastDelay)
      return <div>Loading...</div>;
    else
      return null;
  }
}
