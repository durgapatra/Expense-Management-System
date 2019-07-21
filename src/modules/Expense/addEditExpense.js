import React from "react";
import {
  Modal,
  Button,
  Form,
  Select,
  InputNumber,
  Input,
  DatePicker
} from "antd";
import moment from "moment";
const { Option } = Select;
const AddEditModal = props => {
  const { getFieldDecorator } = props.form;
  return (
    <div>
      <Modal
        title={
          Object.keys(props.selectRowData).length
            ? "Edit expense"
            : "Add expense"
        }
        visible={props.showExpenseModal}
        onCancel={() => props.handleShowModal(false)}
        footer={[
          <Button key="cancel" onClick={() => props.handleShowModal(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={e => props.addEditExpenseDate(e, props.form)}
          >
            Submit
          </Button>
        ]}
      >
        <Form onSubmit={e => props.addEditExpenseDate(e, props.form)}>
          <Form.Item label="Category" hasFeedback>
            {getFieldDecorator("category_id", {
              initialValue: props.selectRowData.category_id,
              rules: [{ required: true, message: "Please select a category!" }]
            })(
              <Select placeholder="Please select a country">
                {props.categoryList.map(category => {
                  return (
                    !category.isDelete && (
                      <Option
                        key={category.category_id}
                        value={category.category_id}
                      >
                        {category.category_name}
                      </Option>
                    )
                  );
                })}
              </Select>
            )}
          </Form.Item>

          <Form.Item label="Item Name" hasFeedback>
            {getFieldDecorator("itemName", {
              initialValue: props.selectRowData.itemName,
              rules: [{ required: true, message: "Please enter item name!" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Amount" hasFeedback>
            {getFieldDecorator("amount", {
              initialValue: props.selectRowData.amount,
              rules: [{ required: true, message: "Please enter amount!" }]
            })(<InputNumber style={{ width: "100%" }} />)}
          </Form.Item>

          <Form.Item label="Expense Date" hasFeedback>
            {getFieldDecorator("expense_date", {
              initialValue: props.selectRowData.expense_date
                ? moment(props.selectRowData.expense_date, "DD-MM-YYYY")
                : moment(),
              rules: [{ required: true, message: "Please enter Expense Date!" }]
            })(<DatePicker format="DD-MM-YYYY" style={{ width: "100%" }} />)}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Form.create({ name: "exoense_modal" })(AddEditModal);
