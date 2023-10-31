import { Tweet } from "@/app/_types/Tweet.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  postReq: NextRequest
): Promise<NextResponse<Tweet[]>> {
  const postBody = await postReq.json();
  const userID = postBody.userID;

  const userTweets: Tweet[] = [
    {
      tweet_id: 0,
      content: "Javascript Sucks",
      date_created: new Date(),
      date_updated: new Date(),
      user_id: 1,
    },
    {
      tweet_id: 1,
      content: "Javascript Nice",
      date_created: new Date(),
      date_updated: new Date(),
      user_id: 1,
    },
    {
      tweet_id: 2,
      content: "Javascript Bruh",
      date_created: new Date(),
      date_updated: new Date(),
      user_id: 1,
    },
  ];

  return NextResponse.json(userTweets);
}
