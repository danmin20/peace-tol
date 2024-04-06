import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonGroup, FinishButtonStyle, LayoutStyle, TextGroup } from './style'
import { Button } from '../../_common/components/Button'
import { Header } from '../../_common/components/Header'

type LevelType = {
  level: number
  time: string
  type: 'primary' | 'secondary' | 'tertiary'
}

const levels: LevelType[] = [
  { level: 1, time: '1시간', type: 'primary' },
  { level: 2, time: '2시간', type: 'secondary' },
  { level: 3, time: '3시간', type: 'tertiary' }
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
            여정 <span>난이도</span>를 골라봐요
          </div>
          <div>
            {level ? `평균적으로 ${levelMap[level].time} 정도 소요돼요` : ''}
          </div>
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

        <div css={FinishButtonStyle}>
          <Button disabled={level === undefined} isFullWidth>
            선택 완료!
          </Button>
        </div>
      </div>
    </>
  )
}
