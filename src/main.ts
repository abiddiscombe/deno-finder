import { Eta } from 'eta';
import { Hono } from 'npm:hono';
import { serveStatic } from 'npm:hono/deno';
import { regions } from './_regions.ts';
import { requests } from './_requests.ts';

const APP_PORT = 8000;
const APP_START_TIME = Date.now();

const server = new Hono();

const eta = new Eta({
    views: `./src/templates`,
});

server.get('/', async (c) => {
    const regionData = regions.lookup();
    const requestData = await requests.hit();

    // Calculate time since instance start.
    const timeAlive = Date.now() - APP_START_TIME;
    const timeAlivePretty = (timeAlive / 1000).toFixed(2);

    return c.html(eta.render('./main', {
        location: regionData,
        requests: requestData,
        timeAlive: timeAlivePretty,
    }));
});

server.use('/static/*', serveStatic({ root: './src' }));

// Start HTTP Server
Deno.serve({ port: APP_PORT }, server.fetch);
