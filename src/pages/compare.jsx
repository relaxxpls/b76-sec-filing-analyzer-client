import { Tabs } from 'antd';
// import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// import CompanyFinancials from '../components/Company/Financials/CompanyFinancials';
import Loader from '../components/shared/Loader';
import companyDataSample from '../data/companyDataSample.json';
import getCompanyByCik from '../utils/getCompanyByCik';

const combine = (dataA, dataB) => {
  const dataCombined = dataA + dataB;

  return dataCombined;
};

const Compare = () => {
  const router = useRouter();
  const [companies, setCompanies] = useState([]);
  const [compareData, setCompareData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { ciks } = router.query;

      setCompanies(
        decodeURI(ciks)
          .split(',')
          .map((cik) => getCompanyByCik(cik))
      );

      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
        // const response = await axios.get(`/api/compare?ciks=${ciks}`);
        const dataCombined = combine(companyDataSample, companyDataSample);
        setCompareData(dataCombined);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router.query]);

  if (loading) return <Loader fixed />;

  return (
    <Container>
      <Head>
        <title>Compare Companies - Gather</title>
      </Head>

      <Heading>
        {companies.map((company, idx) => (
          <div key={company.cik} className="compare-heading-container">
            <h1>{company.name}</h1>
            {idx + 1 < companies.length && <span>v/s</span>}
          </div>
        ))}
      </Heading>

      <StyledTabs defaultActiveKey="comparison" centered>
        <Tabs.TabPane tab="Comparison" key="comparison">
          {/* <CompanyFinancials data={compareData} /> */}
        </Tabs.TabPane>
      </StyledTabs>
    </Container>
  );
};

export default Compare;

const Container = styled.div`
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
    font-size: 2rem;
    color: #f8f9fa;
    margin: 0 0.25rem;
  }

  .compare-heading-container {
    display: flex;
    align-items: baseline;

    span {
      font-size: 1.5rem;
      margin: 0 0.5rem 0 1rem;
      color: #7f868d;
    }
  }
`;

const StyledTabs = styled(Tabs)`
  color: #f8f9fa;

  .ant-tabs-nav::before {
    border-color: #2c343b;
  }
`;
