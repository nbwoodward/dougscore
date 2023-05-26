import { dougScoreRaw } from "./dougScoreRaw";

export interface AggregateData {
  name: string;
  slug: string;
  averageWeekend: number;
  averageDaily: number;
  averageDougScore: number;
  numCars: number;
  href: string;
}

export interface Country extends AggregateData {}

const DEFAULT_RECORD = {
  name: "",
  slug: "",
  averageWeekend: 0,
  averageDaily: 0,
  averageDougScore: 0,
  numCars: 0,
  href: "",
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
  href: string;
}

const toSlug = (str: string): string =>
  str
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();

const getMake = (mk: string): string => {
  const make = mk.trim();
  if (
    make.toLowerCase().startsWith("mercedes") ||
    make.toLowerCase().startsWith("mecedes")
  ) {
    return "Mercedes";
  }

  return make;
};

const countryMap: any = {};
const makeMap: any = {};
const vehicles: Vehicle[] = [];

dougScoreRaw.forEach((row) => {
  const country = row.vc.trim();
  const countrySlug = toSlug(country);
  const make = getMake(row.mk);
  const makeSlug = toSlug(make);
  const model = String(row.md).trim();
  const modelSlug = toSlug(model);
  const href = `/${row.yr}/${makeSlug}/${modelSlug}`;

  const lcr = countryMap[country] || DEFAULT_RECORD;
  const countryRecord = {
    name: country,
    slug: countrySlug,
    averageWeekend: Math.round(
      (lcr.averageWeekend * lcr.numCars + row.tw) / (lcr.numCars + 1)
    ),
    averageDaily: Math.round(
      (lcr.averageDaily * lcr.numCars + row.td) / (lcr.numCars + 1)
    ),
    averageDougScore: Math.round(
      (lcr.averageDougScore * lcr.numCars + row.ds) / (lcr.numCars + 1)
    ),
    numCars: lcr.numCars + 1,
    href: `countries/${countrySlug}`,
  };

  const lmr = makeMap[make] || DEFAULT_RECORD;
  const makeRecord = {
    name: make,
    slug: makeSlug,
    averageWeekend: Math.round(
      (lmr.averageWeekend * lmr.numCars + row.tw) / (lmr.numCars + 1)
    ),
    averageDaily: Math.round(
      (lmr.averageDaily * lmr.numCars + row.td) / (lmr.numCars + 1)
    ),
    averageDougScore: Math.round(
      (lmr.averageDougScore * lmr.numCars + row.ds) / (lmr.numCars + 1)
    ),
    numCars: lmr.numCars + 1,
    href: `makes/${makeSlug}`,
  };

  countryMap[country] = countryRecord;
  makeMap[make] = makeRecord;
  vehicles.push({
    ...row,
    mk: make,
    md: model,
    makeSlug,
    modelSlug,
    countrySlug,
    href,
  });
});

const countries: Country[] = Object.values(countryMap);
const makes: Make[] = Object.values(makeMap);

countries.sort((a: any, b: any) => a.name.localeCompare(b.name));
makes.sort((a: any, b: any) => a.name.localeCompare(b.name));

export { countries, makes, vehicles };
