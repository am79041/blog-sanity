import { FcFlashAuto } from "react-icons/fc";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {

  const [display, setDisplay] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const show =
    "bg-[#374151] text-white mt-4 absolute rounded-sm px-8 py-6 text-sm font-bold";
  const hide = "hidden";

  function changeDisplay() {
    setDisplay(!display);
  }

  return (
    <nav className="relative my-16 flex justify-between">
      <Link href="/">
        <FcFlashAuto className="h-10 w-10" />
      </Link>
      <div>
        <button
          onClick={changeDisplay}
          className="rounded-lg border-2 border-pink-600 p-2"
        >
          Preferences
        </button>
        <div className={display ? show : hide}>
          <label htmlFor="theme">Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-gray-500 dark:text-white"
            name="theme"
          >
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
