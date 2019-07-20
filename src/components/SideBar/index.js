import React from "react";
import { Layout, Menu, Icon } from "antd";
import "./index.scss";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
const { Sider } = Layout;

class SideBare extends React.Component {
  render() {
    console.log(this.props);

    return (
      <Sider>
        <div
          className="logo"
          style={{
            height: "64px"
          }}
        />
        <Menu
          mode="inline"
          defaultSelectedKeys={[this.props.location.pathname]}
        >
          <Menu.Item key="/home">
            <Link to="/home">
              <Icon type="home" />
              <span className="nav-text">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/profile">
            <Link to="/profile">
              <Icon type="user" />
              <span>Profile</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/setting">
            <Link to="/setting">
              <Icon type="setting" />
              <span>Setting</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default withRouter(SideBare);
