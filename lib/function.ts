const formatDate = (dateInput: string | Date): string => {
  const date = new Date(dateInput);

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return date.toLocaleDateString('fr-FR', options);
};

export { formatDate };
