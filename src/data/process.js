const fs = require('fs');

const data = require('./companyDataDefault.json');

const adjustMapping = (obj) =>
  Object.keys(obj).map((key) => ({
    title: key,
    data: obj[key]
      .map((item) => {
        const [date] = Object.keys(item);
        const ddate = new Date(date);

        return {
          date: ddate.toJSON(),
          value: parseFloat(item[date]),
          company: 'Microsoft Corp',
        };
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date)),
  }));

const jsonData = JSON.stringify({
  IncomeStatement: adjustMapping(data.StatementsOfIncome),
  BalanceSheet: adjustMapping(data.BalanceSheets),
  CashFlow: adjustMapping(data.StatementsOfCashFlows),
});

fs.writeFile('./companyDataSample.json', jsonData, (err) => {
  if (err) console.log(err);
});
