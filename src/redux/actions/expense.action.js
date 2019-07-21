import {
  SHOW_EXPENSE_MODAL,
  EXPENSE_DATE_UPDATED,
  ADD_NEW_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_TOTAL_BUGDET,
  ADD_NEW_CATEGORY,
  DELETE_CATEGORY
} from "../constants/expense.connstants";

export const handleShowModal = (show, rowData = {}) => {
  return {
    type: SHOW_EXPENSE_MODAL,
    show,
    rowData
  };
};

export const deleteExpenseData = rowData => {
  return {
    type: DELETE_EXPENSE,
    rowData
  };
};
export const updateExpenseData = data => {
  return {
    type: EXPENSE_DATE_UPDATED,
    data
  };
};
export const addNewExpenseData = data => {
  return {
    type: ADD_NEW_EXPENSE,
    data
  };
};
export const updateTotalBugdet = amount => {
  return {
    type: UPDATE_TOTAL_BUGDET,
    amount
  };
};

export const addNewCategory = name => {
  return {
    type: ADD_NEW_CATEGORY,
    name
  };
};

export const deleteCategory = id => {
  return {
    type: DELETE_CATEGORY,
    id
  };
};
