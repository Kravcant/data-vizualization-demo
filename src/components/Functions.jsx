import data from "../game-consoles.json"

export const companySales = (() => {
  const companies = Object.values(
    data.reduce((acc, item) => {
      const company = item.Company;

      if (!acc[company]) {
        acc[company] = {
          company,
          sales: 0
        };
      }

      acc[company].sales += item["Units sold (mil)"];

      return acc;
    }, {})
  ).sort((a, b) => b.sales - a.sales);

  return [
    ...companies.slice(0, 5),
    {
      company: "Other",
      sales: companies
        .slice(5)
        .reduce((sum, c) => sum + c.sales, 0)
    }
  ];
})();

export const yearlySales = Object.values(
  data.reduce((acc, item) => {
    const year = item.Released;

    if (!acc[year]) {
      acc[year] = {
        year,
        sales: 0
      };
    }

    acc[year].sales += item["Units sold (mil)"];

    return acc;
  }, {})
).sort((a, b) => a.year - b.year);

export const companyTrendData = Object.values(
  data.reduce((acc, item) => {
    const year = item.Released;

    if (!acc[year]) {
      acc[year] = {
        year,
        Nintendo: 0,
        Sony: 0,
        Microsoft: 0
      };
    }

    if (
      item.Company === "Nintendo" ||
      item.Company === "Sony" ||
      item.Company === "Microsoft"
    ) {
      acc[year][item.Company] += item["Units sold (mil)"];
    }

    return acc;
  }, {})
).sort((a, b) => a.year - b.year);

export const salesByType = Object.values(
  data.reduce((acc, item) => {
    const type = item.Type;

    if (!acc[type]) {
      acc[type] = {
        type,
        sales: 0
      };
    }

    acc[type].sales += item["Units sold (mil)"];

    return acc;
  }, {})
).sort((a, b) => b.sales - a.sales);