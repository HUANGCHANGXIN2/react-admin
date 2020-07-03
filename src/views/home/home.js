import React, { Component } from "react";
import { Row, Col, Breadcrumb, Carousel, Card, List, Avatar } from "antd";
import Test from "../../components/echarts/bar";
import Wuxing from "../../components/echarts/wuxing";
import InfiniteListExample from "../../components/list/list";
import "./index.scss";
import "animate.css";

const { Meta } = Card;
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          value: "3456",
          name: "图片",
          color: "#55AB6A",
          img: require("../../assets/images/bg-1.jpg"),
        },
        {
          value: "2341",
          name: "访问",
          color: "#55AB6A",
          img: require("../../assets/images/bg-2.jpg"),
        },
        {
          value: "234",
          name: "转发",
          color: "#55AB6A",
          img: require("../../assets/images/bg-3.jpg"),
        },
        {
          value: "65432",
          name: "点赞",
          color: "#55AB6A",
          img: require("../../assets/images/bg-4.jpg"),
        },
      ],
    };
  }

  render() {
    const { data, animate } = this.state;
    const dataList = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
    ];
    return (
      <div className="home">
        <Row>
          <Col span={12}>
            {data.map((item, index) => {
              return (
                <div className="top-left" key={item.value}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 180, overflow: "hidden" }}
                    cover={<img alt="example" src={item.img} />}
                  >
                    <div className="top-left-box">
                      <h2>{item.value}</h2>
                      <span>{item.name}</span>
                    </div>
                  </Card>
                  ,
                </div>
              );
            })}
          </Col>
          <Col span={12}>
            <Wuxing />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <InfiniteListExample/>
          </Col>
          <Col span={12}>
            <Test
              data={{
                xdata: [
                  "1月",
                  "2月",
                  "3月",
                  "4月",
                  "5月",
                  "6月",
                  "7月",
                  "8月",
                  "9月",
                  "10月",
                  "11月",
                  "12月",
                ],
                ydata: {
                  ydata1: [
                    2.0,
                    4.9,
                    7.0,
                    23.2,
                    25.6,
                    76.7,
                    135.6,
                    162.2,
                    32.6,
                    20.0,
                    6.4,
                    3.3,
                  ],
                  ydata2: [
                    2.6,
                    5.9,
                    9.0,
                    26.4,
                    28.7,
                    70.7,
                    175.6,
                    182.2,
                    48.7,
                    18.8,
                    6.0,
                    2.3,
                  ],
                },
              }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default home;
