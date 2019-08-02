import axios from 'axios';
import qs from 'qs';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  return adjustedPath;
}

export default class ApiClient {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params, data, form } = {}) => new Promise((resolve, reject) => {
        const config = {
          url: formatUrl(path),
          method
        }
        if (form) {
          config.data = qs.stringify(form)
        }
        if (params) {
          config.params = params;
        }
        if (data) {
          config.data = data;
        }
        axios(config).then(res => {
          const body = res.data;
          resolve(body);
        }).catch(err => {
          if (err) reject(err);
        })
      }));
  }
}
