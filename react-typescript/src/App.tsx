import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Home, About } from "./router/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
        </ul>
        <hr/>
        <Route path="/" exact={true} component={Home} />
        <Route path={["/about", "/info"]} component={About} />
      </div>
    </BrowserRouter>
  );
};

export default App;
