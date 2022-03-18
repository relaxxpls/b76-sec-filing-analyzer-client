import { Card } from 'antd';
import { HiArrowCircleDown, HiArrowCircleUp } from 'react-icons/hi';

export const InfoCardPositive = ({ title, content }) => (
  <Card
    style={{
      width: 400,
      background: 'dimgray',
      marginRight: '2rem',
      marginBottom: '0.5rem',
    }}
  >
    <div style={{ display: 'flex' }}>
      <HiArrowCircleUp size={20} color="green" />
      <div>
        <p style={{ paddingLeft: '0.5rem', color: 'white' }}>{title} </p>
        <p style={{ color: 'lightgray' }}>{content}</p>
      </div>
    </div>
  </Card>
);

export const InfoCardNegative = ({ title, content }) => (
  <Card
    style={{
      width: 400,
      background: 'dimgray',
      marginRight: '2rem',
      marginBottom: '0.5rem',
    }}
  >
    <div style={{ display: 'flex' }}>
      <HiArrowCircleDown size={20} color="red" />
      <div>
        <p style={{ paddingLeft: '0.5rem', color: 'white' }}>{title} </p>
        <p style={{ color: 'lightgray' }}>{content}</p>
      </div>
    </div>
  </Card>
);
