import { Line } from '@ant-design/plots';
import { Tabs, Typography } from 'antd';
import lodash from 'lodash';
import styled from 'styled-components';

const CompanyFinancialGraphs = ({ title, data }) => (
  <Container>
    <Typography.Title level={3} style={{ color: 'white' }}>
      {title}
    </Typography.Title>

    <StyledTabs type="card">
      {data.map(({ title: subTitle, data: subData }) => (
        <Tabs.TabPane key={subTitle} tab={lodash.startCase(subTitle)}>
          <StyledLine
            data={subData}
            xField="date"
            yField="value"
            seriesField="category"
            xAxis={{ type: 'time' }}
            lineStyle={{ stroke: '#5d5fef' }}
          />
        </Tabs.TabPane>
      ))}
    </StyledTabs>
  </Container>
);

export default CompanyFinancialGraphs;

const Container = styled.div`
  padding: 0 1rem;
`;

const StyledLine = styled(Line)`
  background: #171a1d;
  padding: 1.5rem;
  border-radius: 1rem;
`;

const StyledTabs = styled(Tabs)`
  &.ant-tabs-card > .ant-tabs-nav {
    color: white;

    &::before {
      border: none;
    }

    .ant-tabs-tab {
      background: #2c343b;
      border: none;
      padding: 0.5rem;
      border-radius: 0.25rem;
      color: white;
      font-weight: 600;
      margin-right: 1rem;
    }

    .ant-tabs-tab-active {
      background: #5d5fef;

      .ant-tabs-tab-btn {
        color: white;
      }
    }
  }
`;
