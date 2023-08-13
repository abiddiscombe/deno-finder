// version.ts

export const version = {
    lookup: () => {
        return {
            v8: Deno.version.v8,
            ts: Deno.version.typescript,
            deno: Deno.version.deno,
        };
    },
};
