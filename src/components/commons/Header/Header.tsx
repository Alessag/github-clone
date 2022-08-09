import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdNotificationsNone } from "react-icons/md";

import {
  HeaderContainer,
  Hiperlink,
  HiperlinkOutline,
  Menu,
  MobileHeader,
  SearchAndLogin,
} from "./styles";
import { Wrapper } from "../../../styles/shared";
import { TextField } from "../TextField";

const Header: React.FC = () => {
  return (
    <>
      <MobileHeader>
        <GiHamburgerMenu size={24} />
        <Hiperlink
          className="logo"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={35} />
        </Hiperlink>
        <MdNotificationsNone size={21} />
      </MobileHeader>
      <HeaderContainer>
        <Wrapper className="wrapper">
          <Menu>
            <li>
              <Hiperlink
                className="logo"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={35} />
              </Hiperlink>
            </li>
            <li>
              <Hiperlink href="https://github.com/features" target="_blank">
                Why GitHub
              </Hiperlink>
            </li>
            <li>
              <Hiperlink href="https://github.com/team" target="_blank">
                Team
              </Hiperlink>
            </li>
            <li>
              <Hiperlink href="https://github.com/enterprise" target="_blank">
                Enterprise
              </Hiperlink>
            </li>
            <li>
              <Hiperlink href="https://github.com/explore" target="_blank">
                Explore
              </Hiperlink>
            </li>
            <li>
              <Hiperlink href="https://github.com/marketplace" target="_blank">
                Marketplace
              </Hiperlink>
            </li>
            <li>
              <Hiperlink href="https://github.com/pricing" target="_blank">
                Pricing
              </Hiperlink>
            </li>
          </Menu>

          <SearchAndLogin>
            <TextField type="text" placeholder="Search" />
            <Hiperlink href="/" target="_blank">
              Sign in
            </Hiperlink>
            <HiperlinkOutline href="/" target="_blank">
              Sign up
            </HiperlinkOutline>
          </SearchAndLogin>
        </Wrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
