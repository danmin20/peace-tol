import { useMutation } from '@tanstack/react-query'
import { motion, AnimatePresence, useAnimate, cubicBezier } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Progress } from './components/Progress'
import { Question } from './components/Question'
import { RouteSplash } from './components/RouteSplash'
import {
  Buttons,
  ContentStyle,
  DimmedStyle,
  EmptyIcon,
  LayoutStyle
} from './style'
import { postAdventure } from '../../_common/api/adventure.api'
import { Ballon } from '../../_common/components/Ballon'
import { Header } from '../../_common/components/Header'
import { SplashWrapper } from '../../_common/components/SplashWrapper'
import { getUser } from '../../_common/utils/user'
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
  },
  {
    content: 'zzz',
    ballon: '시작이 반이니까요'
  },
  {
    content: 'asdfasdf',
    ballon: '시작이 반이니까요'
  }
]

export const Route = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [scope, animate] = useAnimate()

  const [stage, setStage] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [isQuestionTime, setIsQuestionTime] = useState<boolean>(false)

  const postAdventureMutate = useMutation(postAdventure)

  const handleStart = async () => {
    const uuid = getUser()
    const difficulty = location.state?.level

    if (uuid === null || !difficulty) return

    await postAdventureMutate.mutateAsync({
      userUuid: uuid,
      difficulty
    })
    navigate('/route', { state: { level: difficulty } })
  }

  const handleBack = () => {
    if (stage === 0) {
      navigate('/', {
        state: { level: location.state?.level ?? undefined }
      })
      return
    }
    if (isQuestionTime) {
      setIsQuestionTime(false)
      return
    }
    setStage(stage - 1)
  }

  const handleNext = () => {
    const isQuestionStage = stage === 3 || stage === 6 || stage === 8
    if (isQuestionStage) {
      setIsQuestionTime(true)
      return
    }

    setStage(stage + 1)

    // if (stage === dummy.length - 1) {
    //   navigate('/survey')
    //   return
    // }
  }

  const contentHtml = parser.parseFromString(dummy[stage]?.content, 'text/html')
    .body.innerHTML

  useEffect(() => {
    if (scope.current == null) return
    animate(
      scope.current,
      { opacity: isPaused ? 0 : 1 },
      { duration: 0.3, ease: 'easeOut' }
    )
  }, [isPaused])

  useEffect(() => {
    handleStart()
  }, [])

  return (
    <SplashWrapper
      splash={<RouteSplash />}
      loading={postAdventureMutate.isLoading}
    >
      <Header
        handleBack={handleBack}
        extra={<Progress stage={stage} total={dummy.length} />}
      />
      {isQuestionTime && (stage === 3 || stage === 6 || stage === 8) ? (
        <Question
          stage={stage}
          setStage={setStage}
          setIsQuestionTime={setIsQuestionTime}
        />
      ) : (
        <div css={LayoutStyle}>
          <Header
            handleBack={handleBack}
            extra={<Progress stage={stage} total={dummy.length} />}
          />
          <motion.div
            key={stage}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={dummy[stage].imagePath} width="100%" />
          </motion.div>

          <div css={ContentStyle}>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <Ballon
              key={stage}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: cubicBezier(0.34, 1.56, 0.64, 1)
              }}
            >
              {dummy[stage].ballon.split('').map((textItem, idx) => (
                <motion.span
                  key={textItem + idx}
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  transition={{ duration: 0.1, delay: 1 + idx * 0.08 }}
                  style={{
                    // NOTE: 공백이 들어갈 경우 inline 처리하여 사이즈를 잡아줌
                    display: textItem === ' ' ? 'inline' : 'inline-block'
                  }}
                >
                  {textItem}
                </motion.span>
              ))}
            </Ballon>
          </div>

          <div css={Buttons}>
            <motion.div ref={scope} whileTap={{ scale: 0.9 }}>
              <Pause onClick={() => setIsPaused(true)} />
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }}>
              <Skip onClick={handleNext} />
            </motion.div>
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
              <motion.div whileTap={{ scale: 0.9 }}>
                <Play onClick={() => setIsPaused(false)} />
              </motion.div>
              <div css={EmptyIcon} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SplashWrapper>
  )
}
