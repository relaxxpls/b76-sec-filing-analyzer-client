import { Tabs } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import CompanyFinancials from '../../components/CompanyFinancials';
import CompanyOverview from '../../components/CompanyOverview';
import companies from '../../data/companies.json';

const Company = () => {
  const router = useRouter();
  const [company, setCompany] = useState({});

  useEffect(() => {
    const { cik } = router.query;
    const result = companies.find((_company) => _company.cik === cik) ?? {};
    setCompany(result);
  }, [router]);

  if (!company.cik) return null;

  return (
    <MainContainer>
      <Head>
        <title>{company.name} - Gather</title>
      </Head>

      <Heading>
        <h1>{company.name}</h1>
        <h2>{company.ticker}</h2>
      </Heading>

      <StyledTabs
        defaultActiveKey="1"
        centered
        style={{ color: 'lightgray' }}
        // tabBarStyle={{ background: 'green' }}
      >
        <Tabs.TabPane tab="Overview" key="1">
          <CompanyOverview company={company} />
        </Tabs.TabPane>

        <Tabs.TabPane tab="Financials" key="2">
          <CompanyFinancials company={company} />
        </Tabs.TabPane>

        <Tabs.TabPane tab="Benchmarks" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </StyledTabs>
    </MainContainer>
  );
};

export default Company;

const StyledTabs = styled(Tabs)`
  .ant-card-bordered {
    border: none;
  }

  .ant-tabs-nav::before {
    border-color: #2c343b;
  }
`;

const MainContainer = styled.div`
  padding: 2rem 0 0 0;
`;

const Heading = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 2.75rem;
    color: #f8f9fa;
  }

  h2 {
    color: #7f868d;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
