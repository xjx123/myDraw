import axios from 'axios';

const request = axios.create({
    baseURL: '/'
})

const createError = (code, msg) => {
    const err = new Error('no data111');
    err.code = code;
    return err;
}

const handleRequest = (request) => {
    return new Promise((resolve, reject) => {
        request.then(res => {
            console.log("handleRequest res: ", res);
            const data = res.data;
            if (!data) {
                return reject(createError(400, 'no data'));
            }
            if (!data.success) {
                return reject(createError(400, data));
            }

            resolve(data.data);
        }).catch(err => {
            const res = err.response;
            console.log('handleRequest err: ', res);
            if (res && res.status === 401) {
                reject(createError(401, 'need auth'));
            } else {
                reject(createError(400, 'no data'));
            }
        })
    })
}

export default {
    getUserInfo() {
        return handleRequest(request.get('/api/getUserInfo'));
    },
    login(query) {
        return handleRequest(request.post('/api/login', {
            userName: query.userName,
            passWord: query.passWord
        }));
    },
    getRoomList() {
        return handleRequest(request.get('/api/getRoomList'));
    }
}