import axios from 'axios'
// return a connector
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081` // pointing to the backend url
  })
}
