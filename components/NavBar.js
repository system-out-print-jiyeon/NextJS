import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
        <nav>
            {/* <a/> (anchor)사용하면 브라우저가 다른페이지로 보내기 위해 전체페이지를 새로고침하기때문에 느려짐, 사용권장안함 
             next/link에서 제공하는 link사용 */}
            <Link href="/" legacyBehavior>
                <a
                className={`${styles.link} ${
                    router.pathname === "/" ? styles.active : ""
                }`}
                >
                Home
                </a>
            </Link>
            <Link href="/about" legacyBehavior>
                <a
                className={[
                    styles.link,
                    router.pathname === "/about" ? styles.active : "",
                ].join(" ")}
                >
                About
                </a>
            </Link>
        </nav>
    );
}