import "../styles/globals.css"
import Navbar from "../components/layouts/Navbar"
import { ThemeProvider } from "next-themes"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <main
        className={`prose-md prose m-auto sm:p-2 p-4 dark:text-white`}
      >
        <ThemeProvider attribute="class">
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}
