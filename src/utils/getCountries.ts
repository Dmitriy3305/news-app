import ISources from '../interfaces/sources';
import { countryMap } from '../const/countryMap';

export const getCountries = (sources: Array<ISources>) => {
  const countries = sources.map((source: ISources) => source.country);

  const uniqueCountries = Array.from(new Set(countries));

  const validCountries = uniqueCountries.filter(
    (country) => country in countryMap
  );

  const fullCountryNames = validCountries.map((country) =>
    countryMap[country as keyof typeof countryMap].toUpperCase()
  );

  return fullCountryNames.slice(0, 10);
};
