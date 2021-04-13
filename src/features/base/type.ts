import { ReactElement } from "react";

export type DialogConfirmState = {
  isShow: boolean;
  callback?: (...arg: any[]) => void;
};

export type SideModelState = {
  isOpen: boolean;
  component?: ReactElement;
};

export interface BaseState {
  dialog: DialogConfirmState;
  sideModal: SideModelState;
}
