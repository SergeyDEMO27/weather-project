interface suggestionsInterface {
  suggestions: Array<{
    label: string;
  }>;
}

const suggestedCitiesParser = ({ suggestions }: suggestionsInterface) => {
  const result = suggestions.map(({ label }) =>
    label
      .split(",")
      .reverse()
      .map((string) => string.trim())
      .join(", ")
  );
  return result;
};

export default suggestedCitiesParser;
