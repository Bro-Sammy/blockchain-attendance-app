import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId="qU4YaFi3T2P70PNvXi05j9C7ttoBzTKHoorRXvb1" serverUrl="https://qmhqpgorz97b.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
