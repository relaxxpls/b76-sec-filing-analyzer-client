import { Tabs, Layout, Menu, Typography, Card} from 'antd';

const { Title } = Typography;
const { TabPane } = Tabs;

const IncomeStatement = () => {
  return (
    <div style={{paddingLeft:'1rem', paddingRight:'1rem'}}>
    <Title level={3} style={{color:'white'}}>Income Statement</Title>
    <Tabs type="card">
      <TabPane tab="TOTAL REVENUE" key="1">
        <Card style={{height:500, background:'dimgray'}}/>
      </TabPane>
      <TabPane tab="GROSS PROFIT" key="2">
        <Card style={{height:500, background:'darkgray'}}/>
      </TabPane>
      <TabPane tab="OPERATING INCOME" key="3">
        <Card style={{height:500, background:'lightgray'}}/>
      </TabPane>
      <TabPane tab="NET INCOME" key="4">
        <Card style={{height:500, background:'whitesmoke'}}/>
      </TabPane>
    </Tabs>
    </div>
  )
}

export default IncomeStatement;