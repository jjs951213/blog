import Router from 'koa-router';
import posts from './posts';

api.get('/test', ctx => {
  ctx.body = 'test 성공';
});


export default api;