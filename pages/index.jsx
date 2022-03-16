import { Layout, Menu, Card, Checkbox, Input } from 'antd';
import {
  AiOutlineUpload,
  AiOutlineUser,
  AiOutlineVideoCamera,
} from 'react-icons/ai';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;

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
        <Card style={{ height: 150 }}>
          <Checkbox>
            <p>Company 1</p>
          </Checkbox>
          <p>Company Description and Stats</p>
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center' }}>This is a Footer</Footer>
    </Layout>
    <Sider />
  </Layout>
);

export default Home;
