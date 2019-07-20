import {
  SHOW_EXPENSE_MODAL,
  DELETE_EXPENSE,
  EXPENSE_DATE_UPDATED,
  ADD_NEW_EXPENSE,
  UPDATE_TOTAL_BUGDET,
  ADD_NEW_CATEGORY
} from "../constants/expense.connstants";

const expense = (
  state = {
    showExpenseModal: false,
    totalBugdet: 500,

    categoryList: [
      {
        category_name: "Glocery",
        category_id: 1,
        isDelete: false
      },
      {
        category_name: "Room Rent",
        category_id: 2,
        isDelete: false
      },
      {
        category_name: "Electricity Bill",
        category_id: 3,
        isDelete: false
      }
    ],

    expenseData: [
      {
        id: 1,
        category_id: 1,
        itemName: "bread",
        amount: 40,
        expense_date: "20/07/2019",
        idDelete: false
      }
    ],
    selectRowData: {}
  },
  action
) => {
  switch (action.type) {
    case SHOW_EXPENSE_MODAL:
      return {
        ...state,
        showExpenseModal: action.show,
        selectRowData: action.rowData
      };
    case EXPENSE_DATE_UPDATED: {
      let expenseData = [...state.expenseData];
      let index = expenseData.findIndex(exp => exp.id === action.data.id);
      expenseData.splice(index, 1, action.data);
      return {
        ...state,
        expenseData
      };
    }
    case DELETE_EXPENSE: {
      let expenseData = [...state.expenseData];
      let index = expenseData.findIndex(exp => exp.id === action.rowData.id);
      expenseData.splice(index, 1, { ...action.rowData, isDelete: true });
      return {
        ...state,
        expenseData
      };
    }

    case ADD_NEW_EXPENSE:
      return {
        ...state,
        expenseData: [...state.expenseData, action.data]
      };
    case UPDATE_TOTAL_BUGDET:
      return {
        ...state,
        totalBugdet: action.amount
      };
    case ADD_NEW_CATEGORY:
      return {
        ...state,
        categoryList: [
          ...state.categoryList,
          {
            category_name: action.name,
            category_id: state.categoryList.length + 1,
            isDelete: false
          }
        ]
      };
    default:
      return state;
  }
};

export default expense;
