import { Card, Row, Col, Statistic, Typography } from 'antd';
import styled from 'styled-components';

const CompanyOverview = ({ company }) => (
  <div style={{ display: 'flex' }}>
    <Card
      bordered={false}
      style={{
        width: '45%',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        gap: '10rem',
      }}
    >
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
          <Card style={{ background: 'darkgray', height: '100%' }}>
            <Statistic
              title="P/E Ratio"
              value={29.3}
              valueStyle={{ color: 'tomato' }}
              suffix="$"
            />
          </Card>
        </Col>
      </Row>

      <Typography.Title level={4} style={{ color: 'white' }}>
        Sentiment Analysis
      </Typography.Title>
      <Row gutter={16} style={{ paddingBottom: '1rem' }}>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
      </Row>
      <Typography.Title level={4} style={{ color: 'white' }}>
        Financial Notes on {company.title}
      </Typography.Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
      </Row>
    </Card>

    <Card
      style={{
        height: '100vh',
        width: '55%',
        background: 'transparent',
      }}
    >
      <Typography.Title level={3} style={{ color: 'white' }}>
        Stock Price
      </Typography.Title>
      <Card style={{ height: 500, background: 'black' }} />
    </Card>
  </div>
);

export default CompanyOverview;

const StyledCard = styled(Card)`
  border-radius: 0.25rem;
  background: #2c343b;

  .ant-card-body {
    padding: 1rem;
  }

  h2 {
    color: #7f868d;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  h3 {
    color: #8a8cf5;
    font-size: 1.25rem;
  }

  h4 {
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
`;
