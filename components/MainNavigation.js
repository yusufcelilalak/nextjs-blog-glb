import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const router = useRouter();

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <h1>glb.</h1>
      </div>
      <nav>
        <ul>
          <li className={router.pathname == "/" ? styles.active : ""}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={router.pathname == "/posts" ? styles.active : ""}>
            <Link href="/posts">
              <a>Blog Posts</a>
            </Link>
          </li>
          <li className={router.pathname == "/new-post" ? styles.active : ""}>
            <Link href="/new-post">
              <a>New Post</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
