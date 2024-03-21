import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function CreatePost({ createPost, setOpen, isLoggedIn }) {
  const [content, setContent] = useState("");
  return (
    <div className="border-top-style:solid mb-4 [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] bg-[rgba(39,41,45,1)] box-border flex justify-center items-stretch flex-col gap-4 min-w-[704px] pl-[21px] pr-[22px] py-[26px] rounded-br-lg rounded-t-lg rounded-bl-lg border-2 border-[rgba(53,55,59,1)]">
      <p className="[font-family:Inter,sans-serif] text-lg font-medium text-[rgba(197,199,202,1)] whitespace-pre-wrap grow-0 shrink-0 basis-auto">
        Create post
      </p>
      <div className="bg-[rgba(25,25,32,1)] box-border flex justify-start items-center flex-row grow-0 shrink-0 basis-auto px-4 rounded-br-lg rounded-t-lg rounded-bl-lg py-3">
        <div className="bg-[url('/assets/div_2_80_2_81_9041c5.svg')] bg-[50%] bg-cover bg-no-repeat h-12 box-border flex justify-center items-center flex-col grow-0 shrink-0 basis-auto px-3.5">
          <p className="bg-[rgba(39,41,45,1)] w-12 h-12 text-center pt-3 rounded-full [font-family:Inter,sans-serif] text-lg font-medium text-black whitespace-pre-wrap grow-0 shrink-0 basis-auto">
            💬
          </p>
        </div>
        <textarea
          id="message"
          rows="1"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          class=" w-full text-sm p-4 text-gray-900 bg-[rgba(25,25,32,1)] rounded-lg dark:bg-[rgba(25,25,32,1)] dark:placeholder-gray-400 dark:text-white dark:focus:border-[#0000]"
          placeholder="How are you feeling today ?"
        ></textarea>
      </div>
      <a
        onClick={() => {
          isLoggedIn ? content !== "" && createPost(content) : setOpen(true);
          setContent("");
        }}
        className="[border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] bg-[rgba(74,150,255,1)] [font-family:Inter,sans-serif] text-base font-medium text-white min-w-[111px] h-[43px] w-[111px] cursor-pointer block box-border self-end grow-0 shrink-0 basis-auto rounded-tl rounded-tr rounded-br rounded-bl text-center pt-2"
      >
        Post
      </a>
    </div>
  );
}
