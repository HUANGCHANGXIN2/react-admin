import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Table,
  Tag,
  Space,
  message,
  Popconfirm,
  Modal,
} from "antd";

const { Option } = Select;

// form布局
const formItemLayout = {
  labelCol: {},
  wrapperCol: {},
};
const layout = {
  labelCol: {
    xs: {
      span: 12,
    },
    sm: {
      span: 2,
    },
  },
  // wrapperCol: {
  //   xs: {
  //     span: 12,
  //   },
  //   sm: {
  //     span: 12,
  //   },
  // },
};
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoList: [
        {
          id: 1,
          product_name: "asin",
          product_iphone: "17681862433",
          product_dea: "2020-06-15",
          type: "管理员",
          title: "新增用户",
        },
      ],
      visible: false,
      confirmLoading: false,
      pageNum: 1,
      pageSize: 8,
      total: 20,
    };
  }
  formRef = React.createRef();
  formInfo = React.createRef();
  // 搜索
  onFinish = (values) => {
    console.log(values);
  };
  //重置
  reset = () => {
    this.formRef.current.resetFields();
    this.formRef.current.setFieldsValue({
      type: undefined,
      name: "",
    });
  };
  //删除
  delete = () => {
    message.success("Click on Yes");
  };

  //删除弹窗
  cancel = () => {};
  confirm = () => {};
  //新增弹窗
  showModal = () => {
    console.log("新增");

    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    console.log("123");

    this.setState({
      visible: false,
    });
  };
  changePage = (page) => {
    this.setState(
      {
        pageNum: page,
      },
      () => {
        console.log(page);

        // this.getInfo()
      }
    );
  };
  // 编辑
  edit = (e) => {
    console.log(e);
    this.setState({
      title: "编辑用户",
      visible: true,
    });
    this.formInfo.current.setFieldsValue(e);
    
  };
  //确定保存
  handleOk = (e) => {
    this.formInfo.current.validateFields().then((values) => {
      console.log(values);
    });
  };
  render() {
    const pagination = {
      current: this.state.pageNum,
      total: this.state.total,
      onChange: this.changePage,
      pageSize: this.state.pageSize,
    };
    const columns = [
      {
        title: "用户名称",
        dataIndex: "product_name",
        align: "center",
        // render: (text, record) => (  //塞入内容
        //   <img src={record.product_img} width="100px" alt="" />
        // ),
      },
      {
        title: "手机号码",
        dataIndex: "product_iphone",
        align: "center",
      },
      {
        title: "注册时间",
        dataIndex: "product_dea",
        align: "center",
        // render: (text, record) => (  //塞入内容
        //   <img src={record.product_dea} width="30px" height='150px' alt="" />
        // ),
      },
      {
        title: "用户类型",
        dataIndex: "type",
        align: "center",
      },
      {
        title: "操作",
        key: "action",
        width: "120px",
        align: "center",
        render: (text, record) => (
          <Space>
            <a
              onClick={() => {
                this.edit(record);
              }}
            >
              编辑
            </a>
            <Popconfirm
              title="Are you sure delete this task?"
              onConfirm={this.confirm}
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            >
              <a>删除</a>
            </Popconfirm>
            ,
          </Space>
        ),
      },
    ];
    const { title, infoList, visible, confirmLoading } = this.state;
    return (
      <div className="user">
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          layout="inline"
          name="control-ref"
        >
          <Form.Item name="name" label="姓名">
            <Input style={{ width: 200 }} />
          </Form.Item>
          <Form.Item name="type" label="类型">
            <Select style={{ width: 200 }} placeholder="请选择" allowClear>
              <Option value="male">管理员</Option>
              <Option value="female">普通用户</Option>
              <Option value="other">up主</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={this.reset}>重置</Button>
          </Form.Item>
        </Form>
        <Button
          style={{ marginTop: 20, marginBottom: 20 }}
          type="primary"
          onClick={this.showModal}
        >
          新增用户
        </Button>
        <Table
          rowKey={"id"}
          columns={columns}
          dataSource={infoList}
          pagination={pagination}
        />
        {/* 弹窗 */}
        <Modal
          title={title}
          cancelText="取消"
          okText="确认"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form
            {...layout}
            ref={this.formInfo}
            onFinish={this.onFinish}
            name="info"
          >
            <Form.Item name="name" label="姓名">
              <Input placeholder="请输入" />
            </Form.Item>
            <Form.Item name="type" label="类型">
              <Select placeholder="请选择" allowClear placeholder="请选择">
                <Option value="male">管理员</Option>
                <Option value="female">普通用户</Option>
                <Option value="other">up主</Option>
              </Select>
            </Form.Item>
            <Form.Item name="pwd" label="密码">
              <Input placeholder="请输入" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default User;
