import React from "react";
import EditDelete from "../../components/EditDelete";
const columns = props => {
  return [
    {
      title: "Category",
      dataIndex: "category_id",
      key: "category_id",
      render: category_id => (
        <span>
          {
            props.categoryList.find(
              category => category.category_id === category_id
            ).category_name
          }
        </span>
      )
    },
    {
      title: "Item Name",
      dataIndex: "itemName",
      key: "itemName"
    },
    {
      title: "amount",
      dataIndex: "amount",
      key: "amount"
    },
    {
      title: "Expense Date",
      dataIndex: "expense_date",
      key: "expense_date"
    },
    {
      title: "Actions",
      key: "actoins2",
      align: "center",
      render: rowData => (
        <EditDelete
          onEdit={() => {
            props.handleShowModal(true, rowData);
          }}
          title="Are you sure you want to delete this expense?"
          onRemove={() => props.deleteExpenseData(rowData)}
        />
      )
    }
  ];
};
export default columns;
