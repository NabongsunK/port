import { useRouter } from "next/router";
import navlinks from "../data/navlinks";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      {navlinks.map((nav) => {
        return (
          <Link href={nav.link} key={nav.title}>
            <a
              className={
                `my_hover_line inline-block mr-8 ` +
                ("/" + router.asPath.split("/")[1] == nav.link
                  ? "selected"
                  : "")
              }
            >
              {nav.title}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
