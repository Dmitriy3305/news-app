import { countryMap } from '../const/countryMap';

export const getShotCountryNames = (fullCountryName: string) => {
  let shortCountryNames = '';

  for (const [key, value] of Object.entries(countryMap)) {
    if (value.toLowerCase() === fullCountryName.toLowerCase()) {
      shortCountryNames = key;
      break;
    }
  }

  return shortCountryNames;
};
