import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            {/* <a/> (anchor)사용하면 브라우저가 다른페이지로 보내기 위해 전체페이지를 새로고침하기때문에 느려짐, 사용권장안함 
             next/link에서 제공하는 link사용 */}
            <Link href="/" legacyBehavior>
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
                <a className={router.pathname === "/about" ? "active" : ""}>About</a>
            </Link>
            {/* style jsx의 스타일은 오직 이 컴포넌트 내부로 범위가 한정되어서 다른 컴포넌트에 같은 className을 가지고있어도 적용되지 않는다. */}
            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: yellow;
                }
            `}</style>
        </nav>
    );
}