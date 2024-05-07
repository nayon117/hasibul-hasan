import Theme from "./Theme";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="background-light900_dark200 fixed z-50 flex  w-full items-center justify-between gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link className="flex items-center gap-1" href="/">
       
        <p className="h2-bold  font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Hasi<span className="text-primary-500">bul</span>
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
