import { Inter } from "next/font/google";
import CreatePost from "./createPost";
import PostComp from "@/components/post";
import { Dialog, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import Modal from "@/components/modal";
import SignSignupComp from "@/components/signSignup";
import moment from "moment";

const inter = Inter({ subsets: ["latin"] });

export default function PostFeed() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [open, setOpen] = useState(false);
  const [postsLocalState, setPostsLocalState] = useState(postsData);

  useEffect(() => {
    console.log("MOunted");
    let timer = setTimeout(() => {
      console.log("Logged Out");
      setIsLoggedIn(false);
    }, 30000);
    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  const createPost = (content) => {
    const newPost = {
      userName: "Test User",
      postTime: moment().fromNow(),
      postContent: content,
      numOfComments: 0,
      profileImage: "marvin.png",
    };
    setPostsLocalState([newPost, ...postsLocalState]);
  };

  return (
    <div class="w-full m-auto shadow md:mt-0 sm:max-w-[50%] xl:p-0">
      <div className="w-full box-border my-10">
        <p className="[font-family:Inter,sans-serif] text-[28px] font-medium text-[rgba(197,199,202,1)] whitespace-pre-wrap">
          Hello Jane {isLoggedIn && "✅"}
        </p>
        <p className="[font-family:Inter,sans-serif] text-base font-normal text-left leading-6 text-[rgba(127,128,132,1)] whitespace-pre-wrap max-w-[582px] box-border mt-3">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
      </div>
      <CreatePost
        createPost={createPost}
        setOpen={setOpen}
        isLoggedIn={isLoggedIn}
      />
      {postsLocalState.map((post, index) => {
        return (
          <PostComp
            userName={post.userName}
            postTime={post.postTime}
            postContent={post.postContent}
            numOfComments={post.numOfComments}
            profileImage={post.profileImage}
          />
        );
      })}
      <Modal
        open={open}
        setOpen={setOpen}
        content={
          <SignSignupComp
            showLogin={false}
            onContinue={() => {
              setOpen(false);
              setIsLoggedIn(true);
            }}
          />
        }
      />
    </div>
  );
}

const postsData = [
  {
    userName: "Theresa Webb",
    postTime: moment().subtract(5, "minutes").fromNow(),
    postContent:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    numOfComments: 24,
    profileImage: "theresa.png",
  },
  {
    userName: "Marvin McKinney",
    postTime: moment().subtract(8, "minutes").fromNow(),
    postContent:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    numOfComments: 12,
    profileImage: "marvin.png",
  },
];
