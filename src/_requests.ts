let _totalSessionRequests = 0;

export const requests = {
    hit: async () => {
        await writeDenoKv();
        // update and return session counter
        const totalSession = _totalSessionRequests++ + 1;
        // update and return Deno.KV values
        const [totalGlobal, totalRegion] = await readDenoKvStats();
        // determine percentage from current
        const percentageViaRegion = Math.round(
            (totalRegion / totalGlobal) * 100,
        );
        // return data
        return {
            totalSession,
            totalGlobal,
            totalRegion,
            percentageViaRegion: percentageViaRegion.toFixed(0),
        };
    },
};

async function writeDenoKv() {
    const kv = await Deno.openKv();
    await kv.set(['requests', `${Date.now()}`], {
        region: Deno.env.get('DENO_REGION') || 'localhost',
    }, { expireIn: 86400000 });
}

async function readDenoKvStats() {
    const regionKey = Deno.env.get('DENO_REGION') || 'localhost';
    const kv = await Deno.openKv();
    const requestList = kv.list({ prefix: ['requests'] });
    const requestListParsed: { region: string }[] = [];
    for await (const req of requestList) {
        requestListParsed.push(req.value);
    }
    const requestListParsedInRegion = requestListParsed.filter((record) =>
        record.region === regionKey
    );
    return [requestListParsed.length, requestListParsedInRegion.length];
}
