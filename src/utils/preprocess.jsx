const adjustMapping = (company, obj) => {
  const result = {};

  Object.keys(obj).forEach((key) => {
    result[key] = obj[key]
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

  // Object.keys(obj).map((key) => ({
  //   title: key,
  //   data: obj[key]
  //     .map((item) => {
  //       const [date] = Object.keys(item);
  //       const ddate = new Date(date);

  //       return {
  //         date: ddate.toJSON(),
  //         value: parseFloat(item[date]),
  //         company: 'Microsoft Corp',
  //       };
  //     })
  //     .sort((a, b) => new Date(a.date) - new Date(b.date)),
  // }));
};

export const preprocessData = (company, data) => ({
  IncomeStatement: adjustMapping(company, data.StatementsOfIncome),
  BalanceSheet: adjustMapping(company, data.BalanceSheets),
  CashFlow: adjustMapping(company, data.StatementsOfCashFlows),
});

const combine = (dataA, dataB) => {
  const combinedData = {};

  dataA.forEach(({ title, data }) => {
    if (!(title in combinedData)) combinedData[title] = [];
    combinedData[title].append(data);
  });

  dataB.forEach(({ title, data }) => {
    if (!(title in combinedData)) combinedData[title] = [];
    combinedData[title].append(data);
  });
  console.log(combinedData);

  return combinedData;
};

export const combineData = (dataA, dataB) => ({
  IncomeStatement: combineData(dataA.IncomeStatement, dataB.IncomeStatement),
  BalanceSheet: combineData(dataA.BalanceSheet, dataB.BalanceSheet),
  CashFlow: combineData(dataA.CashFlow, dataB.CashFlow),
});
