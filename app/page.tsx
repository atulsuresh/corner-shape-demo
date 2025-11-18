import Image from "next/image";
import CornerStyleSelectionPage from "./_components/CornerStyleSelectionPage";

export default function Home() {
  return (
    <>
      <article>
        <h1 className="sr-only">
          CSS Border Corner Shape Generator - Interactive Playground
        </h1>
        <CornerStyleSelectionPage />
      </article>
      <footer className="py-24 flex items-center justify-center text-xs bg-linear-to-b from-white dark:from-black to-zinc-200 dark:to-zinc-900">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://madebyenigma.com"
            target="_blank"
            className="text-blue-800 dark:text-blue-100 hover:text-blue-100"
            rel="noopener noreferrer"
            aria-label="Visit Enigma's website"
          >
            Enigma
          </a>
        </p>
      </footer>
    </>
  );
}
