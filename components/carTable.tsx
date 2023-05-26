import { Vehicle } from "@/lib/dougscore";
import DataTable, { Column } from "@/components/dataTable";

interface CarTableProps {
  vehicles: Vehicle[];
}

export default function CarTable({ vehicles }: CarTableProps) {
  const cols: Column[] = [
    { title: "Yr", slug: "yr", type: "number", tooltip: "Year" },
    { title: "Mk", slug: "mk", type: "string", tooltip: "Make" },
    { title: "Md", slug: "md", type: "string", tooltip: "Model" },
    { title: "S", slug: "s", type: "number", tooltip: "Styling" },
    { title: "A", slug: "a", type: "number", tooltip: "Acceleration" },
    { title: "H", slug: "h", type: "number", tooltip: "Handling" },
    { title: "FF", slug: "ff", type: "number", tooltip: "Fun Factor" },
    { title: "CF", slug: "cf", type: "number", tooltip: "Cool Factor" },
    { title: "TW", slug: "tw", type: "number", tooltip: "Total Weekend" },
    { title: "F", slug: "f", type: "number", tooltip: "Features" },
    { title: "C", slug: "c", type: "number", tooltip: "Comfort" },
    { title: "Q", slug: "q", type: "number", tooltip: "Quality" },
    { title: "V", slug: "v", type: "number", tooltip: "Value" },
    { title: "TD", slug: "td", type: "number", tooltip: "Total Daily" },
    { title: "DS", slug: "ds", type: "number", tooltip: "Doug Score" },
    { title: "C", slug: "vc", type: "string", tooltip: "Country" },
  ];

  return (
    <>
      <DataTable data={vehicles} cols={cols} />
    </>
  );
}
