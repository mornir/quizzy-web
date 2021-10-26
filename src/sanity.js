import PicoSanity from 'picosanity';

const client = new PicoSanity({
  projectId: '56p6cqhh',
  dataset: 'production',
  apiVersion: '2021-10-26',
  useCdn: true,
});

export default client;
