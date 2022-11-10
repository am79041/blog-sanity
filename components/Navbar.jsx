import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { MdWbSunny, MdNightsStay } from "react-icons/md";
import { FcFlashAuto } from "react-icons/fc";

export default function Header() {
  const [dark, setDark] = useState(true);
  const { asPath } = useRouter();
  const activeLink = "cursor-pointer px-4 text-red-300";
  const inactiveLink = "cursor-pointer px-4";

  const changeTheme = () => {
    if (dark) {
      document.body.style.backgroundColor = "#061019";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "black";
    }
    setDark(!dark);
  };

  return (
    <section className="lg:w-[50%] md:w-[70%] w-[80%] mx-auto my-[3rem] flex flex-row justify-between items-center md:text-lg text-[1rem]">
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
        {/* <button onClick={changeTheme}>
          {dark === false ? (
            <MdWbSunny className="text-yellow-300 w-6 h-6" />
          ) : (
            <MdNightsStay className="text-red-300 w-6 h-6" />
          )}
        </button> */}
      </nav>
    </section>
  );
}
