import { Layout, Menu, Typography } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import IncomeStatement from './IncomeStatement';
import { InfoCardNegative, InfoCardPositive } from './InfoCard';

const { Content, Sider } = Layout;
const { Title } = Typography;

const CompanyFinancials = ({ company }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('income-statement');

  const componentsSwitch = (key) => {
    switch (key) {
      case 'income-statement':
        return <IncomeStatement />;
      case 'balance-sheet':
        return <Title>item2</Title>;
      case 'cash-flow':
        return <Title>item3</Title>;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ background: 'transparent' }}>
      <Sider>
        <Menu onClick={(e) => setSelectedMenuItem(e.key)}>
          <Menu.Item key="income-statement">INCOME STATEMENT</Menu.Item>
          <Menu.Item key="balance-sheet">BALANCE SHEET</Menu.Item>
          <Menu.Item key="cash-flow">CASH FLOW</Menu.Item>
        </Menu>
      </Sider>

      <Content style={{ minHeight: '100vh' }}>
        {componentsSwitch(selectedMenuItem)}
      </Content>

      <RightAside>
        <Title level={3} style={{ color: 'white' }}>
          Summary
        </Title>
        <InfoCardNegative
          title="Lower than Industry Revenue Growth"
          content="Over the last five years, revenue has grown..."
        />

        <InfoCardPositive
          title="Higher THan Industry Current Ratio"
          content="Over the last 5 years, currentratio has been..."
        />
      </RightAside>
    </Layout>
  );
};

export default CompanyFinancials;

const RightAside = styled.div`
  padding: 2rem 0 0 0;
`;
