export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL as string

export const API_URL = {
	root: (url = '') => `${url ? url : ''} `,
	users: (url = '') => `users${url}`
}