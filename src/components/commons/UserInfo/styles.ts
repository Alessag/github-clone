import styled from "styled-components";
import { color, device, fontWeight } from "../../../styles/index";

export const UserInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: auto;
  column-gap: 16px;
  grid-template-areas:
    "user-photo name"
    "user-photo user-name"
    "btn btn"
    "bio bio"
    "section-one section-one"
    "section-two section-two";

  @media ${device.medium} {
    align-items: flex-start;
    color: ${color.grey5};
    display: flex;
    flex-direction: column;
    height: min-content;
    justify-content: center;
    width: 100%;
  }

  > .name {
    margin: 0;
    padding-top: 16px;
    grid-area: name;
    align-self: flex-end;

    @media ${device.medium} {
      align-self: flex-start;
    }
  }

  > .user-name {
    grid-area: user-name;
    color: ${color.grey};
    font-size: 20px;
    font-weight: ${fontWeight.light};
    padding-bottom: 16px;
  }

  > .biography {
    grid-area: bio;
    margin-top: 16px;

    @media ${device.medium} {
      margin-top: 0;
    }
  }
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
  grid-area: user-photo;
  height: auto;
  max-width: 100%;
  margin-bottom: 16px;

  @media ${device.medium} {
    height: 270px;
    width: 270px;
    margin-bottom: 0;
  }
`;

export const Button = styled.a`
  grid-area: btn;
  align-items: center;
  background-color: ${color.grey3};
  border-radius: 6px;
  color: ${color.grey5};
  display: flex;
  font-size: 14px;
  height: 30px;
  justify-content: center;
  margin-bottom: 16px;
  text-decoration: none;
  width: 100%;
`;

export const SectionOne = styled.div`
  grid-area: section-one;
  align-items: center;
  color: ${color.grey2};
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: ${fontWeight.semibold};
  justify-content: flex-start;
  margin: 16px 0;
  width: 100%;

  > * {
    &:hover {
      color: ${color.blue};
      cursor: pointer;
      span {
        color: ${color.blue};
      }
    }
  }

  span {
    color: ${color.grey5};
    margin-right: 4px;
  }
`;
export const IconDescription = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  justify-content: flex-start;
  padding: 4px;

  > svg {
    margin-right: 6px;
  }

  > a {
    &:hover {
      color: ${color.blue};
      text-decoration: underline;
    }
  }
`;

export const SectionTwo = styled.div`
  grid-area: section-two;
  border-bottom: 1px solid ${color.grey3};
  padding-bottom: 16px;
  width: 100%;
`;
