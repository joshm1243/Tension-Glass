import Link from 'next/link';
import styles from "./Navigation.module.css";

export default function Navigation() {

  return (
    <nav className={styles.wrapper}>
      <ul>
        <li className={styles.green}>
          <Link href="/script">Script</Link>
        </li>
        <li className={styles.cyan}>
          <Link href="/patch">Patch</Link>
        </li>
        <li className={styles.purple}>
          <Link href="/sample">Samples</Link>
        </li>
        <li className={styles.pink}>
          <Link href="/system">System</Link>
        </li>

      </ul>
    </nav>
  );
}