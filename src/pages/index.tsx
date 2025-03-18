import { MyAppProps } from "./_app";

export default function Home({ globalData }: MyAppProps) {
    return (
        <div>
            <h2>Home Page</h2>
            <p>Global Data: {globalData.title}</p>
        </div>
    );
}
