import { Route, Routes } from 'react-router-dom'

import { Layout } from './_common/components/Layout'
import { LevelCheck } from './pages/LevelSelect'
import { Main } from './pages/Main'
import { OnBoarding } from './pages/OnBoarding'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<OnBoarding />} />
        <Route path="main" element={<Main />} />
        <Route path="level-check" element={<LevelCheck />} />
      </Route>
    </Routes>
  )
}
