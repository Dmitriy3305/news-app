import { languageMap } from '../const/languageMap';

export const getShotLanguageNames = (fullLanguageName: string) => {
  let shortLanguageNames = '';

  for (const [key, value] of Object.entries(languageMap)) {
    if (value.toLowerCase() === fullLanguageName.toLowerCase()) {
      shortLanguageNames = key;
      break;
    }
  }

  return shortLanguageNames;
};
