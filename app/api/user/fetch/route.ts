import { User } from "@/app/_types/User.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(postReq: NextRequest): Promise<NextResponse<User>> {
  const postBody = await postReq.json();
  const userHandle = postBody.userHandle;
  return NextResponse.json({
    user_id: 0,
    email: "vismdbs@gmail.com",
    bio: "Ijboling 😎",
    date_created: new Date(),
    handle: "gzfs",
    is_private: false,
    profile_pic: "/assets/images/GigaMurugan.png",
    updated_at: new Date(),
    username: "Vishal",
  });
}
