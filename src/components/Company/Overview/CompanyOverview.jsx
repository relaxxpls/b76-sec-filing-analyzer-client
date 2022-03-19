import { Row, Col, Typography } from 'antd';

import StyledCard from '../../shared/Card';

const CompanyOverview = ({ company }) => (
  <div style={{ padding: '0 1rem' }}>
    <Row gutter={12}>
      <Col span={12}>
        <StyledCard bordered={false}>
          <h2>Sector</h2>
          <h4>{company.sic}</h4>
        </StyledCard>
      </Col>

      <Col span={12}>
        <StyledCard bordered={false}>
          <h2>Market Cap</h2>
          <h3>16,25,832 $</h3>
          <h4>Large Cap</h4>
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
      <Col span={4}>
        <StyledCard bordered={false}>
          <h4>P/E</h4>
          <h1 style={{ color: 'yellowgreen' }}>26.67</h1>
          <h6>Large Cap</h6>
        </StyledCard>
      </Col>

      <Col span={4}>
        <StyledCard bordered={false}>
          <h2>Market Cap</h2>
          <h3>16,25,832 $</h3>
          <h4>Large Cap</h4>
        </StyledCard>
      </Col>

      <Col span={4}>
        <StyledCard bordered={false}>
          <h2>Market Cap</h2>
          <h3>16,25,832 $</h3>
          <h4>Large Cap</h4>
        </StyledCard>
      </Col>

      <Col span={4}>
        <StyledCard bordered={false}>
          <h2>Market Cap</h2>
          <h3>16,25,832 $</h3>
          <h4>Large Cap</h4>
        </StyledCard>
      </Col>

      <Col span={4}>
        <StyledCard bordered={false}>
          <h2>Market Cap</h2>
          <h3>16,25,832 $</h3>
          <h4>Large Cap</h4>
        </StyledCard>
      </Col>

      <Col span={4}>
        <StyledCard bordered={false}>
          <h2>Market Cap</h2>
          <h3>16,25,832 $</h3>
          <h4>Large Cap</h4>
        </StyledCard>
      </Col>
    </Row>
  </div>
);

export default CompanyOverview;
