const apis = {
  // 学生绑定
  add_student_url: '/frontapi/bindingStudent/bindingStudent.action',
  // 学生列表
  get_students_url: '/frontapi/bindingStudent/qryStudendByMemberId.action',
  // 考勤记录
  get_records_url: '/frontapi/attendanceRecord/qryAttendanceByCardNo.action',
  // 获取微信openID
  get_weixin_openid_url: '/frontapi/login.action'
}

// 开发环境重新定义请求URL
const newApis = {}
for (let index in apis) {
  if (apis.hasOwnProperty(index)) {
    if (process.env.NODE_ENV === 'development') {
      newApis[index] = `${apis[index]}`
    } else {
      newApis[index] = 'https://www.lcrsinfo.com' + apis[index]
    }
  }
}
export default newApis;
