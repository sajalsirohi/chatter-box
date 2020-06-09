import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";

import ChatPage from "./pages/chat-page/chat-page.component";
import JoinPage from "./pages/join-page/join-page.component";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={JoinPage} />
      <Route exact path="/chat" component={ChatPage} />
    </Router>
  );
};

export default App;
