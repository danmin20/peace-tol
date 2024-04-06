import { useNavigate } from 'react-router-dom'

import { Button } from '../../_common/components/Button'
import { Splash } from '../../_common/components/Splash'
import { SplashWrapper } from '../../_common/components/SplashWrapper'

export const OnBoarding = () => {
  const navigate = useNavigate()

  const handleStartClick = () => {
    navigate('/level-select')
  }

  return (
    <SplashWrapper splash={<Splash />}>
      <div>온보딩 페이지</div>
      <Button onAnimationCompleteClick={handleStartClick} isFullWidth>
        시작하기
      </Button>
    </SplashWrapper>
  )
}
