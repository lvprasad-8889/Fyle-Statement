interface SocialAccount {
  companyName: string;
  url: string;
}

export interface UserData {
  userImage: string;
  userName: string;
  description: string;
  location: string;
  userSocialAccounts: SocialAccount[];
  userGithubLink: string;
}
