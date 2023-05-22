import { useState, useEffect } from "react";
import { vehicles, Vehicle } from "@/lib/dougscore";
import { useRouter } from "next/router";
import Car from "@/components/car";


export default function Model() {
  const [car, setCar] = useState<Vehicle | undefined>()
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect( () => {
    const year = parseInt(String(router?.query?.year))
    const makeSlug = router?.query?.make
    const modelSlug = router?.query?.model
    if (!makeSlug || !modelSlug || !year) return

    const car = vehicles.filter( c => c.makeSlug === makeSlug && c.modelSlug == modelSlug && c.yr === year)?.[0]
    if (!car) {
      setError("No car found")
    }
    setCar(car)

  }, [router])



  return (
    <>
      {error && (<div>{error}</div>)}
      {car && (
        <Car car={car} />
      )}
    </>
  )
}
