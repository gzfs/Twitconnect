import { Tweet } from "@/app/_types/Tweet.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(postReq: NextRequest): Promise<NextResponse<Tweet>> {
  const postBody = await postReq.json();
  const userID = postBody.userID;
  const tweetContent = postBody.tweetContent;
  const tweetImage = postBody.tweetImage;

  const addedTweet: Tweet = tweetImage
    ? {
        content: tweetContent,
        date_created: new Date(),
        date_updated: new Date(),
        tweet_id: 10,
        user_id: userID,
        image: tweetImage,
      }
    : {
        content: tweetContent,
        date_created: new Date(),
        date_updated: new Date(),
        tweet_id: 10,
        user_id: userID,
      };

  return NextResponse.json(addedTweet);
}
