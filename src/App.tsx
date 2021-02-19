import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Welcome } from "./pages/Welcome/Welcome";
import { Works } from "./pages/Works/Works";
import { About } from "./pages/About/About";
import { Blog } from "./pages/Blog/Blog";
import { Admin } from "./pages/Admin/Admin";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/works" component={Works} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
