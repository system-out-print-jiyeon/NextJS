import Link from "next/link";
import {useRouter} from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
      <img src="/vercel.svg" />
      <div>
        {/* <a/> (anchor)사용하면 브라우저가 다른페이지로 보내기 위해 전체페이지를 새로고침하기때문에 느려짐, 사용권장안함 
            next/link에서 제공하는 link사용 */}
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      {/* style jsx의 스타일은 오직 이 컴포넌트 내부로 범위가 한정되어서 다른 컴포넌트에 같은 className을 가지고있어도 적용되지 않는다. */}
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}