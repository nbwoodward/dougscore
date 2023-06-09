import "@/styles/globals.scss";
import "@/styles/car.scss";
import "@/styles/header.scss";
import "@/styles/dataTable.scss";
import "@/styles/tooltip.scss";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import Header from "@/components/header";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <Header />
      <div id="bodyContainer">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
