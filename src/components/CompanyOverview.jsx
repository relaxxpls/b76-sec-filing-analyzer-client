import { Card, Row, Col, Statistic, Typography } from 'antd';
import styled from 'styled-components';

const CompanyOverview = ({ company }) => (
  <div style={{ display: 'flex' }}>
    <Card
      style={{
        height: '100vh',
        width: '45%',
        background: 'transparent',
      }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Card
            style={{
              background: 'dimgray',
              maxHeight: 100,
              marginBottom: '1rem',
            }}
          >
            <Typography.Title level={5} style={{ color: 'white' }}>
              Wholesale Computers and Peripheral Equipment
            </Typography.Title>
          </Card>
        </Col>
        <Col span={12}>
          <Card style={{ background: 'dimgray', maxHeight: 100 }}>
            <Statistic
              title="MARKET CAP"
              value="16,25,832"
              valueStyle={{ color: 'violet' }}
              suffix="$"
            />
          </Card>
        </Col>
      </Row>

      <Typography.Title level={4} style={{ color: 'white' }}>
        Key Metrics
      </Typography.Title>
      <Row gutter={8} style={{ paddingBottom: '1rem' }}>
        <Col span={6}>
          <Card style={{ background: 'darkgray' }}>
            <Statistic title="Net Income" value={3240.36} suffix="$" />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={{ background: 'darkgray' }}>
            <Statistic title="Net Income" value={3240.36} suffix="$" />
          </Card>
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
