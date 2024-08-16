import ISources from "../interfaces/sources";

export const getCountries = (sources: Array<ISources>) => {
  const countries = sources.map((source: ISources) => source.country);

  const uniqueCountries = Array.from(new Set(countries));

  return uniqueCountries.slice(0, 10);
};
