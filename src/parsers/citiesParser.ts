interface dataInterface {
  items: any[];
}

const citiesParser = (data: dataInterface) => {
  return data.items.reduce((acc, { address, position }, index) => {
    const { label, countryName, county } = address;
    const { lat, lng } = position;
    const title = label.split(",")[0];
    acc = [
      ...acc,
      {
        id: index,
        address: { title, countryName, county },
        position: { latitude: lat, longtitude: lng },
      },
    ];
    return acc;
  }, []);
};

export default citiesParser;
