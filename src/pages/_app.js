import "../styles/globals.css";

function MyApp({ Component, pageProps, globalData }) {
    return (
        <div>
            <header>
                <h1>{globalData.title}</h1>
            </header>
            <Component {...pageProps} globalData={globalData} />
        </div>
    );
}

MyApp.getInitialProps = async () => {
    const globalData = await fetch(
        "https://jsonplaceholder.typicode.com/todos/15"
    ).then((res) => res.json());
    return { globalData };
};

export default MyApp;
