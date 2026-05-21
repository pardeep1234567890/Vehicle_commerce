import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound/PageNotFound.jsx'
import ComingSoon from '../pages/comingSoon/comingSoon.jsx'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<ComingSoon />} />

            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </>
  )
}

export default MainRoutes