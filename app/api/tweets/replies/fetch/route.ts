import { ReplyWithUser } from "@/app/_types/Replies.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  postReq: NextRequest
): Promise<NextResponse<ReplyWithUser[]>> {
  const postBody = await postReq.json();
  const tweetID = postBody.tweetID;

  const tweetReplies: ReplyWithUser[] = [
    {
      user_id: 1,
      reply_id: 0,
      date_created: new Date(),
      date_updated: new Date(),
      reply_content: "Hello",
      tweet_id: 0,
      handle: "gzfs",
      profile_pic: "/assets/images/GigaMurugan.png",
    },
  ];

  return NextResponse.json(tweetReplies);
}
