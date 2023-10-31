import { User } from "@/app/_types/User.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  postReq: NextRequest
): Promise<NextResponse<User[]>> {
  const postBody = await postReq.json();
  const userID = postBody.userID;
  return NextResponse.json([
    {
      user_id: 0,
      username: "Vishal Murugan",
      email: "vismdbs@gmail.com",
      handle: "gzfs",
      is_private: false,
      bio: "Ijboling",
      profile_pic: "/assets/images/GigaMurugan.png",
      banner: "",
      date_created: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: 1,
      username: "Roshini Balasubramanin",
      email: "vismdbs@gmail.com",
      handle: "robal",
      is_private: false,
      bio: "Ijboling",
      profile_pic: "/assets/images/GigaMurugan.png",
      banner: "",
      date_created: new Date(),
      updated_at: new Date(),
    },
  ]);
}
