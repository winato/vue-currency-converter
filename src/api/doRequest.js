import axios from 'axios';

const doRequest = ({
  method,
  data,
  params,
  url,
}) => axios({
  method,
  data,
  params,
  url,
});

export default doRequest;
