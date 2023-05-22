import { makes } from "@/lib/dougscore";
import Link from "next/link";


export default function Makes() {
  return (
    <>
    {makes.map( m => (
      <div key={m.slug}>
        <Link href={`makes/${m.slug}`}>{m.name}</Link>
      </div>
    ))}
    </>
  )
}
