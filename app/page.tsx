"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const userSession = useSession();

  return (
    <main className="h-screen grid md:grid-cols-2 place-items-center mx-10 my-10 sm:mx-0 sm:my-0">
      <img src="/assets/images/twitter.png" width={400} alt="Twitconnect" />
      <div>
        <div className="grid gap-y-4">
          <div className="text-6xl font-Outfit text-[#03a9f4] font-bold">
            Twit Connect.
          </div>
          <p className="text-4xl font-Outfit font-bold text-[#333333]">
            Connect with you loved ones.
          </p>
        </div>
        {!userSession.data ? (
          <button
            className="mt-10 bg-[#03a9f4] py-3 px-10 text-white font-Outfit rounded-full"
            onClick={() => {
              signIn("google", {
                callbackUrl: "/home/gzfs",
                redirect: true,
              });
            }}
          >
            Login
          </button>
        ) : (
          <div className="mt-10">
            <Link
              href="/home"
              className="bg-[#03a9f4] py-3 px-10 text-white font-Outfit rounded-full"
            >
              Start Chatting
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
