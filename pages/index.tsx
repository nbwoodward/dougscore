import { vehicles } from "@/lib/dougscore";
import Table from "@/components/table";
import Head from "next/head";

export default function Country() {
  return (
    <>
      <Head>
        <title>The Unofficial Doug Score</title>
      </Head>
      <Table vehicles={vehicles} />
    </>
  );
}
