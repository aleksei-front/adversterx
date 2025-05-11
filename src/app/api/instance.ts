import axios, { CreateAxiosDefaults } from 'axios'
import { SERVER_URL } from '@/config/api.config'

const options: CreateAxiosDefaults = {
	baseURL: SERVER_URL,
	headers: {
		'Content-Type': 'application/json'
	}
}

const axiosInstance = axios.create(options)

export { axiosInstance }