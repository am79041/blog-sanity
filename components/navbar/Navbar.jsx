import Link from "next/link";
import { useRouter } from "next/router";
import { FcFlashAuto } from "react-icons/fc";

export default function Navbar() {
  const { asPath } = useRouter();
  const activeLink =
    "cursor-pointer px-4 text-blue-300 no-underline hover:text-blue-400 hover:underline";
  const inactiveLink = "cursor-pointer px-4 no-underline hover:underline";

  return (
    <section className="prose dark:prose-invert mx-auto my-12 px-[1rem] flex flex-row justify-between items-center md:text-lg text-[1rem]">
      <Link href="/">
        <a>
          <FcFlashAuto className="w-8 h-8 cursor-pointer" />
        </a>
      </Link>
      <nav className="flex flex-row justify-between items-center">
        <Link href="/blog">
          <a className={asPath.startsWith("/blog") ? activeLink : inactiveLink}>
            {" "}
            Blog
          </a>
        </Link>
        <Link href="/">
          <a
            className={
              asPath.startsWith("/project") ? activeLink : inactiveLink
            }
          >
            Projects
          </a>
        </Link>
      </nav>
    </section>
  );
}
