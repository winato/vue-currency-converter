import doRequest from './doRequest';

const getRatesService = (from) => doRequest({
  methods: 'GET',
  url: 'https://api.ratesapi.io/api/latest',
  params: {
    base: from,
  },
});

export default getRatesService;
