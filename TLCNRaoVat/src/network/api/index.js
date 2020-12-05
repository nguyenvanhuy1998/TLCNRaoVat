import axios from 'axios'
import { BASE_URL } from '../config'


export default axios.create({
    baseURL:BASE_URL,
    timeout:5000,
    headers:{
        Accept:"application/json",
        "Content-Type":"application/x-www-form-urlencoded"
    }
})