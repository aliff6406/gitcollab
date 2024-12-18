import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const githubUrl = "https://github.com/docker/genai-stack";

type Response = {
  commitHash: string;
  commitMessage: string;
  commitAuthorName: string;
  commitAuthorAvatar: string;
  commitDate: string;
};

export const getCommitHashes = async (
  githubUrl: string,
): Promise<Response[]> => {
  const { data } = await octokit.rest.repos.listCommits({
    owner: "docker",
    repo: "genai-stack",
  });
  const sortedCommits = data.sort(
    (a, b) =>
      new Date(b.commit.author?.date ?? 0).getTime() -
      new Date(a.commit.author?.date ?? 0).getTime(),
  );

  return sortedCommits.slice(0, 15).map((commit) => ({
    commitHash: commit.sha ?? "",
    commitMessage: commit.commit.message ?? ("" as string),
    commitAuthorName: commit.commit.author?.name ?? "",
    commitAuthorAvatar: commit.author?.avatar_url ?? "",
    commitDate: commit.commit.author?.date,
  }));
};

console.log(await getCommitHashes(githubUrl));
