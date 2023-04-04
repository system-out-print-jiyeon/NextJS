export default function NavBar() {
    return (
        <nav>
            {/* <a/> (anchor)사용하면 브라우저가 다른페이지로 보내기 위해 전체페이지를 새로고침하기때문에 느려짐, 사용권장안함 */}
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    );
}