// requestCounter.ts

let _totalRequests = 0;

export const requestCounter = {
    hit: () => {
        return _totalRequests++ + 1;
    },
};
