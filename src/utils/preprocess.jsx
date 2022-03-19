const adjustMapping = (company, obj) => {
  const result = {};

  Object.keys(obj).forEach((key) => {
    result[key] = obj[key]
      .filter((item) => item[Object.keys(item)[0]] !== null)
      .map((item) => {
        const [date] = Object.keys(item);
        const ddate = new Date(date);

        return {
          date: ddate.toJSON(),
          value: parseFloat(item[date]),
          company,
        };
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  });

  return result;
};

export const preprocessData = (company, data) => ({
  IncomeStatement: adjustMapping(company, data.StatementsOfIncome),
  BalanceSheet: adjustMapping(company, data.BalanceSheets),
  CashFlow: adjustMapping(company, data.StatementsOfCashFlows),
});

const combine = (...datas) => {
  const combinedData = {};

  datas.forEach((data) => {
    Object.keys(data).forEach((key) => {
      if (!(key in combinedData)) combinedData[key] = [];
      combinedData[key] = combinedData[key].concat(data[key]);
    });
  });

  return combinedData;
};

export const combineData = (...datas) => {
  const result = {};
  const types = ['IncomeStatement', 'BalanceSheet', 'CashFlow'];

  types.forEach((type) => {
    result[type] = combine(...datas.map((item) => item[type]));
  });

  return result;
};
