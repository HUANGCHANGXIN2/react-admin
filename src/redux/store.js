import { createStore } from 'redux'  //  引入createStore方法
import reducer from './reducer'
// 全局你可以创建多个reducer 在这里统一在一起
const store = createStore(reducer) // 创建数据存储仓库
export default store;