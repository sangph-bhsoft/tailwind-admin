import { FC } from "react";
import { Route } from "react-router-dom";
import AnimateSwitch from "../components/bases/AnimateSwitch";
import ConfirmDelete from "../components/bases/ConfirmDelete";
import SideModal from "../components/bases/SideModal";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import CategoryContainer from "../features/category";
import ProductContainer from "../features/product";
import Simple from "../features/spring";
import UserContainer from "../features/user";

const AdminLayout: FC = () => {
  return (
    <div className="bg-white-smoke h-screen">
      <NavBar />
      <SideBar />
      <ConfirmDelete />
      <SideModal />
      <div className="pt-24 px-8 lg:ml-260px h-full">
        <AnimateSwitch>
          <Route path="/admin/product" component={ProductContainer} />
          <Route path="/admin/category" component={CategoryContainer} />
          <Route path="/admin/user" component={UserContainer} />
          <Route path="/admin/animate" component={Simple} />
        </AnimateSwitch>
      </div>
    </div>
  );
};

export default AdminLayout;
