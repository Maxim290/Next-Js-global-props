import { AppProps } from "next/app";
import "../styles/globals.css";

interface GlobalData {
    title: string;
}

export interface MyAppProps extends AppProps {
    globalData: GlobalData;
}

function MyApp({ Component, pageProps, globalData }: MyAppProps) {
    return (
        <div>
            <header>
                <h1>{globalData.title}</h1>
            </header>
            <Component {...pageProps} globalData={globalData} />
        </div>
    );
}

MyApp.getInitialProps = async (): Promise<{ globalData: GlobalData }> => {
    const globalData = await fetch(
        "https://jsonplaceholder.typicode.com/todos/15"
    ).then((res) => res.json());
    return { globalData };
};

export default MyApp;
