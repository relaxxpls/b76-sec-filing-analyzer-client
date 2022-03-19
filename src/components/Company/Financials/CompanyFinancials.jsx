import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { HiArrowCircleDown } from 'react-icons/hi';
import styled from 'styled-components';

import StyledCard from '../../shared/Card';

import CompanyFinancialGraphs from './CompanyFinancialGraphs';

const CompanyFinancials = ({ data }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('income-statement');

  const componentsSwitch = (key) => {
    switch (key) {
      case 'income-statement':
        return (
          <CompanyFinancialGraphs
            title="Income Statement"
            type="IncomeStatement"
            data={data.IncomeStatement}
          />
        );

      case 'balance-sheet':
        return (
          <CompanyFinancialGraphs
            title="Balance Sheet"
            type="BalanceSheet"
            data={data.BalanceSheet}
          />
        );

      case 'cash-flow':
        return (
          <CompanyFinancialGraphs
            title="Cash Flow"
            type="CashFlow"
            data={data.CashFlow}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Layout style={{ background: 'transparent' }}>
      <Layout.Sider style={{ background: 'transparent' }}>
        <StyledMenu onClick={(e) => setSelectedMenuItem(e.key)}>
          <Menu.Item key="income-statement">Income Statement</Menu.Item>
          <Menu.Item key="balance-sheet">Balance Sheet</Menu.Item>
          <Menu.Item key="cash-flow">Cash Flow</Menu.Item>
        </StyledMenu>
      </Layout.Sider>

      <Layout.Content>{componentsSwitch(selectedMenuItem)}</Layout.Content>

      <RightAside>
        <h1 level={3} style={{ color: 'white', fontWeight: 300 }}>
          Financial Summary
        </h1>

        <StyledCard bordered={false}>
          <h3>
            <HiArrowCircleDown
              size="18"
              color="#FF5271"
              style={{ marginRight: '0.5rem' }}
            />
            Lower than Industry Revenue Growth
          </h3>
          <p>
            Over the last 5 years, revenue has grown at a yearly rate of 8.41%,
            vs industry avg of 8.76%
          </p>
        </StyledCard>
      </RightAside>
    </Layout>
  );
};

export default CompanyFinancials;

const RightAside = styled.div`
  padding: 0 2.5rem 0 1.5rem;
  width: 20rem;

  h1 {
    font-family: Poppins, sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const StyledMenu = styled(Menu)`
  font-family: Poppins;
  font-size: 1rem;
  color: #7f868d;
  font-weight: 600;
  letter-spacing: 0.02rem;
  text-align: right;
  text-transform: uppercase;

  &.ant-menu {
    background: transparent;
    border-color: #2c343b;
    height: 100%;

    .ant-menu-item {
      background: transparent;
      border-radius: 0.25rem;

      &:hover {
        color: white;
      }
    }

    .ant-menu-item-selected {
      background: #0002;
      color: white;
    }
  }
`;
