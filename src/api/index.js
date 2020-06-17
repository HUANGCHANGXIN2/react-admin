const req = require.context("./requestApi", false, /\.js$/);
let api = {};
req.keys().forEach(key => {
  let name = key.substring(2, key.length - 3);
  api[name] = req(key).default;
});
export default {
  ...api
};