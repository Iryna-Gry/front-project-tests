import { Navigate, Route, Routes } from 'react-router-dom'
import {
  Home,
  SharedLayout,
  Welcome,
  ResultsPage,
  Account,
} from './pages/index'
import { useDispatch } from 'react-redux'

import { useEffect } from 'react'
import { fetchUser } from './redux/user/operations/operations'
import { AppDispatch } from './redux/store'

const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='welcome' element={<Welcome />} />
          <Route path='account' element={<Account />} />
          {/* <Route path='questions' element={<Questions />}>
          <Route path='questions/:id' element={<Questions />} />
        </Route> */}
          <Route path='results' element={<ResultsPage />} />
        </Route>

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  )
}
export default App
