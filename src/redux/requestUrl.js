const apis = {
  // 学生绑定
  add_student_url: 'https://www.lcrsinfo.com/frontapi/bindingStudent/bindingStudent.action',
  // 学生列表
  get_students_url: 'https://www.lcrsinfo.com/frontapi/bindingStudent/qryStudendByMemberId.action',
  // 考勤记录
  get_records_url: 'https://www.lcrsinfo.com/frontapi/attendanceRecord/qryAttendanceByCardNo.action'
}

// 开发环境重新定义请求URL
const newApis = {}
for (let index in apis) {
  if (apis.hasOwnProperty(index)) {
    if (process.env.NODE_ENV === 'development') {
      newApis[index] = `${apis[index]}`
    } else {
      newApis[index] = apis[index]
    }
  }
}
export default newApis;
