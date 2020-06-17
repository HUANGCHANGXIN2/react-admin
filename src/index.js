import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import api from './api/index'

React.$axios=api
// import { ConfigProvider } from 'antd'
// import { zhCN } from 'antd/es/locale/zh_CN'


ReactDOM.render(
    <App/>,
    document.getElementById('root')
) 