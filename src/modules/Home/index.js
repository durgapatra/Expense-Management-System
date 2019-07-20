import React from "react";
import ContainerLayout from "../../components/ContainerLayout";
import { Form, Icon, Input, Button, Card } from "antd";
import Expense from "../Expense";

import "./home.scss";
class Home extends React.Component {
  render() {
    return (
      <ContainerLayout>
        <div className="home">
          <div className="chart-div">
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>

            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <Expense {...this.props} />
        </div>
      </ContainerLayout>
    );
  }
}

export default Home;
