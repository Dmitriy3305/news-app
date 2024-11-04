export const formattedDate = (dataString: string) => {
  const date = new Date(dataString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const formattedDate = date.toLocaleString('ru-RU', options);

  return formattedDate;
};
