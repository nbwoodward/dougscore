import { AiOutlineArrowRight } from "react-icons/ai";
import { Vehicle } from "@/lib/dougscore";
import Link from "next/link";

interface CarProps {
  car: Vehicle;
}

export default function Car({ car }: CarProps) {
  return (
    <div id="carPage">
      <h2>
        {car.yr} <Link href={`/makes/${car.makeSlug}`}>{car.mk}</Link> {car.md}
      </h2>
      <h3>
        Made in <Link href={`/countries/${car.countrySlug}`}>{car.vc}</Link>
      </h3>
      <div id="carData">
        <div className="table" id="weekend">
          <div className="tableRow" id="styling">
            <div className="label">Styling</div>
            <div className="value">{car.s}</div>{" "}
          </div>
          <div className="tableRow" id="acceleration">
            <div className="label">Styling</div>
            <div className="value">{car.a}</div>
          </div>
          <div className="tableRow" id="handling">
            <div className="label">Handling</div>
            <div className="value">{car.h}</div>
          </div>
          <div className="tableRow" id="funfactor">
            <div className="label">Fun Factor</div>
            <div className="value">{car.ff}</div>
          </div>
          <div className="tableRow" id="coolfactor">
            <div className="label">Cool Factor</div>
            <div className="value">{car.cf}</div>
          </div>
          <div className="tableRow" id="totalWeekend">
            <div className="label">Total Weekend:</div>
            <div className="value">{car.tw}</div>
          </div>
        </div>
        <div className="table" id="daily">
          <div className="tableRow" id="features">
            <div className="label">Features</div>
            <div className="value">{car.f}</div>
          </div>
          <div className="tableRow" id="comfort">
            <div className="label">Comfort</div>
            <div className="value">{car.c}</div>
          </div>
          <div className="tableRow" id="quality">
            <div className="label">Quality</div>
            <div className="value">{car.q}</div>
          </div>
          <div className="tableRow" id="practicality">
            <div className="label">Practicality</div>
            <div className="value">{car.p}</div>
          </div>
          <div className="tableRow" id="value">
            <div className="label">Value</div>
            <div className="value">{car.v}</div>
          </div>
          <div className="tableRow" id="totalDaily">
            <div className="label">Total Daily:</div>
            <div className="value">{car.td}</div>
          </div>
        </div>
      </div>
      <div className="table" id="dougScore">
        <div className="tableRow">
          <div className="label">Doug Score:</div>
          <div className="value">{car.ds}</div>
        </div>
      </div>
      <div id="videoLink">
        {car.vl && (
          <Link href={car.vl} target="_blank">
            <div>YouTube Video</div>
            <AiOutlineArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}
