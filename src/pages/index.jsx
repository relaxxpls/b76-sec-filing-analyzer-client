import { Layout, Menu, Input } from 'antd';
import {
  AiOutlineUpload,
  AiOutlineUser,
  AiOutlineVideoCamera,
} from 'react-icons/ai';

import CompanyCard from '../components/CompanyCard';

const { Header, Content, Footer, Sider } = Layout;

const companies = [
  {
    cik: '0001',
    title: 'Apple',
    description:
      'Apple is a multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.',
  },
  {
    cik: '0002',
    title: 'Google',
    description:
      'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search, cloud computing, software, and hardware.',
  },
  {
    cik: '0003',
    title: 'Microsoft',
    description:
      'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington.',
  },
  {
    cik: '0004',
    title: 'Facebook',
    description:
      'Facebook is a social media and social networking service based in Menlo Park, California. Launched on February 4, 2004, it is the most popular social networking website in the world, with one billion active monthly active users.',
  },
];

const Home = () => (
  <Layout>
    <Sider style={{ height: '100vh' }}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<AiOutlineUser size="14" />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<AiOutlineVideoCamera size="14" />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<AiOutlineUpload size="14" />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<AiOutlineUser size="14" />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>

    <Layout>
      <Content style={{ margin: '0 16px 0' }}>
        <Input.Search placeholder="input search text" style={{ padding: 24 }} />

        {companies.map(({ cik, title, description }) => (
          <CompanyCard key={cik} title={title} description={description} />
        ))}
      </Content>
      <Footer style={{ textAlign: 'center' }}>This is a Footer</Footer>
    </Layout>

    <Sider />
  </Layout>
);

export default Home;
