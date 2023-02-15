// import AuthProvider from './AuthProvider/AuthProvider'
// import HeadProvider from './HeadProvider/HeadProvider'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
// import { store } from 'store/store'

import Layout from '@/components/layout/Layout'

// import ReduxToastr from '@/ui/redux-toastr/ReduxToastr'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>

		// <HeadProvider>
		// 	<Provider store={store}>
		// 		<QueryClientProvider client={queryClient}>
		// 			<ReduxToastr />
		// 			<AuthProvider Component={Component}>
		// 				<Layout>{children}</Layout>
		// 			</AuthProvider>
		// 		</QueryClientProvider>
		// 	</Provider>
		// </HeadProvider>
	)
}

export default MainProvider
