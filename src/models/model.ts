export interface User {
  username: string;
  handle: string;
  description: string;
  followers: User[];
  following: User[];
  bookmarks: Tweet[];
  likes: Tweet[];
}

export interface Tweet {
  id: number;
  user: User;
  tweet: string;
  replies: number;
  likes: number;
  retweets: number;
  timePosted: Date;
  parentTweet: number;
}

// TODO: Add image here (some reference)
