import { countries } from "@/lib/dougscore";
import Link from "next/link";


export default function Countries() {
  return (
    <>
    {countries.map( c => (
      <div key={c.slug}>
        <Link href={`countries/${c.slug}`}>{c.name}</Link>
      </div>
    ))}
    </>
  )
}
