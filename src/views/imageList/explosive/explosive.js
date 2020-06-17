import React from "react";
import Masonry from "masonry-layout";
import { Card } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import imagesLoaded from "imagesloaded";
import LazyLoad from "react-lazyload";
import Zmage from "react-zmage";
import "./index.scss";
import "animate.css";

const { Meta } = Card;
export default class extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true, // 是否开启下拉加载
      data: [], // 接受我每次的数据
      count: 0, //下拉加载
      imgList: [],
    };
    this.loadMoreData();
  }
  imagesOnload = () => {
    //图片    1
    const elLoad = imagesLoaded(".pages-hoc"); //获取最外层的盒子
    elLoad.on("always", () => {
      // setTimeout(() => {  }, 500)
    });
  };

  advanceWidth = () => {
    // new Masonry(节点, 配置)
    new Masonry(document.querySelector(".pages-hoc"), {
      itemSelector: ".d", // 要布局的网格元素
      columnWidth: 10, // 获取节点 可以自动计算每列的宽度
      fitWidth: true, // 设置网格容器宽度等于网格宽度
      gutter: 20,
    });
  };

  loadMoreData = (e = 0) => {
    //请求数据
    console.log(e);
    console.log('123');
    
    // page 当前滚动到了第几页
    const { data, count, imgList } = this.state;
    // 超过200条数据 不继续监听下拉事件
    // if (count && data.length >= count) {
    //   return false;
    // }
    let params = {
      page: e,
      size: 10,
      // sort: "createTime,desc",
    };
    // page 是当前请求第几页数据
    // limit 每页我需要返回的数据条数
    React.$axios.common
      .imgList(params)
      .then((res) => {
        this.setState({
          data: [...data, ...res.data.content],
          count: res.data.total,
        });
        res.data.content.map((item, index) => {
          this.setState({
            imagList: imgList.push(Object.assign({ src: item.url })),
          });
        });
        this.imagesOnload();
        this.advanceWidth();
      })
      .catch((err) => console.log(err));
    console.log(imgList);
  };

  render() {
    const { hasMore, imgList, data } = this.state;
    return (
      <div className="box">
        {/* 下拉加载 */}
        <InfiniteScroll
          initialLoad={false} // 不让它进入直接加载
          pageStart={1} // 设置初始化请求的页数
          loadMore={this.loadMoreData} // 监听的ajax请求
          hasMore={true} // 是否继续监听滚动事件 true 监听 | false 不再监听
          useWindow={false} // 不监听 window 滚动条
        >
          <div className="pages-hoc animate__animated animate__backInLeft">
            {data.map((value, key) => (
              <Card
                key={value.id}
                // style={{ width: 240, float: 'left' }}
                className="d"
                cover={
                  <Zmage
                    set={imgList}
                    defaultPage={key}
                    backdrop="#ccc"
                    src={value.url}
                    key={key + value}
                  />
                }
              >
                <Meta title={value.name} description="www.ykxingxin.cn" />
              </Card>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
