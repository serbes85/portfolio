import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome/Welcome";
import { Works } from "./pages/Works/Works";
import { About } from "./pages/About/About";
import { Blog } from "./pages/Blog/Blog";
import { observer, inject } from "mobx-react";

const App: FC = (MainStore) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} store={MainStore} />
        <Route path="/works" component={Works} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
};

export default inject("MainStore")(observer(App));
