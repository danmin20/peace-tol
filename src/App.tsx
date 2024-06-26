import { Route, Routes } from 'react-router-dom'

import { Layout } from './_common/components/Layout'
import { Adventure } from './pages/Adventure'
import { Finish } from './pages/Finish'
import { LevelSelect } from './pages/LevelSelect'
import { Main } from './pages/Main'
import { Survey } from './pages/Survey'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="level-select" element={<LevelSelect />} />
        <Route path="adventure/:id" element={<Adventure />} />
        <Route path="survey" element={<Survey />} />
        <Route path="finish" element={<Finish />} />
      </Route>
    </Routes>
  )
}
