import React from "react";
import "./header.scss";
import { withRouter } from "react-router";
import { Layout } from "antd";
const { Header } = Layout;
class MyHeader extends React.Component {
  state = {
    theme: "dark"
  };
  onThemeChange = value => {
    if (value) {
      this.setState({ theme: "light" });
    } else {
      this.setState({ theme: "dark" });
    }
  };
  render() {
    return (
      <Header>
        <div className="header">
          <span
            onClick={() => {
              localStorage.removeItem("token");
              this.props.history.push("login");
            }}
          >
            Sign Out
          </span>
        </div>
      </Header>
    );
  }
}
export default withRouter(MyHeader);
