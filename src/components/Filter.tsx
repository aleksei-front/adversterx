'use client'

import { FC, useState, useEffect } from 'react'
import { Input } from './ui/input'
import { useDebounce } from '@/hooks/useDebounce'
import { FilterIcon } from 'lucide-react'
import { UserProps } from '@/types/users.types'

type FilterProps = {
	data: UserProps[]
	onFilter: (filteredData: UserProps[]) => void
}

const Filter: FC<FilterProps> = ({ data, onFilter }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearchTerm = useDebounce(searchTerm, 300)
	useEffect(() => {
		const term = debouncedSearchTerm.toLowerCase()

		const checkValue = (value: string | object) => {
			if (typeof value === 'string') return value.toLowerCase().includes(term)
			if (typeof value === 'object' && value !== null)
				return Object.values(value).some(checkValue)
			return false
		}

		const filtered = data.filter(item => checkValue(item))
		onFilter(filtered)
	}, [debouncedSearchTerm, data, onFilter])

	return (
		<div className='flex items-center gap-2.5'>
			<FilterIcon size={18} />
			<Input
				placeholder='Filter'
				className='max-w-[200px]'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
		</div>
	)
}

export default Filter
