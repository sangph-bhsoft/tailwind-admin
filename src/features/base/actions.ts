import { ReactElement } from "react";
import { createAction, ActionType } from "typesafe-actions";

export const SHOW_DIALOG_CONFIRM_DELETE = "SHOW_DIALOG_CONFIRM_DELETE";
export const CLOSE_DIALOG_CONFIRM_DELETE = "CLOSE_DIALOG_CONFIRM_DELETE";

export const SHOW_SIDE_MODAL = "SHOW_SIDE_MODAL";
export const CLOSE_SIDE_MODAL = "CLOSE_SIDE_MODAL";

type FunctionCallback = (...args: any[]) => void;

export const showConfirmDeleteAction = createAction(
  SHOW_DIALOG_CONFIRM_DELETE
)<FunctionCallback>();

export const closeConfirmDeleteAction = createAction(
  CLOSE_DIALOG_CONFIRM_DELETE
)<undefined>();

export const openSideModalAction = createAction(
  SHOW_SIDE_MODAL
)<ReactElement>();

export const closeSideModalAction = createAction(CLOSE_SIDE_MODAL)<undefined>();

const baseAction = {
  showConfirmDeleteAction,
  closeConfirmDeleteAction,
  openSideModalAction,
  closeSideModalAction,
};

export type BaseActionType = ActionType<typeof baseAction>;
