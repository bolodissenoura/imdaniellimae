import "../styles/globals.css";
import type { AppProps } from "next/app";
import "keen-slider/keen-slider.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
