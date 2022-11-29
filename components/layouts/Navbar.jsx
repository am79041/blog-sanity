import Link from "next/link";
import { FcFlashAuto } from "react-icons/fc";

export default function Navbar() {
  return (
    <section className="not-prose bg-blue-900 p-8 px-[1rem]">
      <div
        id="navbar"
        className="m-auto flex w-1/2 flex-row justify-between text-[1rem] md:text-lg"
      >
        <Link legacyBehavior href="/">
          <a>
            <FcFlashAuto className="h-8 w-8 cursor-pointer" />
          </a>
        </Link>
        <nav className="flex w-3/5 justify-around text-[1rem] ">
          <Link href={"/"}>HOME</Link>
          <Link href="/archive/1">ARCHIVE</Link>
          {/* <input type="text" className="rounded-sm px-4 text-sm text-black" /> */}
        </nav>
      </div>
    </section>
  );
}
