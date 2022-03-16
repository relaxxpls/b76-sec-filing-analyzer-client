import { Layout, Menu, Card, Checkbox, Input, Space} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const {Search} = Input
import styled from 'styled-components'

export default function Home() {
    return (
    <Layout>
    <Sider style={{height:'100vh'}}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Content style={{ margin: '0 16px 0' }}>
      <Search placeholder="input search text" style={{padding: 24}}/>
        <Card style={{height: 150}}>
          <Checkbox>
          <p>Company 1</p>
          </Checkbox>
          <p>Company Description and Stats</p>
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center' }}>This is a Footer</Footer>
    </Layout>
    <Sider></Sider>
  </Layout>
  )
}

