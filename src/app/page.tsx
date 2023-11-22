import Image from "next/image";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center items-center flex-col">
      <div className="image-container max-w-xs md:max-w-md xl:max-w-3xl">
        <Image layout="fill" src="/logo-dark.png" alt="Logo" priority />
      </div>
      <Link href="/menu">
        <button
          type="button"
          className="flex items-center gap-2 mt-4 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Dê uma olhada no nosso cardápio
          <RxChevronRight />
        </button>
      </Link>
    </main>
  );
}
