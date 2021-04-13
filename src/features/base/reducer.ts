import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import {
  BaseActionType,
  SHOW_DIALOG_CONFIRM_DELETE,
  CLOSE_DIALOG_CONFIRM_DELETE,
  SHOW_SIDE_MODAL,
  CLOSE_SIDE_MODAL,
} from "./actions";
import { DialogConfirmState, SideModelState } from "./type";

const DIALOG_INITIAL_STATE: DialogConfirmState = {
  isShow: false,
};

const SIDE_MODAL_INITIAL_STATE: SideModelState = {
  isOpen: false,
  component: undefined,
};

const dialogReducer = createReducer<DialogConfirmState, BaseActionType>(
  DIALOG_INITIAL_STATE,
  {
    [SHOW_DIALOG_CONFIRM_DELETE]: (state, action) => ({
      isShow: true,
      callback: action.payload,
    }),
    [CLOSE_DIALOG_CONFIRM_DELETE]: () => ({
      isShow: false,
    }),
  }
);

const sideModalReducer = createReducer<SideModelState, BaseActionType>(
  SIDE_MODAL_INITIAL_STATE,
  {
    [SHOW_SIDE_MODAL]: (state, action) => ({
      isOpen: true,
      component: action.payload,
    }),
    [CLOSE_SIDE_MODAL]: () => ({
      isOpen: false,
      component: undefined,
    }),
  }
);

export default combineReducers({
  dialog: dialogReducer,
  sideModal: sideModalReducer,
});
