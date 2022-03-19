import { Layout, Menu, Typography } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import IncomeStatement from './IncomeStatement';
import { InfoCardNegative, InfoCardPositive } from './InfoCard';

const CompanyFinancials = ({ company }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('income-statement');

  const componentsSwitch = (key) => {
    switch (key) {
      case 'income-statement':
        return <IncomeStatement />;
      case 'balance-sheet':
        return <Typography.Title>item2</Typography.Title>;
      case 'cash-flow':
        return <Typography.Title>item3</Typography.Title>;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ background: 'transparent' }}>
      <Layout.Sider style={{ background: 'transparent' }}>
        <StyledMenu onClick={(e) => setSelectedMenuItem(e.key)}>
          <Menu.Item key="income-statement">INCOME STATEMENT</Menu.Item>
          <Menu.Item key="balance-sheet">BALANCE SHEET</Menu.Item>
          <Menu.Item key="cash-flow">CASH FLOW</Menu.Item>
        </StyledMenu>
      </Layout.Sider>

      <Layout.Content style={{ minHeight: '100vh' }}>
        {componentsSwitch(selectedMenuItem)}
      </Layout.Content>

      <RightAside>
        <Typography.Title level={3} style={{ color: 'white' }}>
          Summary
        </Typography.Title>
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

const StyledMenu = styled(Menu)`
  font-family: Poppins;
  font-size: 1rem;
  color: #7f868d;
  font-weight: 600;
  letter-spacing: 0.02rem;
  text-align: right;

  &.ant-menu {
    background: transparent;
    border-color: #2c343b;
    height: 100%;

    .ant-menu-item {
      background: transparent;
      border-radius: 0.25rem;
    }

    .ant-menu-item-selected {
      background: #0002;
    }
  }
`;
