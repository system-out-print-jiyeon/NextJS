import Layout from "../components/Layout";
// 페이지나 컴포넌트 안에 css를 import하고싶다면, 그건 module이여야한다.
// 하지만 커스텀App컴포넌트가 있는 곳에서라면 모든 global styles 임포트 가능
// import "../styles/globals.css";

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}