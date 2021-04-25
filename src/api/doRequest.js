import axios from 'axios';
import baseUrl from '../config/constants';

const doRequest = ({
  method,
  data,
  params,
  url,
}) => axios({
  method,
  data,
  params,
  url: `${baseUrl}${url}`,
});

export default doRequest;
