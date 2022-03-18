import { Tabs, Layout, Menu, Typography, Card, Row, Col, Statistic} from 'antd';
import loadCustomRoutes from 'next/dist/lib/load-custom-routes';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import { InfoCardNegative, InfoCardPositive } from '../../components/InfoCard';
import IncomeStatement from '../../components/IncomeStatement';
import { COOKIE_NAME_PRERENDER_DATA } from 'next/dist/server/api-utils';

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
  const [selectedMenuItem, setSelectedMenuItem]= useState('income-statement');

  const componentsSwitch = (key) => {
  switch (key) {
    case 'income-statement':
      return (<IncomeStatement/>);
    case 'balance-sheet':
      return (<Title>item2</Title>);
    case 'cash-flow':
      return (<Title>item3</Title>);
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
      <Title centered style={{textAlign: 'center', color: 'white'}}>{company.title}</Title>

      <Tabs defaultActiveKey="1" centered style={{color: 'lightgray'}} >
        <Tabs.TabPane tab="Overview" key="1">
          <div style={{display:'flex'}}>
              <Card style={{height:'100vh', width:'45%', background:'transparent'}}>
                <Row gutter={16}>
                  <Col span={12}>
                     <Card style={{background:'dimgray', maxHeight:100, marginBottom:'1rem'}}> <Title level={5} style={{color:'white'}}>{"Wholesale Computers and Peripheral Equipment"}</Title></Card>
                  </Col>
                  <Col span={12}>
                  <Card style={{background:'dimgray', maxHeight:100}}><Statistic title="MARKET CAP" value={'16,25,832'}
                      valueStyle={{ color: 'violet' }} suffix="$"/></Card>
                  </Col>
                </Row>

                <Title level={4} style={{color:'white'}}>Key Metrics</Title>
                <Row gutter={8} style={{paddingBottom:'1rem'}}>
                  <Col span={6}>
                    <Card style={{background:'darkgray'}}><Statistic title={"Net Income"} value={3240.36} suffix="$"></Statistic></Card>
                  </Col>

                  <Col span={6}>
                    <Card style={{background:'darkgray'}}><Statistic title={"Net Income"} value={3240.36} suffix="$"></Statistic></Card>
                  </Col>

                  <Col span={6}>
                    <Card style={{background:'darkgray', height:'100%'}}><Statistic title={"P/E Ratio"} value={29.3} valueStyle={{color:'tomato'}}suffix="$"></Statistic></Card>
                  </Col>
                  <Col span={6}>
                    <Card style={{background:'darkgray', height:'100%'}}><Statistic title={"P/E Ratio"} value={29.3} valueStyle={{color:'tomato'}}suffix="$"></Statistic></Card>
                  </Col>
                </Row>
                <Title level={4} style={{color:'white'}}>Sentiment Analysis</Title>
                <Row gutter={16} style={{paddingBottom:'1rem'}}> 
                  <Col span={8}><Card/></Col>
                  <Col span={8}><Card/></Col>
                  <Col span={8}><Card/></Col>
                </Row>
                <Title level={4} style={{color:'white'}}>Financial Notes on {company.title}</Title>
                <Row gutter={16}>
                  <Col span={8}><Card/></Col>
                  <Col span={8}><Card/></Col>
                </Row>

              </Card>
              <Card style={{height:'100vh', width:'55%', background:'transparent'}}>
                <Title level={3} style={{color:'white'}}>Stock Price</Title>
                <Card style={{height:500, background:'black'}}></Card>
              </Card>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Financials" key="2">
          <Layout  style={{background: 'transparent'}}>
            <Sider>
              <Menu onClick={(e) => setSelectedMenuItem(e.key)}>
              <Menu.Item key="income-statement">INCOME STATEMENT</Menu.Item>
              <Menu.Item key="balance-sheet">BALANCE SHEET</Menu.Item>
              <Menu.Item key="cash-flow">CASH FLOW</Menu.Item> 
              </Menu>
            </Sider>
            <Content style={{minHeight:'100vh'}}>
            {componentsSwitch(selectedMenuItem)}
            </Content>
            <RightAside>
              <Title level={3} style={{color:'white'}}>Summary</Title>
              <InfoCardNegative 
              title={'Lower than Industry Revenue Growth'}
              content={'Over the last five years, revenue has grown...'}/>

              <InfoCardPositive 
              title={'Higher THan Industry Current Ratio'}
              content={'Over the last 5 years, currentratio has been...'}/>

            </RightAside>
          </Layout>
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
  padding:2rem 0 0 0;
`;

const RightAside = styled.div`
  padding:2rem 0 0 0;
`