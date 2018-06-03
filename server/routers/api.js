const Router = require('koa-router');
const apiController = require('../controllers/api');

const apiRouter = new Router({ prefix: '/api' });


const successResponse = (data) => {
    return {
        success: true,
        data
    }
}

apiRouter
    .get('/getUserInfo', async (ctx) => {
        const data = await apiController.getUserInfo();
        ctx.body = successResponse(data);
    })

module.exports = apiRouter;