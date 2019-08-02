const MY_REQUEST_LOAD = 'mobile/jncrequest/MY_REQUEST_LOAD';
const MY_REQUEST_SUCCESS = 'mobile/jncrequest/MY_REQUEST_SUCCESS';
const MY_REQUEST_FAIL = 'mobile/jncrequest/MY_REQUEST_FAIL';

const initial = {
};

export default function reducer(state = initial, action = {}) {
  switch (action.type) {
    case MY_REQUEST_LOAD: {
      return {
        ...state
      }
    }
    case MY_REQUEST_SUCCESS: {
      return {
        ...state
      }
    }
    default:
      return state;
  }
}

/**
 * 获取我的请求数据
 */
export function getRequest(data, url = '') {
  return {
    types: [MY_REQUEST_LOAD, MY_REQUEST_SUCCESS, MY_REQUEST_FAIL],
    promise: client => client.post(url, {
      data
    }),
    params: data
  };
}
