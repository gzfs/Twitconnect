export type Tweet = {
  tweet_id: number;
  user_id: number;
  content: string;
  image?: string;
  date_created: Date;
  date_updated: Date;
};

export interface TweetResponse {
  message: string;
  status: string;
  time_taken: string;
  tweet: {
    content: string;
    date_created: string;
    date_updated: string;
    tweet_id: number;
    user_id: number;
    image?: string;
  };
}
