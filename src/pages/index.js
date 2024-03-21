import Image from "next/image";
import { Inter } from "next/font/google";
import SignSignupComp from "@/components/signSignup";
import { redirect } from 'next/navigation'
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            class="w-8 h-8 mr-2"
            src="/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
        </a>
        <SignSignupComp showLogin={true} onContinue={() => router.push('/feed')} />
      </div>
    </div>
  );
}
