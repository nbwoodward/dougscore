import { vehicles } from "@/lib/dougscore";
import Table from "@/components/table";

export default function Country() {
  return (
    <>
      <Table vehicles={vehicles} />
    </>
  )
}
