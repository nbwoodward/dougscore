import { makes } from "@/lib/dougscore";
import Head from "next/head";
import DataTable, { Column } from "@/components/dataTable";

export default function Makes() {
  const cols: Column[] = [
    { title: "Name", slug: "name", type: "string" },
    { title: "Avg Weekend", slug: "averageWeekend", type: "number" },
    { title: "Avg Daily", slug: "averageDaily", type: "number" },
    { title: "Avg Total", slug: "averageDougScore", type: "number" },
    { title: "Num Cars", slug: "numCars", type: "number" },
  ];

  return (
    <>
      <Head>
        <title>Doug Score - All Makes</title>
      </Head>
      <DataTable data={makes} cols={cols} />
    </>
  );
}
