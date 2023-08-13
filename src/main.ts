// main.ts
import * as path from 'pathTools';
import { Eta } from 'eta';
import { Application, Router, type RouterContext } from 'oak';
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

router.get('/', (context: RouterContext<'/'>) => {
    context.response.body = eta.render('./main', {
        time: timeAlive.lookup(),
        location: location.lookup(),
        requests: requestCounter.hit(),
    });
});

router.get('/style', async (context: RouterContext<'/style'>) => {
    // read from fs each time for faster development
    const styles = await Deno.readTextFile(
        path.join(cwd, 'static/styles.css'),
    );
    context.response.body = styles;
    context.response.headers.append('Content-Type', 'text/css');
});

server.use(router.routes());
server.use(router.allowedMethods());

await server.listen({ port: 8000 });
