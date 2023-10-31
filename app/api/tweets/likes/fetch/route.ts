import { Like } from "@/app/_types/Like.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  postReq: NextRequest
): Promise<NextResponse<Like[]>> {
  const postBody = await postReq.json();
  const tweetID = postBody.tweetID;

  const tweetLikes: Like[] = [
    {
      tweet_id: 0,
      user_id: 1,
    },
    {
      tweet_id: 1,
      user_id: 1,
    },
  ];

  return NextResponse.json(tweetLikes);
}
