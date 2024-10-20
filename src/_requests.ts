let _totalSessionRequests = 0;

async function hit(regionKey: string) {
  await _writeDenoKv(regionKey);

  const totalSession = _totalSessionRequests++ + 1;
  const [totalGlobal, totalRegion] = await _readDenoKvStats(regionKey);

  const percentagePerRegion = Math.round(
    (totalRegion / totalGlobal) * 100,
  );

  return {
    totalGlobal,
    totalRegion,
    totalSession,
    percentageViaRegion: percentagePerRegion.toFixed(0),
  };
}

async function _writeDenoKv(regionKey: string) {
  const kv = await Deno.openKv();

  await kv.set(["requests", `${Date.now()}`], {
    region: regionKey,
  }, { expireIn: 86400000 });
}

async function _readDenoKvStats(regionKey: string) {
  const kv = await Deno.openKv();
  const requestList = kv.list<{ region: string }>({ prefix: ["requests"] });

  const requestListParsed = [];
  for await (const req of requestList) {
    requestListParsed.push(req.value);
  }

  const requestListParsedInRegion = requestListParsed.filter((record) =>
    // Filter results by those in the region. If app gets
    // many requests, this might be a memory intensive operation.

    record.region === regionKey
  );

  return [requestListParsed.length, requestListParsedInRegion.length];
}

export default {
  hit,
};
