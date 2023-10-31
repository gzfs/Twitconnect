import { TweetResponse } from "@/app/_types/Tweet.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(postReq: NextRequest): Promise<
  NextResponse<
    | TweetResponse[]
    | {
        message: "No Post";
        status: "200";
        time_taken: "6ms";
        tweet: [];
      }[]
  >
> {
  const postBody = await postReq.json();
  const userID = postBody.userID;

  const userTweets = await fetch(
    `${process.env.BASE_URL}/api/user/${userID}/tweets`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (userTweets.status === 200) {
    return NextResponse.json(await userTweets.json());
  } else {
    return NextResponse.json([
      {
        message: "No Post",
        status: "200",
        time_taken: "6ms",
        tweet: [],
      },
    ]);
  }
}
