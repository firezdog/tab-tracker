import axios from 'axios'

// Need to find a way to set port correctly.

export default () => {
  return axios.create({
    baseURL: `http://localhost:8082`
  })
}
