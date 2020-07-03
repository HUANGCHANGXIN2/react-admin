import React from "react";
import { List, message, Avatar, Spin,Modal } from "antd";
import reqwest from "reqwest";
import moment from 'moment'
import InfiniteScroll from "react-infinite-scroller";
import "./index.scss";

const fakeDataUrl =
  "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";

class InfiniteListExample extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
    visible:false
  };

  componentDidMount() {
    this.fetchData()
  }

  fetchData = (e=0) => {
    let data = {
      page: e,
      size: 10,
      total: 0,
      sort:''
    };
    React.$axios.common.comments(data).then((res) => {

      data = res.data.content;
      this.setState({
        data:[...this.state.data,...data],
        loading: false,
      });
    });
    // reqwest({
    //   url: fakeDataUrl,
    //   type: 'json',
    //   method: 'get',
    //   contentType: 'application/json',
    //   success: res => {
    //     callback(res);
    //   },
    // });
  };

  handleInfiniteOnLoad = (e) => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning("Infinite List loaded all");
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData(e)
  };
  //回复留言
  listEdit=(e)=>{
    console.log('123');
    
    console.log(e);
    
  }
  handleOk=()=>{
    console.log('111');
    
  }
  handleCancel=()=>{
    console.log('2222');
  }
  // 更多
  getMore=(e)=>{
    console.log(e);
    
  }
  render() {
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={(item) => (
              <List.Item key={item.id}
                actions={[
                <a key="list-loadmore-more" onClick={()=>this.getMore(item)} style={{display:item.hasChildren? '':'none'}}>更多</a>,
                <a key="list-loadmore-edit" onClick={()=>this.listEdit(item)}>回复</a>,
              ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.author+' '+  moment(item.createTime).format("YYYY-MM-DD HH:mm:ss")}
                  description={item.content}
                />
                {/* <div style={{display:item.hasChildren? '':'none'}}> 
                  <p>123</p>  
                </div> */}
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
          <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        </InfiniteScroll>
      </div>
    );
  }
}

export default InfiniteListExample;
