import { Tabs, Layout, Menu, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import IncomeStatement from '../../components/IncomeStatement';
import { InfoCardNegative, InfoCardPositive } from '../../components/InfoCard';

const { Content, Sider } = Layout;
const { Title } = Typography;

const data = {
  '001': {
    title: 'Facebook Inc',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1200px-F_icon.svg.png',
    shortDescription:
      'Facebook is a social media and social networking service company based in Menlo Park, California. It was founded by Mark Zuckerberg on February 4, 2004, with his friend and fellow Harvard College student and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, Chris Hughes, and Chris Hughes. The founders had initially aimed to create a social network for Harvard students, but later changed their focus to create a company that would help people connect with one another.',
    NASDAQ: 'FB',
  },
};

const Company = () => {
  const router = useRouter();
  const { cid } = router.query;
  const company = data[cid];
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
        break;
    }
  };
  useEffect(() => {
    //
  }, []);

  if (!company) return null;

  return (
    <MainContainer>
      <Title centered style={{ textAlign: 'center', color: 'white' }}>
        {company.title}
      </Title>

      <Tabs defaultActiveKey="1" centered style={{ color: 'lightgray' }}>
        <Tabs.TabPane tab="Overview" key="1">
          Content of Tab Pane 1
        </Tabs.TabPane>

        <Tabs.TabPane tab="Financials" key="2">
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
        </Tabs.TabPane>
      </Tabs>
    </MainContainer>
  );
};

export default Company;

const MainContainer = styled.div`
  padding: 2rem 0 0 0;
`;

const RightAside = styled.div`
  padding: 2rem 0 0 0;
`;
