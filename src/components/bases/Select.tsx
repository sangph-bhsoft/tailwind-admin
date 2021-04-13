import { PropsWithChildren, ReactElement } from "react";
import SelectDropdown, { SelectProps } from "react-dropdown-select";

function Select<T extends object | string>(
  props: PropsWithChildren<SelectProps<T>>
): ReactElement {
  return (
    <SelectDropdown {...props} clearable={true} color="#7367f0" searchable />
  );
}

export default Select;
