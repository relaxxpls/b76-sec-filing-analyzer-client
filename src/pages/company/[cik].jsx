import { Tabs } from 'antd';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import CompanyFinancials from '../../components/Company/Financials/CompanyFinancials';
import CompanyOverview from '../../components/Company/Overview/CompanyOverview';
import Loader from '../../components/shared/Loader';
import companyDataDefault from '../../data/companyDataDefault.json';
import getCompanyByCik from '../../utils/getCompanyByCik';
import { preprocessData } from '../../utils/preprocess';

const Company = () => {
  const router = useRouter();
  const [company, setCompany] = useState({});
  const [companyData, setCompanyData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCompanyData = async () => {
      setLoading(true);
      const { cik } = router.query;
      const result1 = getCompanyByCik(cik);
      if (!result1.cik) return;
      setCompany(result1);

      try {
        const result2 = await axios.get(
          `http://localhost:8000/api/company/${cik}`
        );
        setCompanyData(preprocessData(result1.name, result2));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [router]);

  if (!company.cik) return null;
  if (loading) return <Loader fixed />;

  return (
    <MainContainer>
      <Head>
        <title>{company.name} - Gather</title>
      </Head>

      <Heading>
        <h1>{company.name}</h1>
        <h2>{company.ticker}</h2>
      </Heading>

      <StyledTabs defaultActiveKey="overview" centered>
        <Tabs.TabPane tab="Overview" key="overview">
          <CompanyOverview company={company} />
        </Tabs.TabPane>

        <Tabs.TabPane tab="Financials" key="financials">
          <CompanyFinancials data={companyData} />
        </Tabs.TabPane>
      </StyledTabs>
    </MainContainer>
  );
};

export default Company;

const StyledTabs = styled(Tabs)`
  color: #f8f9fa;

  .ant-tabs-nav::before {
    border-color: #2c343b;
  }
`;

const MainContainer = styled.div`
  padding: 2rem 0;
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
