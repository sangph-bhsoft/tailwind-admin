import { FC } from "react";
import { Route } from "react-router-dom";
import ActionView from "./pages/Action";
import UserContainer from "./pages/List";
import DetailView from "./pages/ViewDetail";
import AnimateSwitch from "../../components/bases/AnimateSwitch";

const AdminLayout: FC = () => {
  return (
    <AnimateSwitch>
      <Route path="/admin/user" exact component={UserContainer} />
      <Route path="/admin/user/edit/:id" component={ActionView} />
      <Route path="/admin/user/view/:id" component={DetailView} />
    </AnimateSwitch>
  );
};

export default AdminLayout;
