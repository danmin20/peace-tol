import { useNavigate } from 'react-router-dom'

import { RecordListRow } from './components/RecordListRow.'
import {
  buttonWrapperCss,
  logoCss,
  recordHeaderCss,
  recordScrollBoxCss,
  wrapperCss
} from './style'
import { Button } from '../../_common/components/Button'
import { Splash } from '../../_common/components/Splash'
import { SplashWrapper } from '../../_common/components/SplashWrapper'
import { TargetBox } from '../../_common/components/TargetBox'
import { Logo } from '../../assets'

const dummy = [
  {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    level: 1,
    rating: 3
  },
  {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    level: 2,
    rating: 4
  },
  {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    level: 3,
    rating: 5
  },
  {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    level: 1,
    rating: 2
  },
  {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    level: 2,
    rating: 3
  },
  {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    level: 3,
    rating: 4
  }
] as const

export const Main = () => {
  const navigate = useNavigate()

  return (
    <SplashWrapper splash={<Splash />}>
      <div css={wrapperCss}>
        <Logo css={logoCss} />
        <TargetBox />

        <div css={recordHeaderCss}>
          <p>나의 모험 기록</p>
        </div>
        <div css={recordScrollBoxCss}>
          {dummy.map((record, index) => (
            <RecordListRow key={index} {...record} />
          ))}
        </div>
        <div css={buttonWrapperCss}>
          <Button
            onAnimationCompleteClick={() => navigate('/level-select')}
            style={{ height: '80px' }}
            isFullWidth
          >
            나만의 모험 떠나기
          </Button>
        </div>
      </div>
    </SplashWrapper>
  )
}
