import ISources from "../interfaces/sources";

export const getLanguages = (sources: Array<ISources>) => {
  const languages = sources.map((source: ISources) => source.language);

  const uniqueLanguages = Array.from(new Set(languages));

  return uniqueLanguages.slice(0, 10);
};
