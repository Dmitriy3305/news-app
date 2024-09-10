import { MapType } from '../types/mapType';

export const getShotNames = (fullName: string, map: MapType): string => {
  let shortName = '';

  for (const [key, value] of Object.entries(map)) {
    if (value.toLowerCase() === fullName.toLowerCase()) {
      shortName = key;
      break;
    }
  }

  return shortName;
};
