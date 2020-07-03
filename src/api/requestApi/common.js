import { get, post } from "../../libs/axios";
const common = {
    login(data) {
        return post('/api/admin/login',data);
    },
    imgList(data) {
        return get('/api/admin/photos',data);
    },
    userInfo(data) {
        return get('/api/admin/statistics/user',data);
    },
    comments(data) {
        return get('/api/content/sheets/6/comments/top_view',data);
    },

};
export default common;
