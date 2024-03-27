import navlinks from "../data/navlinks";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          <div className={`inline-block mr-5`}>{nav.title}</div>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
