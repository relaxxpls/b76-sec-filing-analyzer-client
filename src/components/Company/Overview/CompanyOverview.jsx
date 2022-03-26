import { Row, Col, Typography } from 'antd';

import StyledCard from '../../shared/Card';

const CompanyOverview = ({ company, companyData: companyDataTemp }) => {
  const getLatest = (data) => {
    const dates = Object.keys(data);
    const result = data[dates[dates.length - 1]];

    return result;
  };

  const companyData = JSON.parse(JSON.stringify(companyDataTemp));

  if (companyData.Analytics.details === undefined)
    companyData.Analytics.details = companyData.Analytics.company_details;

  companyData.Analytics = {
    ...companyData.Analytics,
    details: {
      ...companyData.Analytics.details,
      market_cap: companyData.Analytics.details?.market_cap
        ? `${companyData.Analytics.details.market_cap} $`
        : 'NA',
      dividend_yield: companyData.Analytics.details?.dividend_yield
        ? `${companyData.Analytics.details.dividend_yield.toPrecision(3)} $`
        : 'NA',
    },
    PE: companyData.Analytics.PE?.toPrecision?.(5) ?? 'NA',
    PM: getLatest(companyData.Analytics.PM)?.toPrecision?.(5) ?? 'NA',
    Revenue: getLatest(companyData.Analytics.Revenue) ?? 'NA',
    ebit: companyData.Analytics.ebit?.toPrecision?.(5) ?? 'NA',
    ebitda: companyData.Analytics.ebitda?.toPrecision?.(5) ?? 'NA',
    roce: companyData.Analytics.roce?.toPrecision?.(5) ?? 'NA',
  };

  return (
    <div style={{ padding: '0 1rem' }}>
      <p style={{ fontSize: '1rem', color: '#7F888D', marginBottom: '2rem' }}>
        {companyData.Analytics.details?.summary}
      </p>

      <Row gutter={12}>
        <Col span={8}>
          <StyledCard bordered={false}>
            <h2>Sector</h2>
            <h3>{company.sic}</h3>
          </StyledCard>
        </Col>

        <Col span={8}>
          <StyledCard bordered={false}>
            <h2>Market Cap</h2>
            <h3>{companyData.Analytics.details.market_cap}</h3>
          </StyledCard>
        </Col>

        <Col span={8}>
          <StyledCard bordered={false}>
            <h2>Dividend Yield</h2>
            <h3>{companyData.Analytics.details.dividend_yield}</h3>
          </StyledCard>
        </Col>
      </Row>

      <Typography.Title
        level={4}
        style={{ margin: '1.5rem 0 1rem', color: 'white' }}
      >
        Key Metrics
      </Typography.Title>

      <Row gutter={8} style={{ paddingBottom: '1rem' }}>
        <Col span={8}>
          <StyledCard bordered={false}>
            <h2>Price Earnings Ratio</h2>
            <h3>{companyData.Analytics.PE}</h3>
          </StyledCard>
        </Col>

        <Col span={8}>
          <StyledCard bordered={false}>
            <h2>Profit Margin Ratio</h2>
            <h3>{companyData.Analytics.PM}</h3>
          </StyledCard>
        </Col>

        <Col span={8}>
          <StyledCard bordered={false}>
            <h2>Revenue</h2>
            <h3>{companyData.Analytics.Revenue}</h3>
          </StyledCard>
        </Col>
      </Row>

      <Typography.Title level={4} style={{ color: 'white' }}>
        Benchmarks
      </Typography.Title>

      <Row gutter={12}>
        <Col span={4}>
          <StyledCard bordered={false}>
            <h2>EBIT</h2>
            <h3>{companyData.Analytics.ebit}</h3>
          </StyledCard>
        </Col>

        <Col span={4}>
          <StyledCard bordered={false}>
            <h2>EBITDA</h2>
            <h3>{companyData.Analytics.ebitda}</h3>
          </StyledCard>
        </Col>

        <Col span={8}>
          <StyledCard bordered={false}>
            <h2>High/Low</h2>
            <h3>
              {companyData.Analytics.high_low?.high?.toPrecision?.(5)} &nbsp;/
              &nbsp;
              {companyData.Analytics.high_low?.low?.toPrecision?.(5)}
            </h3>
          </StyledCard>
        </Col>

        <Col span={8}>
          <StyledCard bordered={false}>
            <h2>Return on capital employed</h2>
            <h3>{companyData.Analytics.roce}</h3>
          </StyledCard>
        </Col>
      </Row>

      {companyData['Q&A']?.length && (
        <>
          <Typography.Title level={4} style={{ color: 'white' }}>
            Question & Answers
          </Typography.Title>

          {companyData['Q&A'].map((item) => (
            <StyledCard key={item} style={{ margin: '1rem 0' }}>
              <h2>Q) {item[0]}</h2>
              <h3>Ans) {item[1]}</h3>
            </StyledCard>
          ))}
        </>
      )}
    </div>
  );
};

export default CompanyOverview;
