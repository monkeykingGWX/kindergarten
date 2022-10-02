import { API_BASE_DIR } from '@/config/config'

export function imageShow (url) {
  if (url && url.indexOf('http') === 0) {
    return url
  } else {
    return API_BASE_DIR + url
  }
}
