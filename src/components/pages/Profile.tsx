import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../commons/Header";
import { Footer } from "../commons/Footer";
import ProfileContainer from "./ProfileContainer";
import { GithubService } from "../../services/GithubService";
import { User } from "../../types/User";
import { Repository } from "../../types/Repository";

const Profile = () => {
  const githubService = new GithubService();
  let { username = "alessag" } = useParams<{ username: string }>();
  const [user, setUser] = React.useState<User>();
  const [repositories, setRepositories] = React.useState<Array<Repository>>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const githubUser = await githubService.getUserByUsername(username);
      const githubRepos = await githubService.getReposByUsername(username);
      if (githubUser && githubRepos) {
        setUser(githubUser);
        setRepositories(githubRepos);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <ProfileContainer user={user as User} repositories={repositories} />
      <Footer />
    </>
  );
};

export default Profile;
