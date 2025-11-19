import {createBrowserRouter} from 'react-router-dom'
import RootLayout from '../pages/RootLayout'
import Search from '../pages/Search'

export const router = createBrowserRouter([
	{
		path: '/',
		element : <RootLayout/>,
		children:[
			{path:'search', element: <Search/>},
		]
	}
])