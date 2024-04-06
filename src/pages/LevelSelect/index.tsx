import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  ButtonGroup,
  FinishButtonStyle,
  LayoutStyle,
  StageInfo,
  TextGroup
} from './style'
import { Button } from '../../_common/components/Button'
import { Header } from '../../_common/components/Header'
import { Gun1, Gun2, Gun3 } from '../../assets'

type LevelType = {
  level: number
  stage: number
  type: 'primary' | 'secondary' | 'tertiary'
  img: JSX.Element
}

const levels: LevelType[] = [
  { level: 1, stage: 5, type: 'tertiary', img: <Gun1 /> },
  { level: 2, stage: 8, type: 'secondary', img: <Gun2 /> },
  { level: 3, stage: 10, type: 'primary', img: <Gun3 /> }
]

const levelMap = levels.reduce(
  (acc, cur) => {
    acc[cur.level] = cur
    return acc
  },
  {} as Record<number, (typeof levels)[0]>
)

export const LevelCheck = () => {
  const navigate = useNavigate()

  const [level, setLevel] = useState<number>()

  return (
    <>
      <Header handleBack={() => navigate('/main')} />
      <div css={LayoutStyle}>
        <div css={TextGroup}>
          <div>
            모험 <span>난이도</span>를 골라봐요
          </div>
          <div>평균적으로 2시간에서 4시간 정도 소요돼요</div>
        </div>

        <div css={ButtonGroup}>
          {levels.map(({ level, type }) => (
            <Button
              key={level}
              colorType={type}
              onClick={() => setLevel(level)}
            >
              {level}단계
            </Button>
          ))}
        </div>

        {level && (
          <div css={StageInfo}>
            <div>{levelMap[level].stage}단계로 이루어져 있어요.</div>
            {levelMap[level].img}
          </div>
        )}

        <div css={FinishButtonStyle}>
          <Button disabled={level === undefined} isFullWidth>
            선택 완료!
          </Button>
        </div>
      </div>
    </>
  )
}
