import {combineReducers} from 'redux';//用于 Reducer 的拆分
 
import loginReducer from './moudles/loginReducer';
 // 全局你可以创建多个reducer 在这里统一在一起
const reducer = combineReducers({
    loginReducer,
});
export default reducer;