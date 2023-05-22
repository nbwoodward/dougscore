import { dougScoreRaw } from "./dougScoreRaw";

export interface Country {
  name: string;
  slug: string;
}

export interface Make {
  name: string;
  slug: string;
}

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

const toSlug = (str: string): string => str
  .replace(/\s+/g, "-")
  .replace(/[^a-zA-Z0-9-]/g,'')
  .toLowerCase();

const countryMap: any = {};
const makeMap: any = {};
const vehicles: Vehicle[] = []

dougScoreRaw.forEach((row) => {
  const country = row.vc.trim();
  const countrySlug = toSlug(country)
  const make = row.mk.trim();
  const makeSlug = toSlug(make)
  const model = String(row.md).trim()
  const modelSlug = toSlug(model)

  countryMap[country] = { name: country, slug: countrySlug };
  makeMap[make] = { name: make, slug: makeSlug };
  vehicles.push({...row, md: model, makeSlug, modelSlug, countrySlug })
});

const countries: Country[] = Object.values(countryMap);
const makes: Make[] = Object.values(makeMap);

countries.sort((a: any, b: any) => a.name.localeCompare(b.name));
makes.sort((a: any, b: any) => a.name.localeCompare(b.name));

export { countries, makes, vehicles };
