import companies from '../data/companies.json';

const getCompanyByCik = (cik) =>
  companies.find((_company) => _company.cik === cik) ?? {};

export default getCompanyByCik;
