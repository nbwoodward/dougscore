import { Vehicle } from "@/lib/dougscore";

interface CarProps {
  car: Vehicle;
}

export default function Car({ car }: CarProps) {
  return (
    <div id="carPage">
      <h2>
        {car.yr} {car.mk} {car.md}
      </h2>
      <h3>Made in {car.vc}</h3>
      <div id="carData">
        <table id="weekend">
          <tr id="styling">
            <td className="label">Styling</td>
            <td className="value">{car.s}</td> </tr>
          <tr id="acceleration">
            <td className="label">Styling</td>
            <td className="value">{car.a}</td>
          </tr>
          <tr id="handling">
            <td className="label">Handling</td>
            <td className="value">{car.h}</td>
          </tr>
          <tr id="funfactor">
            <td className="label">Fun Factor</td>
            <td className="value">{car.ff}</td>
          </tr>
          <tr id="coolfactor">
            <td className="label">Cool Factor</td>
            <td className="value">{car.cf}</td>
          </tr>
          <tr id="totalWeekend">
            <td className="label">Total Weekend</td>
            <td className="value">{car.tw}</td>
          </tr>
        </table>
        <table id="daily">
          <tr id="features">
            <td className="label">Features</td>
            <td className="value">{car.f}</td>
          </tr>
          <tr id="comfort">
            <td className="label">Comfort</td>
            <td className="value">{car.c}</td>
          </tr>
          <tr id="quality">
            <td className="label">Quality</td>
            <td className="value">{car.q}</td>
          </tr>
          <tr id="practicality">
            <td className="label">Practicality</td>
            <td className="value">{car.p}</td>
          </tr>
          <tr id="value">
            <td className="label">Value</td>
            <td className="value">{car.v}</td>
          </tr>
          <tr id="totalDaily">
            <td className="label">Total Daily</td>
            <td className="value">{car.td}</td>
          </tr>
        </table>
      </div>
      <table id="dougScore">
        <tr>
        <td className="label">Doug Score:</td>
        <td className="value">{car.ds}</td>
        </tr>
      </table>
    </div>
  );
}
