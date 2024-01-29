import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";

const Navbar = async () => {

  const session = await auth();

  return (
    <div className={`${styles.container} sm:px-8`}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links session={session}/>
        {/* <Links /> */}
      </div>
    </div>
  )
}

export default Navbar