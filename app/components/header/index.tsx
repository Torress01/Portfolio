import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#sobre",
  },
  {
    label: "Competências",
    href: "#competencias",
  },
  {
    label: "Experiências",
    href: "#experience",
  },
  {
    label: "Formação",
    href: "#formacao",
  },
];

export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image width={58} height={49} src="/images/logo2.png" alt="logo" />
        </Link>

        <nav className="hidden md:flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};
