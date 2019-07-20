import React from "react";
import ContainerLayout from "../../components/ContainerLayout";
import { Form, List, Input, Button, Row, Col, Icon } from "antd";
import "./setting.scss";
import { connect } from "react-redux";
import * as expenseAction from "../../redux/actions/expense.action";

class Setting extends React.Component {
  render() {
    const { getFieldDecorator, getFieldValue, resetFields } = this.props.form;
    return (
      <ContainerLayout>
        <Form layout="inline" className="setting">
          <Row gutter={10}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item label="Total Bugdet" hasFeedback>
                {getFieldDecorator("bugdet", {
                  initialValue: this.props.totalBugdet
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item>
                <Button
                  onClick={() => {
                    this.props.updateTotalBugdet(getFieldValue("bugdet"));
                  }}
                >
                  Update
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item label="Categories" hasFeedback>
                {getFieldDecorator("category_Name", {})(<Input />)}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item>
                <Button
                  onClick={() => {
                    this.props.addNewCategory(getFieldValue("category_Name"));
                    resetFields(["category_Name"]);
                  }}
                >
                  Add
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <List
          header={<div>category List</div>}
          style={{ width: "200px" }}
          bordered
          dataSource={this.props.categoryList}
          renderItem={item => (
            <List.Item key={item.category_id}>
              <List.Item.Meta title={item.category_name} />
              <div>
                <Icon type="delete" />
              </div>
            </List.Item>
          )}
        />
      </ContainerLayout>
    );
  }
}

const mapStateToProps = store => {
  return {
    categoryList: store.expense.categoryList,
    totalBugdet: store.expense.totalBugdet
  };
};
const mapDispatchToProps = dispatch => ({
  updateTotalBugdet: amount =>
    dispatch(expenseAction.updateTotalBugdet(amount)),
  addNewCategory: category_name =>
    dispatch(expenseAction.addNewCategory(category_name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Setting));
