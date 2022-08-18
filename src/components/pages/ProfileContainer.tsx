import React from "react";
import { Filters } from "../commons/Filters";
import { ProfileMenu } from "../commons/ProfileMenu";
import { RepositoryCard } from "../commons/RepositoryCard";
import { UserInfo } from "../commons/UserInfo";
import { Wrapper } from "../../styles/shared";

import { Profile } from "./styles";
import { User } from "../../types/User";
import { Repository } from "../../types/Repository";
interface ProfileContainerProps {
  user: User;
  repositories: Repository[];
}

const ProfileContainer: React.FC<ProfileContainerProps> = ({
  user,
  repositories,
}) => {
  const [queryString, setQueryString] = React.useState("");
  const [searched, setSearched] = React.useState(false);

  const handleOnChange: any = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target.value);
    setQueryString(e.target.value);
    setSearched(true);
  };

  const filteredRepositories =
    queryString.length === 0
      ? repositories
      : repositories?.filter((repo: Repository) => {
          return repo.name.toLowerCase().includes(queryString.toLowerCase());
        });

  React.useEffect(() => {
    if (queryString.length === 0) {
      setSearched(false);
    }
  }, [queryString]);

  return (
    <Wrapper>
      <Profile className="ProfileContainer">
        <UserInfo user={user} />
        <div className="Repos">
          <ProfileMenu repositories={repositories?.length} />
          <Filters onChange={handleOnChange} />
          {filteredRepositories?.length > 0 ? (
            filteredRepositories.map((repo) => (
              <RepositoryCard key={repo?.id} repository={repo} />
            ))
          ) : (
            <div>No repositories found</div>
          )}
        </div>
      </Profile>
    </Wrapper>
  );
};

export default ProfileContainer;
