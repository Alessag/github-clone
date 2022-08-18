import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { GiBreakingChain } from "react-icons/gi";
import { User } from "../../../types/User";

import {
  Button,
  IconDescription,
  SectionOne,
  SectionTwo,
  UserInfoContainer,
  UserPhoto,
} from "./styles";

interface UserInfoProps {
  user: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <UserInfoContainer className="UserInfo">
      <UserPhoto src={user.avatarUrl} alt={user.name} />
      <h2 className="name">{user.name}</h2>
      <span className="user-name">{user.login}</span>
      <Button href="https://github.com/login" className="btn-edit">
        Edit
      </Button>
      <p className="biography">{user.bio}</p>
      <SectionOne>
        <IconDescription className="followers">
          <FaUsers /> <span>{user.followers}</span> followers -
        </IconDescription>
        <div>
          <span>{user.following}</span> following -
        </div>
        <IconDescription>
          <AiOutlineStar /> <span>stars</span>
        </IconDescription>
      </SectionOne>
      <SectionTwo>
        {user.company !== null && user.company !== "" && (
          <IconDescription className="company">
            <BiBuildings /> <span>{user.company}</span>
          </IconDescription>
        )}
        {user.location !== null && user.location !== "" && (
          <IconDescription>
            <FiMapPin /> {user.location}
          </IconDescription>
        )}
        {user.blog !== null && user.blog !== "" && (
          <IconDescription>
            <GiBreakingChain />
            <a href={user.blog} target="_blank">
              {user.blog}
            </a>
          </IconDescription>
        )}
      </SectionTwo>
    </UserInfoContainer>
  );
};

export default UserInfo;
