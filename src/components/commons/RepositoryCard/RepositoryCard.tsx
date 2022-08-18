import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { FaBalanceScale } from "react-icons/fa";
import { calculateDaysBetween, calculateDate } from "../../../globals/utils";
import { Repository } from "../../../types/Repository";

import {
  DescAndIcon,
  RepositoryCardContainer,
  SectionOne,
  SectionThree,
  SectionTwo,
} from "./styles";
interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  const forks = repository.forksCount ?? 0;
  const lastUpdated =
    calculateDaysBetween(repository.pushedAt) === 0
      ? "today"
      : calculateDaysBetween(repository.pushedAt) === -1
      ? "yesterday"
      : `${calculateDate(repository.pushedAt)}`;

  return (
    <RepositoryCardContainer>
      <SectionOne className="section-one">
        <a href={repository.htmlUrl} target="_blank" rel="noreferrer">
          {repository.name}
        </a>
      </SectionOne>
      <SectionTwo className="section-two">{repository.description}</SectionTwo>
      <SectionThree className="section-three">
        {repository.language?.length > 0 && (
          <DescAndIcon className="language">
            <div className="color" /> {repository.language}
          </DescAndIcon>
        )}
        {repository.stargazersCount > 0 && (
          <DescAndIcon>
            <AiOutlineStar /> {repository.stargazersCount}
          </DescAndIcon>
        )}
        {forks > 0 && (
          <DescAndIcon>
            <BiGitRepoForked /> {forks}
          </DescAndIcon>
        )}
        {repository.license?.length > 0 && (
          <DescAndIcon className="license">
            <FaBalanceScale /> {repository.license}
          </DescAndIcon>
        )}
        <span>Updated {lastUpdated}</span>
      </SectionThree>
    </RepositoryCardContainer>
  );
};

export default RepositoryCard;
