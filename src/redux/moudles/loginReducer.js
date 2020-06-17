let userInfo = localStorage.getItem('userInfo')?localStorage.getItem('userInfo'):'{}'
let data =JSON.parse(userInfo)
const dataList={
    ...data
}
const loginReducer = (state=dataList, action) => {
    switch (action.type) {
        case 'loginOut':
            localStorage.removeItem('token');
        return state;
        case 'loginTo':
            localStorage.setItem('token',action.value.access_token);
        return state;
        case 'userInfo':
            localStorage.setItem('userInfo',JSON.stringify(action.value))
            // state = action.value
        return state
        default:
            return state;
    }
}
export default loginReducer;