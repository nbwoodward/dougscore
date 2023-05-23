import { dougScoreRaw } from "./dougScoreRaw";

export interface AggregateData {
  name: string;
  slug: string;
  averageWeekend: number;
  averageDaily: number;
  averageDougScore: number;
  numCars: number;
}

export interface Country extends AggregateData {}

const DEFAULT_RECORD = {
  name: "",
  slug: "",
  averageWeekend: 0,
  averageDaily: 0,
  averageDougScore: 0,
  numCars: 0,
};

export interface Make extends AggregateData {}

export interface Vehicle {
  yr: number; // Year
  mk: string; // Make
  md: string; // Model
  s: number; // Styling
  a: number; // Acceleration
  h: number; // Handling
  ff: number; // Fun Factor
  cf: number; // Cool Factor
  tw: number; // Total Weekend
  f: number; // Features
  c: number; // Comfort
  q: number; // Quality
  p: number; // Practicality
  v: number; // Value
  td: number; // Total Daily
  ds: number; // Doug Score
  vl?: string; // Video Link
  fs?: string; // Filming State
  fc: string; // Filming City
  vc: string; // Vehicle Country
  modelSlug: string;
  makeSlug: string;
  countrySlug: string;
}

const toSlug = (str: string): string =>
  str
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();

const countryMap: any = {};
const makeMap: any = {};
const vehicles: Vehicle[] = [];

dougScoreRaw.forEach((row) => {
  const country = row.vc.trim();
  const countrySlug = toSlug(country);
  const make = row.mk.trim();
  const makeSlug = toSlug(make);
  const model = String(row.md).trim();
  const modelSlug = toSlug(model);

  const lcr = countryMap[country] || DEFAULT_RECORD;
  const countryRecord = {
    name: country,
    slug: countrySlug,
    averageWeekend:
      (lcr.averageWeekend * lcr.numCars + row.tw) / (lcr.numCars + 1),
    averageDaily: (lcr.averageDaily * lcr.numCars + row.td) / (lcr.numCars + 1),
    averageDougScore:
      (lcr.averageDougScore * lcr.numCars + row.ds) / (lcr.numCars + 1),
    numCars: lcr.numCars + 1,
  };

  const lmr = makeMap[make] || DEFAULT_RECORD;
  const makeRecord = {
    name: make,
    slug: makeSlug,
    averageWeekend:
      (lmr.averageWeekend * lmr.numCars + row.tw) / (lmr.numCars + 1),
    averageDaily: (lmr.averageDaily * lmr.numCars + row.td) / (lmr.numCars + 1),
    averageDougScore:
      (lmr.averageDougScore * lmr.numCars + row.ds) / (lmr.numCars + 1),
    numCars: lmr.numCars + 1,
  };

  countryMap[country] = countryRecord;
  makeMap[make] = makeRecord;
  vehicles.push({ ...row, md: model, makeSlug, modelSlug, countrySlug });
});

const countries: Country[] = Object.values(countryMap);
const makes: Make[] = Object.values(makeMap);

countries.sort((a: any, b: any) => a.name.localeCompare(b.name));
makes.sort((a: any, b: any) => a.name.localeCompare(b.name));

export { countries, makes, vehicles };
