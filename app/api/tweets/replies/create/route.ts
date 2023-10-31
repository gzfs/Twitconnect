import { ReplyWithUser } from "@/app/_types/Replies.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  postReq: NextRequest
): Promise<NextResponse<ReplyWithUser>> {
  const postBody = await postReq.json();
  const tweetID = postBody.tweetID;
  const replyContent = postBody.replyContent;
  const userID = postBody.replyID;

  const addedComment: ReplyWithUser = {
    user_id: userID,
    reply_id: 0,
    tweet_id: tweetID,
    date_created: new Date(),
    date_updated: new Date(),
    reply_content: replyContent,
    handle: "gzfs",
    profile_pic: "/assets/images/GigaMurugan.png",
  };

  return NextResponse.json(addedComment);
}
