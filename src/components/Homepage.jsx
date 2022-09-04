import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";
import Loader from "./Loader";

const { Title } = Typography;

const Homepage = () => {
  const { data } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (data === undefined) return <Loader />;
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats.totalCoins}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={globalStats.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Maket Cap"
            value={globalStats.totalMarketCap}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats.totalMarkets} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
