import axios from 'axios';

const doRequest = ({
  method,
  data,
  params,
  url,
}) => {
  console.log('1', params);
  return axios({
    method,
    data,
    params,
    url,
  });
};

export default doRequest;
