import Link from "next/link";
import { useRouter } from "next/router";
import { FcFlashAuto } from "react-icons/fc";

export const activeLink =
  "cursor-pointer px-4 text-white no-underline hover:text-blue-400 hover:underline";
export const inactiveLink =
  "cursor-pointer px-4 no-underline hover:underline hover:text-blue-300";

export default function Navbar() {
  const { asPath } = useRouter();

  return (
    <section className="mx-auto my-12 flex flex-row items-center justify-between px-[1rem] text-[1rem] md:text-lg">
      <Link href="/">
        <a>
          <FcFlashAuto className="h-8 w-8 cursor-pointer" />
        </a>
      </Link>
      <nav className="flex flex-row items-center justify-between">
        <Link href="/archive/1">
          <a
            className={
              asPath.startsWith("/archive") || asPath.startsWith("/posts")
                ? activeLink
                : inactiveLink
            }
          >
            {" "}
            Blog
          </a>
        </Link>
      </nav>
    </section>
  );
}
