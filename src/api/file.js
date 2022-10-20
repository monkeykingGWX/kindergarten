import request from '@/utils/request'

export function uploadFile (formData) {
  return request.post('/auth/uploadOneImage', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
