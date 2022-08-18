import { API_HOST } from "../globals/constants";
import { GithubRepositories } from "./types/GithubRepository";
import { GithubUser } from "./types/GithubUser";
import { Repositories } from "../types/Repository";
import { User } from "../types/User";
export class GithubService {
  async fetchGithubData(uri: string) {
    const response = await fetch(`${API_HOST}/users/${uri}`);
    const data = await response.json();
    return data;
  }

  async getUserByUsername(username: string): Promise<User> {
    const response: GithubUser = await this.fetchGithubData(username);
    return {
      ...response,
      avatarUrl: response.avatar_url,
      organizationsUrl: response.organizations_url,
      publicRepos: response.public_repos,
      reposUrl: response.repos_url,
      twitterUsername: response.twitter_username,
      mutualFollowers: 1,
      htmUrl: response.html_url,
    };
  }

  async getReposByUsername(username: string): Promise<Repositories> {
    const response: GithubRepositories = await this.fetchGithubData(
      `${username}/repos`
    );
    const repositories: Repositories = response.map((repo) => {
      return {
        description: repo.description,
        forksCount: repo.forks_count,
        htmlUrl: repo.html_url,
        language: repo.language,
        license: repo.license,
        name: repo.name,
        pushedAt: repo.pushed_at,
        stargazersCount: repo.stargazers_count,
        id: repo.id,
      };
    });

    return repositories;
  }
}
