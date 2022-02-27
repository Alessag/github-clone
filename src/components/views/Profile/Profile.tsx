import React from "react";
import { useParams } from "react-router-dom";
import { Header, Footer } from "../../molecules";
import { ProfileContainer } from "../../organisms";

const Profile = () => {
  const API_HOST = "https://api.github.com";
  let { username= "alessag" } = useParams<{ username: string }>();
  const [user, setUser] = React.useState<any>();
  const [repositories, setRepositories] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchApi: any = async (path: string) => {
    try {
      const response = await fetch(`${API_HOST}/${path}`);
      const data = await response.json();
      return {
        data,
      };
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    Promise.all([
      fetchApi(`users/${username}`),
      fetchApi(`users/${username}/repos`),
    ])
      .then(([user, repos]) => {
        setUser(user?.data);
        setRepositories(repos?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <ProfileContainer user={user} repositories={repositories} />
      <Footer />
    </div>
  );
};

export default Profile;
