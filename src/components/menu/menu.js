import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  LaptopOutlined,
  UserOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import {
  Menu,
  Layout,
  Breadcrumb,
  Avatar,
  Popover,
  Button,
  message,
} from "antd";
import store from "../../redux/store";
import imgSrc from "../../assets/images/logo.jpg";
import imgSrcM from "../../assets/images/logoM.png";

import { loginOut } from "../../redux/action";
import "./index.scss";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const menutar = [
  {
    id: "sub1",
    title: "首页",
    icon: <HomeOutlined />,
    key: 1,
    path: "/",
  },
  {
    id: "sub2",
    title: "用户管理",
    icon: <UserOutlined />,
    key: 2,
    path: "/user",
  },
  {
    id: "sub3",
    title: "图库",
    icon: <LaptopOutlined />,
    key: 3,
    item: [
      {
        key: 4,
        title: "劲爆火辣",
        path: "/explosive",
      },
      {
        key: 5,
        title: "甜美可爱",
        path: "/sweet",
      },
      {
        key: 6,
        title: "性感迷人",
        path: "/sexy",
      },
    ],
  },
];
// const content = (

//   );
class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: store.getState().loginReducer,
      collapsible: false,
      src:imgSrc
    };
  }
  handleClick = (e) => {
    console.log("click", e);
  };
  loginOut = () => {
    store.dispatch(loginOut());
    window.location.href = "#/login";
    message.success("退出成功");
  };
  toggle = () => {
    console.log(123);
    this.setState({
      collapsible: !this.state.collapsible,
      src:this.state.collapsible?imgSrc:imgSrcM
    });
  };
  render() {
    const { userInfo, collapsible,src } = this.state;
    return (
      <div className="menu">
        <Layout>
          <Sider trigger={null} width={200} className="site-layout-background" collapsed={collapsible}>
            <Menu
              mode="inline"
              onClick={this.handleClick}
              defaultSelectedKeys={[this.props.location.pathname]}
              defaultOpenKeys={[this.props.location.pathname]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <div className="logo"><img src={src}></img></div>
              {menutar.map((item) => {
                if (!item.item) {
                  return (
                    <Menu.Item key={item.path} icon={item.icon}>
                      <Link to={item.path}>{item.title}</Link>
                    </Menu.Item>
                  );
                } else {
                  return (
                    <SubMenu key={item.id} icon={item.icon} title={item.title}>
                      {item.item.map((vl) => (
                        <Menu.Item key={vl.path}>
                          {" "}
                          <Link to={vl.path}>{vl.title}</Link>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  );
                }
              })}
            </Menu>
          </Sider>
          <Layout>
          <Header className="header">

          <div className="nav">
          {React.createElement(
            collapsible ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: this.toggle,
            }
          )}
            <span style={{ color: "#fff",fontSize:26 }}>图库管理系统</span>
            <Popover
              content={
                <div>
                  <a>修改密码</a>
                  <br />
                  <a onClick={this.loginOut}>退出登录</a>
                </div>
              }
              trigger="hover"
            >
              <Avatar src="https://www.ykxingxin.cn/upload/2020/06/微信图片_20200616150759-e0d232e259114f7c8648854662506704.png" />
              <span style={{ marginLeft: 5 ,marginRight:40}}>{userInfo.username}</span>
            </Popover>
          </div>
        </Header>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default menu;
