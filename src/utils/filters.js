import { API_BASE_DIR } from '@/config/config'
// 导入 dayjs 的核心模块
import dayjs from 'dayjs'
// 导入计算相对时间的插件
import relativeTime from 'dayjs/plugin/relativeTime'
// 导入中文语言包
import zh from 'dayjs/locale/zh-cn'

// 配置“计算相对时间”的插件
dayjs.extend(relativeTime)
// 配置中文语言包
dayjs.locale(zh)

export function imageShow (url) {
  if (url && url.indexOf('http') === 0) {
    return url
  } else {
    return API_BASE_DIR + url
  }
}

export function dateFormat (dateStr) {
  return dayjs().to(dateStr)
}
