import { makes } from "@/lib/dougscore";
import Link from "next/link";
import Head from "next/head";

export default function Makes() {
  return (
    <>
      <Head>
        <title>Doug Score - All Makes</title>
      </Head>
      {makes.map((m) => (
        <div key={m.slug}>
          <Link href={`makes/${m.slug}`}>{m.name}</Link>
        </div>
      ))}
    </>
  );
}
