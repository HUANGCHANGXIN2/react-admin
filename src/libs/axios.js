import axios from 'axios';
import {message} from 'antd';
import qs from 'qs'

axios.defaults.baseURL = 'https://www.ykxingxin.cn'
//设置默认的请求超时时间
axios.defaults.timeout = 1000 * 6;

axios.interceptors.request.use(
    config => {
      //发送前做点什么
      // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
     
      const token = localStorage.getItem('token')?localStorage.getItem('token') :'';
      config.headers = {
        'Content-Type': 'application/json',
        'API-Authorization': token,
        'ADMIN-Authorization': token,
      };
      return config;
    },
    error => {
      return Promise.error(error);
    }
  );
// // 响应拦截
// axios.interceptors.response.use(
//     // 对响应做点什么
//     response => {
//       if(response.data){
//         response.data=eval("(" + response.data + ")")
//       }
//       if (response.data.message!==2) {//eslint-disable
//         return Promise.resolve(response);
//       }else if (response.data.message===2) {//eslint-disable
//         message.error('登录已失效');
//         // 获取ip地址跳转拼接
//         // var str1=window.location.href.split("").reverse().join("");
//         // var str2=str1.substring(0,str1.indexOf('/'));
//         // var str3=str2.split("").reverse().join("");
//         // window.location.href=window.location.href.split(str3)[0]+'/login'
//         // store.dispatch(loginout())
//         // return Promise.reject(response);
//       }else{
  
//       }
//     },
//     // 服务器状态码不是200的情况
//     error => {
//       if (error.response.status) {
//         switch (error.response.status) {
//           case 500:
//             // Message.error(error.response.data.message);
//             break;
//           case 403:
//             break;
//           case 404:
//             break;
//           default:
//         }
//         return Promise.reject(error.response);
//         // }
//       }
//     }
//   );
  export function get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  }
  /**
   * post方法，对应post请求
   */
  export function post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  }