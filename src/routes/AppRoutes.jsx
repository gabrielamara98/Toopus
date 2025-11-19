import {createBrowserRouter} from 'react-router-dom'
import RootLayout from '../pages/RootLayout'
import Search from '../pages/Search'
import Members from '../pages/Member'

export const router = createBrowserRouter([
	{
		path: '/',
		element : <RootLayout/>,
		children:[
			{path:'search', element: <Search/>},
			{path:'members', element: <Members/>},

		]
	}
])