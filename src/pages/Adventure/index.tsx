import { motion, cubicBezier, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { AdventureSplash } from './components/AdventureSplash'
import { Progress } from './components/Progress'
import { Question } from './components/Question'
import { BullseyeText, ContentStyle, LayoutStyle } from './style'
import { AnswerType } from './types/adventure.type'
import { getContentHtml } from './utils/parse-html'
import {
  useGetAdventure,
  usePostFinalStepMutation,
  usePostNextStepMutation
} from '../../_common/api/adventure.api'
import { Ballon } from '../../_common/components/Ballon'
import { Header } from '../../_common/components/Header'
import { SplashWrapper } from '../../_common/components/SplashWrapper'
import { getUser } from '../../_common/utils/user'
import { Bullseye, LogoFilled } from '../../assets'

export const Adventure = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [stage, setStage] = useState<number>(0)
  const [isQuestionTime, setIsQuestionTime] = useState<boolean>(false)
  const [isShoot, setIsShoot] = useState<boolean>(false)

  const postNextStepMutation = usePostNextStepMutation()
  const postFinalStepMutation = usePostFinalStepMutation()

  const adventureId = location.pathname.split('/adventure/')[1]
  const totalStage =
    location.state?.level === 1 ? 4 : location.state?.level === 2 ? 7 : 9

  const { data: adventure, refetch } = useGetAdventure(adventureId, {
    enabled: adventureId !== null
  })

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
    console.log(adventure?.endedAt)
    setIsShoot(false)
    const isQuestionStage = !adventure?.endedAt && (stage === 3 || stage === 6)

    if (isQuestionStage) {
      setIsQuestionTime(true)
      return
    }

    setStage(stage + 1)

    if (!adventure?.missions || stage === totalStage) {
      navigate('/survey', {
        state: { adventureId }
      })
      return
    }
  }

  const handleQuestion = async (answerType: AnswerType) => {
    const userUuid = getUser()
    if (!userUuid) return

    if (stage === 3) {
      await postNextStepMutation.mutateAsync({
        id: adventureId,
        body: {
          userUuid,
          answerType
        }
      })
      await refetch()
    }
    if (stage === 6) {
      await postFinalStepMutation.mutateAsync({
        id: adventureId,
        body: {
          userUuid,
          answerType
        }
      })
      await refetch()
    }
    setStage(stage + 1)
    setIsQuestionTime(false)
  }

  const contentHtml = getContentHtml(adventure?.missions[stage]?.body ?? '')

  return (
    <SplashWrapper splash={<AdventureSplash />}>
      <Header
        handleBack={handleBack}
        extra={<Progress stage={stage} total={totalStage + 1} />}
      />
      {isQuestionTime && (stage === 3 || stage === 6) ? (
        <Question onConfirm={handleQuestion} />
      ) : (
        <div css={LayoutStyle}>
          <motion.div
            key={stage}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={adventure?.missions[stage].imagePath} width="100%" />
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
              {adventure?.missions[stage].quote
                .split('')
                .map((textItem, idx) => (
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
          <AnimatePresence>
            {isShoot ? (
              <motion.div
                key="logo"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.7,
                  ease: cubicBezier(0.34, 1.56, 0.64, 1)
                }}
                onAnimationComplete={handleNext}
                style={{ position: 'absolute', bottom: '102px' }}
              >
                <LogoFilled />
              </motion.div>
            ) : (
              <motion.div
                key="bullseye"
                whileTap={{ scale: 0.9 }}
                style={{ position: 'absolute', bottom: '120px' }}
                onClick={() => setIsShoot(true)}
              >
                <Bullseye />
              </motion.div>
            )}
          </AnimatePresence>
          {stage === 0 && (
            <div css={BullseyeText}>
              해당 단계를 완료하면 과녁을 눌러주세요!
            </div>
          )}
        </div>
      )}
    </SplashWrapper>
  )
}
