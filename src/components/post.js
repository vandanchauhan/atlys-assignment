import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function PostComp({
  userName,
  postTime,
  postContent,
  numOfComments,
  profileImage,
}) {
  return (
    <div className="[border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] bg-[rgba(39,41,45,1)] box-border min-w-[704px] pt-[26px] pb-[25px] px-[22px] rounded-br-lg rounded-t-lg rounded-bl-lg border-2 border-[rgba(53,55,59,1)] mb-4">
      <div className="flex justify-start items-center flex-row w-full box-border cursor-pointer">
        <img
          src={`/${profileImage}`}
          className="[border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] h-11 max-w-[initial] object-cover w-11 box-border block rounded-br-[50%] rounded-t-[50%] rounded-bl-[50%]"
        />
        <div className="grow shrink-0 basis-auto ml-[15px]">
          <div className="flex justify-between items-start flex-row gap-2 w-full box-border">
            <p className="[font-family:Inter,sans-serif] text-base font-medium text-[rgba(197,199,202,1)] whitespace-pre-wrap grow-0 shrink-0 basis-auto pb-[11px]">
              {userName}
            </p>
            <div className="grow-0 shrink-0 basis-auto pt-2.5">
              <img
                className="w-5 h-5 text-[rgba(197,199,202,1)] flex cursor-pointer"
                src="/dots.svg"
              />
            </div>
          </div>
          <p className="[font-family:Inter,sans-serif] text-sm font-medium text-[rgba(127,128,132,1)] whitespace-pre-wrap mt-[-7px]">
            {postTime}
          </p>
        </div>
      </div>
      <div className="bg-[rgba(25,25,32,1)] box-border flex justify-start items-start flex-row w-full mt-5 pt-[15px] pb-[21px] px-4 rounded-br-lg rounded-t-lg rounded-bl-lg">
        <div className="grow-0 shrink-0 basis-auto pb-[23px]">
          <div className="bg-[url('/assets/div_2_108_2_109_318b56.svg')] bg-[50%] bg-cover bg-no-repeat h-12 box-border flex justify-center items-stretch flex-col px-3.5">
            <p className="bg-[rgba(39,41,45,1)] w-12 h-12 text-center pt-3 rounded-full [font-family:Inter,sans-serif] text-lg font-medium text-black whitespace-pre-wrap grow-0 shrink-0 basis-auto">
              👋
            </p>
          </div>
        </div>
        <p className="[font-family:Inter,sans-serif] text-base font-normal text-left leading-6 text-[rgba(127,128,132,1)] whitespace-pre-wrap max-w-[553px] grow-0 shrink basis-auto box-border ml-[15px]">
          {postContent}
        </p>
      </div>
      <div className="flex justify-start items-center flex-row mt-3 cursor-pointer">
        <img
          className="w-5 h-5 text-[rgba(197,199,202,1)] flex grow-0 shrink-0 basis-auto"
          src="/chat.svg"
        />
        <p className="[font-family:Inter,sans-serif] text-sm font-medium text-[rgba(127,128,132,1)] whitespace-pre-wrap grow-0 shrink-0 basis-auto ml-[7px]">
          {numOfComments} comments
        </p>
      </div>
    </div>
  );
}
