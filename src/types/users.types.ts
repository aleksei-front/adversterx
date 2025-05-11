type UserGeoProps = {
	lat: string
	lng: string
}
type UserAddressProps = {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: UserGeoProps
}
type UserCompanyProps = {
	name: string
	catchPhrase: string
	bs: string
}

export type UserProps = {
	id: number
	name: string
	username: string
	email: string
	address: UserAddressProps
	phone: string
	website: string
	company: UserCompanyProps

}