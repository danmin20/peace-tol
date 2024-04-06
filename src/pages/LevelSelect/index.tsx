import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  ButtonGroup,
  FinishButtonStyle,
  LayoutStyle,
  StageInfo,
  TextGroup,
  checkIcon,
  wrapperButton
} from './style'
import { Button } from '../../_common/components/Button'
import { Header } from '../../_common/components/Header'
import { Check, Gun1, Gun2, Gun3 } from '../../assets'

type LevelType = {
  level: number
  stage: number
  label: string
  type: 'primary' | 'secondary' | 'tertiary'
  img: JSX.Element
}

// easy, normal, hard -> 4개가 지나고 나서 요청
// normal, hard -> 7개가 지나고 나서 요청

const levels: LevelType[] = [
  { level: 1, stage: 5, label: 'easy', type: 'tertiary', img: <Gun1 /> },
  { level: 2, stage: 8, label: 'normal', type: 'secondary', img: <Gun2 /> },
  { level: 3, stage: 10, label: 'hard', type: 'primary', img: <Gun3 /> }
]

const levelMap = levels.reduce(
  (acc, cur) => {
    acc[cur.level] = cur
    return acc
  },
  {} as Record<number, (typeof levels)[0]>
)

export const LevelSelect = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [selectedLevel, setSelectedLevel] = useState<number>(
    location.state?.level ?? undefined
  )

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
          {levels.map(({ level, label, type }) => (
            <div key={level} css={wrapperButton}>
              {level === selectedLevel && (
                <motion.div
                  initial={{ y: -5 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity }}
                  css={checkIcon}
                >
                  <Check />
                </motion.div>
              )}
              <Button colorType={type} onClick={() => setSelectedLevel(level)}>
                {label.toUpperCase()}
              </Button>
            </div>
          ))}
        </div>

        {selectedLevel && (
          <div css={StageInfo}>
            <div>{levelMap[selectedLevel].stage}단계로 이루어져 있어요.</div>
            {levelMap[selectedLevel].img}
          </div>
        )}

        <div css={FinishButtonStyle}>
          <Button
            disabled={selectedLevel === undefined}
            isFullWidth
            onClick={() =>
              navigate('/route', { state: { level: selectedLevel } })
            }
          >
            선택 완료!
          </Button>
        </div>
      </div>
    </>
  )
}
