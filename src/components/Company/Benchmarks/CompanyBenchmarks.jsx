import { Card, Row, Col, Typography } from 'antd';

import StyledCard from '../../shared/Card';

const CompanyBenchmarks = ({ company }) => (
          <div style={{ display: 'block' }}>
    <Card
      bordered={false}
      style={{
        // width: '75%',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        gap: '10rem',
        marginLeft:'10rem',
        marginRight:'10rem',
      }}
    >
      <Row gutter={12}>

        <Col span={4}>
          <StyledCard bordered={false}>
            <h4>P/E</h4>
            <h1 style={{color:'yellowgreen'}}>26.67</h1>
            <h6 >Large Cap</h6>
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

      <Card style={{ width: '80%', background: 'transparent' }}>
      <Card style={{ height: 500, background: 'black' }} />
    </Card>
    </Card>

  </div>
);

export default CompanyBenchmarks;
