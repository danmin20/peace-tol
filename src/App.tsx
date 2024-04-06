import { Route, Routes } from 'react-router-dom'

import { Layout } from './_common/components/Layout'
// import { Main } from './pages/Main'
// import { OnBoarding } from './pages/OnBoarding'
import { LevelSelect } from './pages/LevelSelect'
import { Review } from './pages/Review'
import { Route as RoutePage } from './pages/Route'
import { Survey } from './pages/Survey'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LevelSelect />} />
        {/* <Route path="main" element={<Main />} /> */}
        {/* <Route path="level-select" element={<LevelSelect />} /> */}
        <Route path="route" element={<RoutePage />} />
        <Route path="survey" element={<Survey />} />
        <Route path="review" element={<Review />} />
      </Route>
    </Routes>
  )
}
