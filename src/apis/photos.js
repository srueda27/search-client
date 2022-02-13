import axios from "axios";

export default axios.create({
  baseURL: 'https://search-photos-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
})