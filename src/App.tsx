import { Route, Routes } from 'react-router-dom'

import { Layout } from './_common/components/Layout'
import { LevelSelect } from './pages/LevelSelect'
import { Main } from './pages/Main'
import { OnBoarding } from './pages/OnBoarding'
import { Route as RoutePage } from './pages/Route'
import { Survey } from './pages/Survey'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<OnBoarding />} />
        <Route path="main" element={<Main />} />
        <Route path="level-select" element={<LevelSelect />} />
        <Route path="route" element={<RoutePage />} />
        <Route path="survey" element={<Survey />} />
      </Route>
    </Routes>
  )
}
