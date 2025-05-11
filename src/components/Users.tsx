import { formatPhoneNumberForHref } from '@/lib/formatPhoneForHref'
import { Phone, Mail, Globe } from 'lucide-react'
import { FC } from 'react'
import { Card, CardHeader, CardContent, CardFooter } from './ui/card'
import { Skeleton } from './ui/skeleton'
import Link from 'next/link'
import { UserProps } from '@/types/users.types'

type UsersProps = {
	isLoading: boolean
	data: UserProps[]
}
const Users: FC<UsersProps> = ({ data, isLoading }) => {
	return (
		<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
			{isLoading ? (
				Array.from({ length: 3 }).map((_, index) => (
					<Card className='min-h-80' key={index}>
						<CardHeader>
							<Skeleton className='h-16' />
						</CardHeader>
						<CardContent>
							<Skeleton className='h-80' />
						</CardContent>
					</Card>
				))
			) : data.length ? (
				data.map(user => (
					<Card key={user.id}>
						<CardHeader>
							<h3 className='font-semibold text-xl'>
								<div className='flex items-center justify-between gap-2.5'>
									<span className='font-medium'>Name: </span>
									<span>{user.name}</span>
								</div>
								<div className='flex items-center justify-between gap-2.5'>
									<span>Surname: </span>
									<span>{user.username}</span>
								</div>
							</h3>
						</CardHeader>
						<CardContent className='flex flex-col gap-2.5'>
							<div className='md:grid grid-cols-2 gap-2.5'>
								<div>
									<span className='block font-semibold mb-2.5 text-lg'>
										Address Info
									</span>
									<div className='flex flex-col gap-2 text-sm'>
										<div className='flex md:block items-center gap-1 justify-between'>
											<span className='font-medium'>City:</span>{' '}
											<span>{user.address.city}</span>
										</div>
										<div className='flex md:block items-center gap-1 justify-between'>
											<span className='font-medium'>Street:</span>{' '}
											<span>{user.address.street}</span>
										</div>
										<div className='flex md:block items-center gap-1 justify-between'>
											<span className='font-medium'>Suite</span>{' '}
											<span>{user.address.suite}</span>
										</div>
										<div className='flex md:block items-center gap-1 justify-between'>
											<span className='font-medium'>ZipCode</span>{' '}
											<span>{user.address.zipcode}</span>
										</div>
									</div>
								</div>
								<div>
									<div className='font-semibold mb-2.5 text-lg'>
										Contact Info
									</div>
									<div className='flex flex-col gap-2'>
										<div className='flex items-center gap-2.5 text-sm'>
											<Phone size={16} className='shrink-0' />{' '}
											<Link
												className='hover:underline'
												href={`tel:${formatPhoneNumberForHref(user.phone)}`}
											>
												{user.phone}
											</Link>
										</div>
										<div className='flex items-center gap-2.5'>
											<Mail size={16} className='shrink-0' />
											<Link
												className='hover:underline overflow-hidden text-ellipsis'
												target='_blank'
												href={`mailto:${user.email}`}
											>
												{user.email}
											</Link>
										</div>
										<div className='flex items-center gap-2.5'>
											<Globe size={16} className='shrink-0' />
											<Link
												className='hover:underline'
												target='_blank'
												href={user.website}
											>
												{user.website}
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className=' '>
								<span className='font-medium block mb-2.5 text-lg'>
									Company Info
								</span>
								<div className='flex flex-col gap-2'>
									<div className='flex items-center justify-between gap-2 text-sm '>
										<span className='font-medium'>Company name: </span>
										<div className='text-right'>{user.company.name}</div>
									</div>
									<div className='flex items-center justify-between gap-2 text-sm'>
										<span className='font-medium'>Company catchPhrase: </span>
										<div className='text-right'>{user.company.catchPhrase}</div>
									</div>
									<div className='flex items-center justify-between gap-2 text-sm text-right'>
										<span className='font-medium'>Company bs: </span>
										<div className='text-right'>{user.company.bs}</div>
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<div className='flex flex-col gap-2.5'>
								<span className='font-medium'>Geo:</span>
								<div className='flex flex-col gap-1'>
									<div>{user.address.geo.lat}</div>
									<div>{user.address.geo.lng}</div>
								</div>
							</div>
						</CardFooter>
					</Card>
				))
			) : (
				<div>Sorry no data</div>
			)}
		</div>
	)
}

export default Users
