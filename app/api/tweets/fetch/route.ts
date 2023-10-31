import { Tweet } from "@/app/_types/Tweet.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  postReq: NextRequest
): Promise<NextResponse<Tweet[]>> {
  const postBody = await postReq.json();
  const userID = postBody.userID;

  const mockTweet = await (
    await fetch(`${process.env.BASE_URL}/api/tweet/${92197}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();

  const recTweets: Tweet[] = [mockTweet];

  return NextResponse.json(recTweets);
}
