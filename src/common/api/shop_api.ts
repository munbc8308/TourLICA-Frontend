import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tourlica.shop/api', //설정 파일 주소 참조
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance