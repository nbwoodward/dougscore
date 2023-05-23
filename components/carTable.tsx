import Link from "next/link";
import { Vehicle } from "@/lib/dougscore";

interface CarTableProps {
  vehicles: Vehicle[];
}

export default function CarTable({ vehicles }: CarTableProps) {
  return (
    <>
      {vehicles.map((c) => (
        <div key={c.yr + c.makeSlug + c.modelSlug}>
          <Link href={`/${c.yr}/${c.makeSlug}/${c.modelSlug}`}>
            {c.yr} {c.mk} {c.md}
          </Link>
        </div>
      ))}
    </>
  );
}
