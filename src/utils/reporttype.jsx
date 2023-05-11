const reportList = [
  {
    id: "1",
    name: "Stolen",
  },
  {
    id: "2",
    name: "Missing",
  },
];

export const reportlist = reportList.map((report) => {
  return {
    value: report.name,
    label: report.name,
  };
});
