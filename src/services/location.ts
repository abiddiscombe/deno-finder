// location.ts

export const location = {
    lookup: () => {
        const regionKey = Deno.env.get('DENO_REGION') || 'localhost';
        return {
            id: regionKey,
            name: knownLocations[regionKey],
        };
    },
};

const knownLocations: { [index: string]: string } = {
    'localhost': 'On Earth',
    'asia-northeast1': 'Tokyo',
    'asia-south1': 'Mumbai',
    'asia-southeast1': 'Singapore',
    'australia-southeast1': 'Sydney',
    'me-west1': 'Tel Aviv',
    'europe-west2': 'London',
    'europe-west3': 'Frankfurt',
    'europe-west4': 'Netherlands',
    'southamerica-east1': 'São Paulo',
    'us-east4': 'North Virginia',
    'us-south1': 'Texas',
    'us-west2': 'California',
};
