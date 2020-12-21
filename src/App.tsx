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
        <Route path="/" exact component={Welcome} />
        <Route path="/works" component={Works} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
