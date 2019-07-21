import React from "react";
import ContainerLayout from "../../components/ContainerLayout";
import Expense from "../Expense";

import "./home.scss";
class Home extends React.Component {
  render() {
    return (
      <ContainerLayout>
        <div className="home">
          <Expense {...this.props} />
        </div>
      </ContainerLayout>
    );
  }
}

export default Home;
