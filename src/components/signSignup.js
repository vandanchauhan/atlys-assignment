import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function SignSignupComp({ showLogin, onContinue }) {
  const [showLoginState, setShowLoginState] = useState(showLogin);
  const header = showLoginState ? "WELCOME BACK" : "SIGN UP";
  const subHeader = showLoginState
    ? "Log into your account"
    : "Create an account to continue";

  return (
    <div class="w-full bg-[#27292D] rounded-lg shadow border-2 border-[#969696] md:mt-0 sm:max-w-lg xl:p-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-6">
        <div className="text-center">
          <p className="text-sm text-[#6B6C70]">{header}</p>
          <p class="text-sm leading-tight tracking-tight text-gray-900 md:text-lg dark:text-white">
            {subHeader}
          </p>
        </div>
        <div class="space-y-4 md:space-y-6" action="#">
          {showLoginState ? (
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-[#C5C7CA]"
              >
                Email or Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-[#27292D] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#27292D] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email or username"
                required=""
              />
            </div>
          ) : (
            <>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-[#C5C7CA]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-[#27292D] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#27292D] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-[#C5C7CA]"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="bg-[#27292D] border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#27292D] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your username"
                  required=""
                />
              </div>
            </>
          )}
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-[#C5C7CA]"
              >
                Password
              </label>
              <a
                href="#"
                class="text-sm font-medium text-[#4A96FF] hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder={
                showLoginState
                  ? "Enter your password"
                  : "Choose a strong password"
              }
              class="bg-[#27292D] border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#27292D] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <button
            onClick={onContinue}
            type="submit"
            class="w-full text-white bg-[#4A96FF] hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-[#4A96FF] dark:hover:bg-opacity-90 dark:focus:ring-primary-800"
          >
            {showLoginState ? "Login now" : "Continue"}
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            {showLoginState
              ? "Not registered yet? "
              : "Already have an account ? "}
            <a
              href="#"
              class="font-medium text-[#4A96FF] hover:underline dark:text-primary-500"
              onClick={() => setShowLoginState(!showLoginState)}
            >
              {showLoginState ? "Register" : "Login"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
