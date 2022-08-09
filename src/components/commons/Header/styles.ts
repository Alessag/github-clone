import styled from "styled-components";
import { color, device } from "../../../styles";

export const HeaderContainer = styled.header`
  display: none;

  @media ${device.large} {
    display: flex;
    font-size: 16px;
    padding: 8px 0;
    height: 72px;
    box-sizing: border-box;
    background-color: ${color.grey4};
    > .wrapper {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 0;
    }
  }
`;

export const Menu = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  align-self: center;
  height: min-content;
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;

  @media ${device.large} {
    display: flex;
  }

  > li {
    margin-right: 16px;

    &:last-child,
    &:first-child {
      margin-right: 0;
    }
  }
`;

export const SearchAndLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;

  & > * {
    margin-right: 16px;
  }

  @media ${device.large} {
    width: auto;
  }
`;

export const Hiperlink = styled.a`
  color: ${color.white};
  text-decoration: none;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }

  &.logo {
    color: ${color.white};
    display: block;
    margin-right: 24px;
  }
`;

export const HiperlinkOutline = styled(Hiperlink)`
  border-radius: 4px;
  border: 1px solid rgba(110, 118, 129, 0.4);
  padding: 4px 8px;
`;
export const MobileHeader = styled.div`
  align-items: center;
  background-color: ${color.grey4};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;

  @media ${device.large} {
    display: none;
  }
`;
