import { Line, Column } from '@ant-design/plots';
import { Tabs, Typography } from 'antd';
import styled from 'styled-components';

import graphablePrameters from '../../../data/graphableParameters.json';

const isGraphable = (type, title) => graphablePrameters[type].includes(title);

const CompanyFinancialGraphs = ({ title, type, data }) => {
  if (!data) return null;

  return (
    <Container>
      <Typography.Title level={3} style={{ color: 'white' }}>
        {title}
      </Typography.Title>

      <StyledTabs type="card">
        {Object.keys(data)
          .filter((key) => isGraphable(type, key))
          .map((key) => (
            <Tabs.TabPane key={key} tab={key}>
              <StyledLine
                data={data[key]}
                xField="date"
                yField="value"
                seriesField="company"
                xAxis={{ type: 'time' }}
                slider={{
                  start: 0.7,
                  end: 1,
                }}
              />
            </Tabs.TabPane>
          ))}
      </StyledTabs>
    </Container>
  );
};

const processLexical = (data, company) => {
  const dates = Object.keys(data).sort();
  const latestData = data[dates[dates.length - 1]];

  return Object.keys(latestData)
    .filter((key) => key !== 'fog_idx')
    .map((metric) => ({
      value: parseFloat(latestData[metric]),
      metric,
      company,
    }));
};

export const CompanyLexicalGraphs = ({ data, company, form }) => {
  if (!data) return null;
  const processedData = processLexical(data, company);

  return (
    <Container>
      <Typography.Title level={3} style={{ color: 'white' }}>
        Lexical analysis of {form} forms
      </Typography.Title>

      <StyledBar
        data={processedData}
        xField="metric"
        yField="value"
        seriesField="company"
      />
    </Container>
  );
};

const processSimilarity = (data, company) => {
  const result = {};
  const dates = JSON.parse(data.date.replace(/'/g, '"'));
  const simIndex = JSON.parse(data.sim_index.replace(/'/g, '"'));

  Object.keys(simIndex).forEach((type) => {
    result[type] = simIndex[type].map((value, idx) => ({
      value: parseFloat(value),
      date: dates[idx],
      company,
    }));
  });

  return result;
};

export const CompanySimilarityGraphs = ({ data, company, form }) => {
  if (!data) return null;
  const processedData = processSimilarity(data, company);

  return (
    <Container>
      <Typography.Title level={3} style={{ color: 'white' }}>
        Similarity analysis of {form} forms
      </Typography.Title>

      <StyledTabs type="card">
        {Object.keys(processedData).map((type) => (
          <Tabs.TabPane key={type} tab={type}>
            <StyledLine
              data={processedData[type]}
              xField="date"
              yField="value"
              seriesField="company"
              xAxis={{ type: 'time' }}
              slider={{
                start: 0.7,
                end: 1,
              }}
            />
          </Tabs.TabPane>
        ))}
      </StyledTabs>
    </Container>
  );
};

export default CompanyFinancialGraphs;

const Container = styled.div`
  padding: 0 1rem;
`;

const StyledLine = styled(Line)`
  background: #171a1d;
  padding: 1.5rem;
  border-radius: 1rem;
`;

const StyledBar = styled(Column)`
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
