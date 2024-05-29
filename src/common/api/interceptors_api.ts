import AxiosInstance  from '@/common/api/shop_api'
import { user_status } from '@/common/store/user_status'

const setup = () => {
  //SOP API Handling
  AxiosInstance.interceptors.request.use((config) => {
      const token = user_status().getUser.accessToken
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}

export default setup