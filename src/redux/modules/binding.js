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

const initial = {
  students: [],
  records: []
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
      const { data } = action.result;
      return {
        ...state,
        students: data
      }
    }
    case GET_RECORDS: {
      return {
        ...state
      }
    }
    case GET_RECORDS_SUCCESS: {
      const { data } = action.result;
      return {
        ...state,
        records: data
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
      data
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
      data
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
      data
    })
  };
}