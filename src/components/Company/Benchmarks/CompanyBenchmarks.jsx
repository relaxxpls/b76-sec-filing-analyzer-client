import { Card, Row, Col } from 'antd';

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
        marginLeft: '10rem',
        marginRight: '10rem',
      }}
    >
      <Card style={{ width: '80%', background: 'transparent' }}>
        <Card style={{ height: 500, background: 'black' }} />
      </Card>
    </Card>
  </div>
);

export default CompanyBenchmarks;
