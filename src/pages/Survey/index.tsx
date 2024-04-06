import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Rating } from './components/Rating'
import { SurveySplash } from './components/SurveySplash'
import { iconCss, spacingCss, titleCss, wrapperCss } from './style'
import { Button } from '../../_common/components/Button'
import { SplashWrapper } from '../../_common/components/SplashWrapper'
import { Logo } from '../../assets'

export const Survey = () => {
  const [selected, setSelected] = useState(5)
  const navigate = useNavigate()

  const handleNextClick = () => {
    navigate('/')
  }

  return (
    <SplashWrapper splash={<SurveySplash />}>
      <div css={wrapperCss}>
        <Logo css={iconCss} />
        <h1 css={titleCss}>모험은 어떠셨나요?</h1>
        <Rating selected={selected} onSelected={setSelected} />
        <div css={spacingCss} />
        <Button onAnimationCompleteClick={handleNextClick} isFullWidth>
          메인으로
        </Button>
      </div>
    </SplashWrapper>
  )
}
