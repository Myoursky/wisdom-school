import api from '../requestUrl';

const ADD_STUDENT = 'wisdomschool/binding/ADD_STUDENT';
const ADD_STUDENT_SUCCESS = 'wisdomschool/binding/ADD_STUDENT_SUCCESS';
const ADD_STUDENT_FAIL = 'wisdomschool/binding/ADD_STUDENT_FAIL';

const GET_STUDENTS = 'wisdomschool/binding/GET_STUDENTS';
const GET_STUDENTS_SUCCESS = 'wisdomschool/binding/GET_STUDENTS_SUCCESS';
const GET_STUDENTS_FAIL = 'wisdomschool/binding/GET_STUDENTS_FAIL';

const GET_RECORDS = 'wisdomschool/binding/GET_RECORDS';
const GET_RECORDS_SUCCESS = 'wisdomschool/binding/GET_RECORDS_SUCCESS';
const GET_RECORDS_FAIL = 'wisdomschool/binding/GET_RECORDS_FAIL';

const SET_WEXIN_CODE = 'wisdomschool/binding/SET_WEXIN_CODE';

const GET_WEIXIN_OPENID = 'wisdomschool/binding/GET_WEIXIN_OPENID';
const GET_WEIXIN_OPENID_SUCCESS = 'wisdomschool/binding/GET_WEIXIN_OPENID_SUCCESS';
const GET_WEIXIN_OPENID_FAIL = 'wisdomschool/binding/GET_WEIXIN_OPENID_FAIL';

const RELIEVE_STUDENT = 'wisdomschool/binding/RELIEVE_STUDENT';
const RELIEVE_STUDENT_SUCCESS = 'wisdomschool/binding/RELIEVE_STUDENT_SUCCESS';
const RELIEVE_STUDENT_FAIL = 'wisdomschool/binding/RELIEVE_STUDENT_FAIL';


const initial = {
  students: [],
  records: [],
  code: '',
  openId: ''
};

export default function reducer(state = initial, action = {}) {
  switch (action.type) {
    case ADD_STUDENT: {
      return {
        ...state
      }
    }
    case ADD_STUDENT_SUCCESS: {
      return {
        ...state
      }
    }
    case GET_STUDENTS: {
      return {
        ...state
      }
    }
    case GET_STUDENTS_SUCCESS: {
      const { datas } = action.result;
      return {
        ...state,
        students: datas
      }
    }
    case GET_RECORDS: {
      return {
        ...state
      }
    }
    case GET_RECORDS_SUCCESS: {
      const { datas } = action.result;
      return {
        ...state,
        records: datas
      }
    }
    case SET_WEXIN_CODE: {
      return {
        ...state,
        code: action.code
      }
    }
    case GET_WEIXIN_OPENID_SUCCESS: {
      const { datas } = action.result
      return {
        ...state,
        openId: datas
      }
    }
    default:
      return state;
  }
}

/**
 * 绑定学生卡
 */
export function addStudent(data, url = api.add_student_url) {
  return {
    types: [ADD_STUDENT, ADD_STUDENT_SUCCESS, ADD_STUDENT_FAIL],
    promise: client => client.post(url, {
      form: data
    })
  };
}


/**
 * 查询学生列表
 */
export function getStudents(data, url = api.get_students_url) {
  return {
    types: [GET_STUDENTS, GET_STUDENTS_SUCCESS, GET_STUDENTS_FAIL],
    promise: client => client.post(url, {
      params: data
    })
  };
}

/**
 * 解除绑定
 */
export function relieveStudent(data, url = api.relieve_student_url) {
  return {
    types: [RELIEVE_STUDENT, RELIEVE_STUDENT_SUCCESS, RELIEVE_STUDENT_FAIL],
    promise: client => client.post(url, {
      params: data
    })
  };
}

/**
 * 查询考勤记录
 */
export function getRecords(data, url = api.get_records_url) {
  return {
    types: [GET_RECORDS, GET_RECORDS_SUCCESS, GET_RECORDS_FAIL],
    promise: client => client.post(url, {
      params: data
    })
  };
}

/**
 * 获取微信openId
 */
export function getWeixinOpenId(data, url = api.get_weixin_openid_url) {
  return {
    types: [GET_WEIXIN_OPENID, GET_WEIXIN_OPENID_SUCCESS, GET_WEIXIN_OPENID_FAIL],
    promise: client => client.get(url, {
      params: {
        code: data
      }
    })
  };
}

/**
 * 请求参数更新
 */
export function setWexinCode(code) {
  return dispatch => dispatch({
    type: SET_WEXIN_CODE,
    code
  });
}