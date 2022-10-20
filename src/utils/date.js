// 小于10的数前面补0
function setZero (num) {
  if (num < 10) {
    num = '0' + num
  }
  return num
}

/**
 * 格式化日期
 * d Date实例
 * format 想要的日期时间格式
 */
export function formatTime (date, format) {
  const year = date.getFullYear()
  const mon = setZero(date.getMonth() + 1)
  const day = setZero(date.getDate())
  const hour = setZero(date.getHours())
  const min = setZero(date.getMinutes())
  const sec = setZero(date.getSeconds())
  const milli = date.getMilliseconds()
  switch (format) {
    case 'YYYY/mm/dd':
      return `${year}/${mon}/${day}`
    case 'YYYY-mm-dd':
      return `${year}-${mon}-${day}`
    case 'YYYY/mm/dd HH:ii:ss':
      return `${year}/${mon}/${day} ${hour}:${min}:${sec}`
    case 'YYYY-mm-dd HH:ii:ss':
      return `${year}-${mon}-${day} ${hour}:${min}:${sec}`
      // ……
    default:
      return `${year}-${mon}-${day} ${hour}:${min}:${sec}.${milli}`
  }
}

export function getYear (date) {
  return date.getFullYear()
}
