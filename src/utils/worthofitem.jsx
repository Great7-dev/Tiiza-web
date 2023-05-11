const worth = [
  {
    id: "1",
    name: "1,000-10,000",
  },
  {
    id: "2",
    name: "10,000-100,000",
  },
  {
    id: "3",
    name: "100,000 and above",
  },
];

export const worthofitem = worth.map((worth) => {
  return {
    value: worth.name,
    label: worth.name,
  };
});
