import axios from 'axios'
// Need to find a way to set port correctly.  THIS IS DEF NOT SECURE!!!
import serverConfig from '../../../server/src/config/config'

export default () => {
  return axios.create({
    baseURL: `http://localhost:${serverConfig.port}`
  })
}
