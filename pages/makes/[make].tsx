import { useState, useEffect } from "react";
import { vehicles, Vehicle, makes, Make } from "@/lib/dougscore";
import { useRouter } from "next/router";
import Head from "next/head";
import Table from "@/components/table";

export default function Make() {
  const [cars, setCars] = useState<Vehicle[]>([]);
  const [make, setMake] = useState<Make>();
  const router = useRouter();

  useEffect(() => {
    const makeSlug = router?.query?.make;
    if (!makeSlug) return;

    const makeVehicles = vehicles.filter((c) => c.makeSlug === makeSlug);
    setCars(makeVehicles);

    const make = makes.filter((m) => m.slug === makeSlug)?.[0];
    setMake(make);
  }, [router]);

  return (
    <>
      <Head>
        <title>Doug Score - {make?.name}</title>
      </Head>
      <Table vehicles={cars} />
    </>
  );
}
