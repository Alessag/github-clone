export type GithubRepository = {
  description: string;
  forks_count: number;
  html_url: string;
  language: string;
  license: string;
  name: string;
  pushed_at: string;
  stargazers_count: number;
  id: number;
};

export type GithubRepositories = GithubRepository[];
