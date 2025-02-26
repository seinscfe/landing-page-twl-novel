import Link from "next/link";

const NavLinks = ({ className, onClick }) => {
  return (
    <ul className={`gap-x-5 ${className}`}>
      <li>
        <Link
          href="/"
          className="hover:text-accent transition"
          onClick={onClick}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/chapters"
          className="hover:text-accent transition"
          onClick={onClick}
        >
          Chapters
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="hover:text-accent transition"
          onClick={onClick}
        >
          About
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
