import doRequest from './doRequest';

const getRatesService = (from) => doRequest({
  methods: 'GET',
  url: 'latest',
  params: {
    base: from,
  },
});

export default getRatesService;
