import { FC } from 'react'

// import { useFavorites } from '@/components/screens/favorites/useFavorites'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

// import { useAuth } from '@/hooks/useAuth'

import MovieList from '../MovieList'

import NotAuthFavorites from './NotAuthFavorites'

const FavoriteMovieList: FC = () => {
	// const { isLoading, favoritesMovies } = useFavorites()
	// const { user } = useAuth()

	// if (!user) return <NotAuthFavorites />

	// 
	return (
		<div>FavoriteMovieList</div>
	)
}

export default FavoriteMovieList
