import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        <Route path="/auth" component={AuthLayout} />
        <Redirect from="*" to="/admin" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
