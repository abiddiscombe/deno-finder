// timeAlive.ts

let startTime = 0;

export const timeAlive = {
    start: () => {
        startTime = Date.now();
    },
    lookup: () => {
        return ((Date.now() - startTime) / 1000).toFixed(2);
    },
};
