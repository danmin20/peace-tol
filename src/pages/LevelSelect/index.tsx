import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  ButtonGroup,
  LayoutStyle,
  stageInfo,
  TextGroup,
  checkIcon,
  wrapperButton
} from './style'
import { usePostAdventureMutation } from '../../_common/api/adventure.api'
import { postUser } from '../../_common/api/user.api'
import { Button } from '../../_common/components/Button'
import { Header } from '../../_common/components/Header'
import { getUser, setUser } from '../../_common/utils/user'
import { Check, Gun1, Gun2, Gun3, GunLine } from '../../assets'

type LevelType = {
  level: number
  stage: number
  label: string
  type: 'primary' | 'secondary' | 'tertiary'
  img: JSX.Element
}

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

  const postAdventureMutation = usePostAdventureMutation()

  const [selectedLevel, setSelectedLevel] = useState<number>(
    location.state?.level ?? undefined
  )

  const handleSetUser = async () => {
    if (!getUser()) {
      const data = await postUser()
      setUser(data.uuid)
    }
  }

  const createAdventure = async () => {
    const uuid = getUser()
    if (uuid === null || selectedLevel === undefined) return

    const data = await postAdventureMutation.mutateAsync({
      userUuid: uuid,
      difficulty: selectedLevel
    })

    navigate(`/adventure/${data.id}`, {
      state: { level: selectedLevel }
    })
  }

  useEffect(() => {
    handleSetUser()
  }, [])

  return (
    <>
      <Header handleBack={() => navigate('/')} />
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
                  transition={{ duration: 1, repeat: Infinity }}
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

        {selectedLevel ? (
          <div css={stageInfo}>
            <div
              style={{
                position: 'absolute',
                top: '-15px'
              }}
            >
              {levelMap[selectedLevel].stage}단계로 이루어져 있어요.
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLevel}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {levelMap[selectedLevel].img}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div css={stageInfo}>
            <GunLine />
          </div>
        )}

        <div style={{ height: '100%' }} />
        <Button
          disabled={selectedLevel === undefined}
          isFullWidth
          onAnimationCompleteClick={createAdventure}
          isLoading={postAdventureMutation.isLoading}
        >
          선택 완료!
        </Button>
      </div>
    </>
  )
}
