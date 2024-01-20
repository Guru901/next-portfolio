"use client";

import Link from "next/link";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";

const Links = ({ close }) => {
  const pathName = usePathname();

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className={styles.links}>
      {links.map((x) => (
        <Link
          key={x.title}
          href={x.path}
          onClick={close}
          className={pathName === x.path && styles.active}
        >
          {x.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
