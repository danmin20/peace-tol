import { useNavigate } from 'react-router-dom'

import { Button } from '../../_common/components/Button'
import { Splash } from '../../_common/components/Splash'

export const OnBoarding = () => {
  const navigate = useNavigate()

  const handleStartClick = () => {
    navigate('/level-select')
  }

  return (
    <>
      <Splash />
      <div>온보딩 페이지</div>
      <Button isFullWidth onClick={handleStartClick}>
        시작하기
      </Button>
    </>
  )
}
