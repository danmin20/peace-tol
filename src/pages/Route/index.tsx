import { motion, AnimatePresence, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Progress } from './components/Progress'
import { Question } from './components/Question'
import {
  Buttons,
  ContentStyle,
  DimmedStyle,
  EmptyIcon,
  EmptyStyle,
  LayoutStyle
} from './style'
import { Ballon } from '../../_common/components/Ballon'
import { Header } from '../../_common/components/Header'
import { Pause, Play, Skip } from '../../assets'

const parser = new DOMParser()

const dummy = [
  {
    imagePath: '/bus_station.png',
    content: '먼저, 이곳에서 가장 가까운 <span>버스 정류장</span>으로 가세요',
    ballon: '시작이 반이니까요'
  },
  {
    content: '오는 버스 아무거나 타세요!',
    ballon: '시작이 반이니까요'
  }
]

export const Route = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [scope, animate] = useAnimate()

  const [stage, setStage] = useState<number>(1)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [isQuestionTime, setIsQuestionTime] = useState<boolean>(false)

  const handleBack = () => {
    if (stage === 1) {
      navigate('/level-select', {
        state: { level: location.state?.level ?? undefined }
      })
      return
    }
    setStage(stage - 1)
  }

  const handleNext = () => {
    if (stage === dummy.length) {
      navigate('/survey')
      return
    }
    // const isQuestionTime = stage === 5 || stage === 8 || stage === 10
    const isQuestionTime = true
    if (isQuestionTime) {
      setIsQuestionTime(true)
      return
    }

    setStage(stage + 1)
  }

  const contentHtml = parser.parseFromString(dummy[stage].content, 'text/html')
    .body.innerHTML

  useEffect(() => {
    animate(
      scope.current,
      { opacity: isPaused ? 0 : 1 },
      { duration: 0.3, ease: 'easeOut' }
    )
  }, [isPaused])

  return (
    <>
      {isQuestionTime ? (
        <Question stage={stage} setIsQuestionTime={setIsQuestionTime} />
      ) : (
        <div css={LayoutStyle}>
          <Header
            handleBack={handleBack}
            extra={<Progress stage={stage} total={dummy.length} />}
          />
          {dummy[stage - 1].imagePath ? (
            <img src={dummy[stage - 1].imagePath} />
          ) : (
            <div css={EmptyStyle} />
          )}

          <div css={ContentStyle}>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <Ballon>{dummy[stage].ballon}</Ballon>
          </div>

          <div css={Buttons}>
            <span ref={scope}>
              <Pause onClick={() => setIsPaused(true)} />
            </span>
            <Skip onClick={handleNext} />
          </div>
        </div>
      )}

      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            css={DimmedStyle}
          >
            <Ballon isAlert>
              예상치 못한 상황이 있나요?
              <br />
              준비가 되면 다시 시작해주세요!
            </Ballon>
            <div css={Buttons}>
              <Play onClick={() => setIsPaused(false)} />
              <div css={EmptyIcon} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
