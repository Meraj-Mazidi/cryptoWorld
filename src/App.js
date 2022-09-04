import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
} from "./components";
import "./App.css";

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies simplified={false} />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Copyright © 2022 - <Link to="/">Crypto World Inc. </Link> <br />
          <a
            href="https://meraj-main-portfolio.pages.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Meraj Mazidi ;) <br />
            merajmazidiwork@gmail.com
          </a>
          <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
