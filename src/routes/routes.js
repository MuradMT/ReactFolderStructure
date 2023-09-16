import Home from '../pages/admin/Home/Home'
import Homesite from '../pages/site/Home/Home'
import SiteRoot from '../pages/site/root/SiteRoot'
import AdminRoot from '../pages/admin/root/AdminRoot'
import Detail from '../pages/admin/Detail/Detail'
import Detailsite from '../pages/site/Detail/Detail'

export const ROUTES = [
  {
    path: '/',
    element: <SiteRoot />,
    children: [
      {
        path: '',
        element: <Homesite />,
      },
      {
        path: 'details',
        element: <Detailsite />,
      },
      
    ],
  },
  {
    path: '/admin',
    element: <AdminRoot />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'details',
        element: <Detail />,
      },
    ],
  },
]
