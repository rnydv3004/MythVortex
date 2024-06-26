import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "light"
      : "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Update the prefers-color-scheme property of the window object
    alert(`${currentTheme} : ${newTheme}`)
    document.documentElement.setAttribute("prefers-color-scheme", newTheme);
  };

  return (
    <button
      aria-label="theme toggler"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        // toggleTheme();
      }}
      className="flex h-8 w-8 items-center  justify-center rounded-full border-2 border-slate-500 p-1 text-sm text-slate-400 active:scale-90 dark:border-slate-400 dark:text-slate-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        height={"18"}
        width={"18"}
        className="block dark:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        height={"22"}
        width={"22"}
        className="hidden dark:block"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    </button>
  );
};

export default ThemeToggler;
