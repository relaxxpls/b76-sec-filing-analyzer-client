import { Row, Col, Typography } from 'antd';

import { getCompanyOverviewByName } from '../../../utils/getCompanyByCik';
import StyledCard from '../../shared/Card';

const CompanyOverview = ({ name, company }) => {
  const overview = getCompanyOverviewByName(name);

  return (
    <div style={{ padding: '0 1rem' }}>
      <p style={{ fontSize: '1rem', color: '#7F868D', marginBottom: '2rem' }}>
        {overview.details.summary}
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
            <h3>{overview.details.market_cap} $</h3>
          </StyledCard>
        </Col>

        <Col span={8}>
          <StyledCard bordered={false}>
            <h2>Dividend Yield</h2>
            <h3>
              {overview.details.dividend_yield
                ? `${overview.details.dividend_yield} $`
                : 'NA'}
            </h3>
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
        <Col span={6}>
          <StyledCard bordered={false}>
            <h2>Net Income</h2>
            <h3>$32,430.00</h3>
          </StyledCard>
        </Col>

        <Col span={6}>
          <StyledCard bordered={false}>
            <h2>Net Revenue</h2>
            <h3>$1,67,311.00</h3>
          </StyledCard>
        </Col>

        <Col span={6}>
          <StyledCard bordered={false}>
            <h2>P/E Ratio</h2>
            <h3>29.3</h3>
          </StyledCard>
        </Col>

        <Col span={6}>
          <StyledCard bordered={false}>
            <h2>P/E Ratio</h2>
            <h3>29.3</h3>
          </StyledCard>
        </Col>
      </Row>

      <Typography.Title level={4} style={{ color: 'white' }}>
        Benchmarks
      </Typography.Title>

      <Row gutter={12}>
        <Col>
          <StyledCard bordered={false}>
            <h2>EBITDA</h2>
            <h3>{Object.values(overview.ebitda)[0]}</h3>
          </StyledCard>
        </Col>

        <Col>
          <StyledCard bordered={false}>
            <h2>EBIT</h2>
            <h3>{Object.values(overview.ebit)[0] ?? 'NA'}</h3>
          </StyledCard>
        </Col>

        <Col>
          <StyledCard bordered={false}>
            <h2>High/Low</h2>
            <h3>
              {overview.high_low.high}/{overview.high_low.low}
            </h3>
          </StyledCard>
        </Col>

        <Col>
          <StyledCard bordered={false}>
            <h2>ROCE</h2>
            <h3>{overview.roce ?? 'NA'}</h3>
          </StyledCard>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyOverview;
