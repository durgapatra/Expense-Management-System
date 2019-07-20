import React from "react";
import ContainerLayout from "../../components/ContainerLayout";
import { Form, Icon, Input, Button, Card, Table } from "antd";
import moment from "moment";
import columns from "./column";
import AddEditExpense from "./addEditExpense";
import { connect } from "react-redux";
import * as expenseAction from "../../redux/actions/expense.action";
import "./expense.scss";

class Expense extends React.Component {
  addEditExpenseDate = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        values.expense_date = moment(values.expense_date).format("DD-MM-YYYY");
        if (Object.keys(this.props.selectRowData).length) {
          values.id = this.props.selectRowData.id;
          this.props.updateExpenseData(values);
          form.resetFields();
          this.props.handleShowModal(false);
        } else {
          let id = this.props.expenseData.length + 1;
          values.id = id;
          values.isDelete = false;
          this.props.addNewExpenseData(values);
          form.resetFields();
          this.props.handleShowModal(false);
        }
      }
    });
  };
  render() {
    return (
      <ContainerLayout>
        <div className="expense">
          <Button
            icon="plus"
            type="primary"
            onClick={() => this.props.handleShowModal(true)}
          >
            Add expense
          </Button>

          <Table
            rowKey={record => record.id}
            dataSource={this.props.expenseData}
            columns={columns(this.props)}
            rowClassName={record => (record.isDelete ? "deleted" : "")}
          />
        </div>
        <AddEditExpense
          {...this.props}
          addEditExpenseDate={this.addEditExpenseDate}
        />
      </ContainerLayout>
    );
  }
}
const mapStateToProps = store => {
  return {
    expenseData: store.expense.expenseData,
    showExpenseModal: store.expense.showExpenseModal,
    categoryList: store.expense.categoryList,
    selectRowData: store.expense.selectRowData
  };
};
const mapDispatchToProps = dispatch => ({
  handleShowModal: (show, rowData) =>
    dispatch(expenseAction.handleShowModal(show, rowData)),
  handleSubmitExpenseModal: data =>
    dispatch(expenseAction.handleShowModal(data)),
  addNewExpenseData: data => dispatch(expenseAction.addNewExpenseData(data)),
  updateExpenseData: data => dispatch(expenseAction.updateExpenseData(data)),
  deleteExpenseData: rowData =>
    dispatch(expenseAction.deleteExpenseData(rowData))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expense);
