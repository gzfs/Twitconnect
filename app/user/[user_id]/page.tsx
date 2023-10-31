"use client";

import { useSession } from "next-auth/react";
import Sidebar from "../../_components/SideBar";
import { Session } from "next-auth";
import Recommended from "../../_components/Recommended";
import SearchBar from "../../_components/SearchBar";
import Navbar from "../../_components/Navbar";
import TweetBox from "../../_components/Tweet";
import { useEffect, useState } from "react";
import { User } from "@/app/_types/User.types";
import { Tweet } from "@/app/_types/Tweet.types";

export default function Profile({ params }: { params: { user_id: string } }) {
  const userSession = useSession();
  const [recommendedUsers, setRecommendedUsers] = useState<User[]>();
  const [userProfile, setUserProfile] = useState<User>();
  const [userPosts, setUserPosts] = useState<Tweet[]>();

  useEffect(() => {
    fetch("/api/tweets/user", {
      method: "POST",
      body: JSON.stringify({
        userID: params.user_id,
      }),
    })
      .then((recResponse) => {
        return recResponse.json();
      })
      .then((recJson) => {
        setUserPosts(recJson);
      });

    fetch("/api/user/fetch", {
      method: "POST",
      body: JSON.stringify({
        userHandle: params.user_id,
      }),
    })
      .then((recResponse) => {
        return recResponse.json();
      })
      .then((recJson) => {
        setUserProfile(recJson);
      });

    fetch("/api/user/recommended", {
      method: "POST",
      body: JSON.stringify({
        userID: 1,
      }),
    })
      .then((recResponse) => {
        return recResponse.json();
      })
      .then((recJson) => {
        console.log(recJson);
        setRecommendedUsers(recJson);
      });
  }, [params.user_id]);

  return (
    <main className="grid md:grid-cols-9 py-5 md:py-12 px-5 sm:px-10 md:px-10 font-Montserrat">
      <div className="col-span-1 h-full m-2 rounded-xl hidden md:block">
        <Sidebar userSession={userSession.data as Session} />
      </div>
      <div className="md:hidden">
        <Navbar userSession={userSession.data as Session} />
      </div>
      <div className="lg:col-span-5 md:col-span-5 h-full md:pr-10 rounded-xl my-5 md:my-0">
        <p className="text-6xl font-Outfit font-extrabold text-[#6ac6ff]">
          Profile
        </p>
        <div className="py-10 grid grid-cols-7 lg:grid-cols-7">
          <div className="overflow-hidden col-span-3 lg:col-span-2 w-[150px] rounded-full h-[150px] bg-[url('/assets/images/Sike.jpeg')] bg-center bg-cover"></div>
          <div className="col-span-4 lg:col-span-4 w-full place-self-center">
            <p className="text-4xl text-[#333333] opacity-90 font-Outfit font-bold">
              {userProfile?.username}
            </p>
            <p className="font-Outfit text-[#333333] opacity-90 font-extralight">
              @{userProfile?.handle}
            </p>
          </div>
        </div>
        <div className="grid gap-y-10">
          {userPosts?.map((userPost) => {
            return (
              <TweetBox
                userSession={userSession.data as Session}
                hydrateTweet={userPost}
                key={userPost.tweet_id}
              />
            );
          })}
        </div>
      </div>
      <div className="col-span-3 h-full rounded-xl hidden md:flex flex-col">
        <div className="md:my-5">
          <SearchBar />
        </div>
        <Recommended
          recommendedUsers={recommendedUsers as User[]}
          userID={userProfile?.user_id as number}
        />
      </div>
    </main>
  );
}
