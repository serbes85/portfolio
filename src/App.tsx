import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome/Welcome";
import { Works } from "./pages/Works/Works";
import { About } from "./pages/About/About";
import { Blog } from "./pages/Blog/Blog";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Welcome} path="/" exact />
        <Route component={Works} path="/works" />
        <Route component={About} path="/about" />
        <Route component={Blog} path="/blog" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
