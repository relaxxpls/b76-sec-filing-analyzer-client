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

export const preprocessData = (data) => ({
  IncomeStatement: adjustMapping(data.Name, data.StatementsOfIncome),
  BalanceSheet: adjustMapping(data.Name, data.BalanceSheets),
  CashFlow: adjustMapping(data.Name, data.StatementsOfCashFlows),
  Name: data.Name,
  Analytics: data.Analytics,
  Sentiment: data.Sentiment,
  Filings: data.Filings,
  'Q&A': data['Q&A'],
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
