const Koa = require('koa');
const router = require('./router');
const app = new Koa();
const middleware = require('./middleware');

middleware(app);
router(app);

app.listen(3001, ()=> {
    console.log('server is running on 3001');
})


