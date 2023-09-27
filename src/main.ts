// main.ts
import * as path from 'pathTools';
import { Eta } from 'eta';
import { Application, Router, send, type RouterContext } from 'oak';
import { location } from './services/location.ts';
import { timeAlive } from './services/timeAlive.ts';
import { requestCounter } from './services/requestCounter.ts';

timeAlive.start();

const cwd = (Deno.env.get('DENO_REGION') || '')
    ? './src'
    : path.join(Deno.cwd(), 'src');

const eta = new Eta({
    views: path.join(cwd, 'templates'),
});
const router = new Router();
const server = new Application();

router.get('/', async (context: RouterContext<'/'>) => {
    context.response.body = eta.render('./main', {
        time: timeAlive.lookup(),
        location: location.lookup(),
        requests: await requestCounter.hit(),
    });
});

router.get("/static/:path+", async (ctx) => {
    console.log(Deno.cwd())
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/src`,
    });
  });

server.use(router.routes());
server.use(router.allowedMethods());

await server.listen({ port: 8000 });
