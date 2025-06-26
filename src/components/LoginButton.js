import Link from "next/link";

export default function ButtonLogin() {
  return (
    <div className="flex justify-center mt-4">
      <Link href="/produtos" passHref>
        <a className="inline-flex items-center justify-center h-[50px] w-[200px] rounded-full bg-white text-black font-bold no-underline cursor-pointer select-none border border-gray-300 hover:bg-gray-100">
          Login
        </a>
      </Link>
    </div>
  );
}
