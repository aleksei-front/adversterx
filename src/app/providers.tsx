'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren, useState } from 'react'

const Providers: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		})
	)
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default Providers
