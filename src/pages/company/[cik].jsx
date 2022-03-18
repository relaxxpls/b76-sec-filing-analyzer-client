import { Tabs, Typography } from 'antd';
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
      <Typography.Title
        centered
        style={{ textAlign: 'center', color: 'white' }}
      >
        {company.name}
      </Typography.Title>

      <Tabs defaultActiveKey="1" centered style={{ color: 'lightgray' }}>
        <Tabs.TabPane tab="Overview" key="1">
          <CompanyOverview />
        </Tabs.TabPane>

        <Tabs.TabPane tab="Financials" key="2">
          <CompanyFinancials />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Benchmarks" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </MainContainer>
  );
};

export default Company;

const MainContainer = styled.div`
  padding: 2rem 0 0 0;

  h1 {
    /*  */
  }

  h2 {
    /*  */
  }
`;
