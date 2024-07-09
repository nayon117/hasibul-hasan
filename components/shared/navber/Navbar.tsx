import Theme from "./Theme";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="background-light900_dark200 fixed z-50 flex  w-full items-center justify-between gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link
        className="flex size-10 items-center justify-center rounded-lg bg-white font-bold shadow-md "
        href="/"
      >
        <p className="h2-bold blue-gradient_text font-spaceGrotesk">
          HN
        </p>
      </Link>

      <div className="flex items-center">
        <Theme />
        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar;
