import Link from "next/link";
import styles from "./style.module.scss";

const Links = ({ close }) => {
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
        <Link key={x.title} href={x.path} onClick={close}>
          {x.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
