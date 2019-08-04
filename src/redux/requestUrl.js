const apis = {
  // 学生绑定
  add_student_url: '/app/wisdomSchool/addStudent.do',
  // 学生列表
  get_students_url: '/app/wisdomSchool/getStudents.do',
  // 考勤记录
  get_records_url: '/app/wisdomSchool/getRecords.do'
}

// 开发环境重新定义请求URL
const newApis = {}
for (let index in apis) {
  if (apis.hasOwnProperty(index)) {
    if (process.env.NODE_ENV === 'development') {
      newApis[index] = `api${apis[index]}`
    } else {
      newApis[index] = apis[index]
    }
  }
}
export default newApis;
