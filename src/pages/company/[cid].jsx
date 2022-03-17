import { Tabs } from 'antd';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

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

  useEffect(() => {
    //
  }, []);

  if (!company) return null;

  return (
    <Container>
      <h1>{company.title}</h1>

      <Tabs defaultActiveKey="1" centered>
        <Tabs.TabPane tab="Overview" key="1">
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Financials" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
      </Tabs>
    </Container>
  );
};

export default Company;

const Container = styled.h1`
  padding: 10rem 20rem;
  color: white;
`;
