import { useState, useEffect } from "react";
import { vehicles, Vehicle } from "@/lib/dougscore";
import { useRouter } from "next/router";
import Table from "@/components/table";


export default function Country() {
  const [cars, setCars] = useState<Vehicle[]>([])
  const router = useRouter()

  useEffect( () => {
    const countrySlug = router?.query?.country
    if (!countrySlug) return

    const countryVehicles = vehicles.filter( c => c.countrySlug === countrySlug)
    setCars(countryVehicles)

  }, [router])



  return (
    <>
      <Table vehicles={cars} />
    </>
  )
}
