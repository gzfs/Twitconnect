"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState, type SVGProps } from "react";

export function IcBaselineAccountCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"
      ></path>
    </svg>
  );
}

export default function Sidebar({ userSession }: { userSession: Session }) {
  const [isMiniMenuVisible, setIsMiniMenuVisible] = useState(false);

  return (
    <div className="grid grid-rows-7 fixed h-full">
      <div className="row-span-6">
        <Link href="/">
          <img src="/assets/images/Twitter.png" width="30px" alt="Twitter" />
        </Link>
      </div>
      <div>
        {!userSession ? (
          <button
            onClick={() => {
              signIn();
            }}
          >
            <IcBaselineAccountCircle color="#ff5f7a" className="text-3xl" />
          </button>
        ) : (
          <div className="relative ">
            <button
              onClick={() => {
                setIsMiniMenuVisible(!isMiniMenuVisible);
              }}
            >
              <img
                src={userSession.user?.image as string}
                alt="Profile"
                width={30}
                className="rounded-full mt-2"
              />
            </button>
            {isMiniMenuVisible ? (
              <div className="absolute bottom-12 text-xs left-0 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-6 rounded-2xl">
                <div className="py-3">
                  <Link href="/user/gzfs">Profile</Link>
                </div>
                <hr />
                <button
                  className="py-3"
                  onClick={() => {
                    signOut({
                      callbackUrl: "/",
                      redirect: true,
                    });
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}
