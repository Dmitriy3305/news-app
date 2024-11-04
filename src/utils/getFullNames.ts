import ISources from '../interfaces/ISources';
import { MapType } from '../types/mapType';

export const getFullNames = (
  sources: Array<ISources>,
  map: MapType,
  key: 'country' | 'language'
): Array<string> => {
  const items = sources.map((source: ISources) => source[key]);

  const uniqueItems = Array.from(new Set(items));

  const validItems = uniqueItems.filter((item) => item in map);

  const fullNames = validItems.map((item) =>
    map[item as keyof typeof map].toUpperCase()
  );

  return fullNames.slice(0, 10);
};
