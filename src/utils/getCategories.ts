import ISources from '../interfaces/ISources';

export const getCategories = (sources: Array<ISources>) => {
  const categories = sources.map((source: ISources) =>
    source.category.toUpperCase()
  );

  const uniqueCategories = Array.from(new Set(categories));

  return uniqueCategories.slice(0, 10);
};
