import * as React from "react";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  Icon,
  DropdownContent,
  DropdownDivider
} from "bloomer";
import { DropdownFilterItemProps } from "./DropdownFilterItem";

interface DropdownFilterProps {
  header: string;
  values: string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  filterItem: React.StatelessComponent<DropdownFilterItemProps>;
}

interface DropdownFilterState {
  isActive: boolean;
}

export class DropdownFilter extends React.Component<
  DropdownFilterProps,
  DropdownFilterState
> {
  constructor(props: DropdownFilterProps) {
    super(props);
    this.state = { isActive: false };
  }

  onClickNav = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <Dropdown isActive={this.state.isActive}>
        <DropdownTrigger onClick={this.onClickNav}>
          <Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
            <span>{this.props.header}</span>
            <Icon icon="angle-down" isSize="small" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownContent>
            {this.props.values.map(value => (
              <this.props.filterItem
                key={value}
                value={value}
                onChange={this.props.onChange}
              />
            ))}
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
