const Koa = require('koa');
const apiRouter = require('./routers/api');

const app = new Koa();

app.use(apiRouter.routes()).use(apiRouter.allowedMethods());

const HOST = '0.0.0.0';
const PORT = 3333;

app.listen(PORT, HOST, () => {
    console.log(`server is listening on ${HOST}:${PORT}`);
})