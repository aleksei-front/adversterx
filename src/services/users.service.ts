import { axiosInstance } from '@/app/api/instance'
import { API_URL } from '@/config/api.config'
import { UserProps } from '@/types/users.types'

class UserService {
	async getUsers() {

		const response = await axiosInstance.get<UserProps[]>(API_URL.users())
		return response
	}
}

export const userService = new UserService()