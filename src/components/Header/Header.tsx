import * as React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  Icon,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
  NavbarEnd,
  Field,
  Control,
  Button
} from "bloomer";

import "./Header.scss";
import icon from "../../assets/icon.png";

interface HeaderProps {}

interface HeaderState {
  isActive: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = { isActive: false };
  }

  onClickNav = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <Navbar className="Header is-link">
        <NavbarBrand>
          <NavbarItem href="/">
            <img src={icon} className="icon" /> LoTRO completionist
          </NavbarItem>
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={this.onClickNav}
          >
            <span />
            <span />
          </NavbarBurger>
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarStart>
            <NavbarItem href="/instances">Instances</NavbarItem>
            <NavbarItem href="/raids">Raids</NavbarItem>
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    );
  }
}