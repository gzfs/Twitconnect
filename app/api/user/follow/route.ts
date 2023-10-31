import { NextRequest, NextResponse } from "next/server";

export async function POST(postReq: NextRequest): Promise<
  NextResponse<{
    isAdded: boolean;
  }>
> {
  const postBody = await postReq.json();
  const userID = postBody.userID;
  const followerID = postBody.followerID;

  return NextResponse.json({
    isAdded: true,
  });
}
