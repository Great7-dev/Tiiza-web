const categoryList = [
  {
    id: "1",
    name: "Document",
    code: "043",
  },
  {
    id: "2",
    name: "Car",
    code: "043",
  },
  {
    id: "3",
    name: "Laptop",
    code: "043",
  },
  {
    id: "4",
    name: "Key",
    code: "043",
  },
  {
    id: "5",
    name: "Bag",
    code: "043",
  },
  {
    id: "6",
    name: "Phone",
    code: "043",
  },
];

export const categoryOptions = categoryList.map((category) => {
  return {
    value: category.name,
    label: category.name,
  };
});
