'use client'

import Filter from '@/components/Filter'

import Users from '@/components/Users'
import { userService } from '@/services/users.service'
import { UserProps } from '@/types/users.types'
import { useQuery } from '@tanstack/react-query'

import { useState } from 'react'

export default function HomePage() {
	const { data: usersData, isLoading } = useQuery({
		queryKey: ['users'],
		queryFn: () => userService.getUsers(),
		select: data => data.data,
		retry: false,
	})
	const [filteredData, setFilteredData] = useState<UserProps[]>([])
	const displayData =
		filteredData.length > 0 || usersData?.length === 0 ? filteredData : []
	return (
		<main className='mb-40'>
			<div className='container px-4 mx-auto'>
				<div className='py-4 gap-2.5 justify-between flex items-center '>
					<Filter data={usersData ?? []} onFilter={setFilteredData} />
				</div>
				<Users isLoading={isLoading} data={displayData} />
			</div>
		</main>
	)
}
