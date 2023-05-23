import { useState, useEffect } from "react";
import { vehicles, Vehicle, countries, Country } from "@/lib/dougscore";
import { useRouter } from "next/router";
import Head from "next/head";
import CarTable from "@/components/carTable";

export default function Country() {
  const [cars, setCars] = useState<Vehicle[]>([]);
  const [country, setCountry] = useState<Country>();
  const router = useRouter();

  useEffect(() => {
    const countrySlug = router?.query?.country;
    if (!countrySlug) return;

    const countryVehicles = vehicles.filter(
      (c) => c.countrySlug === countrySlug
    );
    setCars(countryVehicles);

    const country = countries.filter((c) => c.slug === countrySlug)?.[0];
    setCountry(country);
  }, [router]);

  return (
    <>
      <Head>
        <title>Doug Score - {country?.name}</title>
      </Head>
      <CarTable vehicles={cars} />
    </>
  );
}
