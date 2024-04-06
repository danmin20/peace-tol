import { Route, Routes } from 'react-router-dom'

import { Layout } from './_common/components/Layout'
import { OnBoarding } from './pages/OnBoarding'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<OnBoarding />} />
        <Route path="/main" element={<div>메인 페이지</div>} />
      </Route>
    </Routes>
  )
}
