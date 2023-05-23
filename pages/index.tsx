import { vehicles } from "@/lib/dougscore";
import CarTable from "@/components/carTable";
import Head from "next/head";

export default function Country() {
  return (
    <>
      <Head>
        <title>The Unofficial Doug Score</title>
      </Head>
      <CarTable vehicles={vehicles} />
    </>
  );
}
