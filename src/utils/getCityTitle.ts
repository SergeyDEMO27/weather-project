const getCityTitle = (data: string | null): string | null => {
  if (!data) {
    return null;
  }
  const title = data.split(",")[0];
  return title;
};

export default getCityTitle;
