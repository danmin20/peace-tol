import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Rating } from './components/Rating'
import { nextIconCss, titleCss, wrapperCss } from './style'
import { Next } from '../../assets'

export const Survey = () => {
  const [selected, setSelected] = useState(5)
  const navigate = useNavigate()

  const handleNextClick = () => {
    navigate('/review')
  }

  return (
    <div css={wrapperCss}>
      <h1 css={titleCss}>모험은 어떠셨나요?</h1>
      <Rating selected={selected} onSelected={setSelected} />
      <Next css={nextIconCss} onClick={handleNextClick} />
    </div>
  )
}
