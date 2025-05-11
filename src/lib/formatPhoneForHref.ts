export const formatPhoneNumberForHref = (phone: string) => {
	const digits = phone.replace(/\D/g, '')
	return phone.trim().startsWith('+') ? `+${digits}` : digits
}