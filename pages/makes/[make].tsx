import { useState, useEffect } from "react";
import { vehicles, Vehicle } from "@/lib/dougscore";
import { useRouter } from "next/router";
import Table from "@/components/table";


export default function Make() {
  const [cars, setCars] = useState<Vehicle[]>([])
  const router = useRouter()

  useEffect( () => {
    const makeSlug = router?.query?.make
    if (!makeSlug) return

    const makeVehicles = vehicles.filter( c => c.makeSlug === makeSlug)
    setCars(makeVehicles)

  }, [router])



  return (
    <>
      <Table vehicles={cars} />
    </>
  )
}
