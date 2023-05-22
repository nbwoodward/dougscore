import Link from "next/link";
import { Vehicle } from "@/lib/dougscore";

interface TableProps {
  vehicles: Vehicle[]
}

export default function Table({vehicles}: TableProps) {

return (
  <>
    {vehicles.map( c => (
      <div key={c.yr+c.makeSlug+c.modelSlug}>
        <Link href={`/${c.yr}/${c.makeSlug}/${c.modelSlug}`}>{c.yr} {c.mk} {c.md}</Link>
      </div>
    ))}
  </>
)

}
