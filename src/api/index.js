import Axios from 'axios'

export let instance = Axios.create({
  baseURL: 'https://api.readhub.me'
})
