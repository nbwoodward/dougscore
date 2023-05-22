import { countries } from "@/lib/dougscore";
import Link from "next/link";
import Head from "next/head";

export default function Countries() {
  return (
    <>
      <Head>
        <title>Doug Score - All Makes</title>
      </Head>
      {countries.map((c) => (
        <div key={c.slug}>
          <Link href={`countries/${c.slug}`}>{c.name}</Link>
        </div>
      ))}
    </>
  );
}
