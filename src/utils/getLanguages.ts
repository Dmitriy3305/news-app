import ISources from '../interfaces/sources';
import { languageMap } from '../const/languageMap';

export const getLanguages = (sources: Array<ISources>) => {
  const languages = sources.map((source: ISources) => source.language);

  const uniqueLanguages = Array.from(new Set(languages));

  const validLanguages = uniqueLanguages.filter(
    (language) => language in languageMap
  );

  const fullLanguageNames = validLanguages.map((language) =>
    languageMap[language as keyof typeof languageMap].toUpperCase()
  );

  return fullLanguageNames.slice(0, 10);
};
