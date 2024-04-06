import { motion, cubicBezier } from 'framer-motion'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { AdventureSplash } from './components/AdventureSplash'
import { Progress } from './components/Progress'
import { Question } from './components/Question'
import { BullseyeText, ContentStyle, EndButton, LayoutStyle } from './style'
import { useGetAdventure } from '../../_common/api/adventure.api'
import { Ballon } from '../../_common/components/Ballon'
import { Header } from '../../_common/components/Header'
import { SplashWrapper } from '../../_common/components/SplashWrapper'
import { Bullseye, LogoFilled } from '../../assets'

const parser = new DOMParser()

export const Adventure = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [stage, setStage] = useState<number>(0)
  const [isQuestionTime, setIsQuestionTime] = useState<boolean>(false)
  const [isShoot, setIsShoot] = useState<boolean>(false)

  const adventureId = location.pathname.split('/adventure/')[1]

  const {
    data: adventure,
    isLoading,
    refetch
  } = useGetAdventure(adventureId, {
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
    const isQuestionStage = stage === 3 || stage === 6
    if (isQuestionStage) {
      setIsQuestionTime(true)
      return
    }

    setStage(stage + 1)

    if (!adventure?.missions || stage === adventure?.missions.length - 1) {
      navigate('/survey')
      return
    }
  }

  const handleQuestion = async () => {
    if (stage === 3) {
      // next step
      await refetch()
    }
    if (stage === 6) {
      // final step
      await refetch()
    }
    setStage(stage + 1)
    setIsQuestionTime(false)
  }

  const contentHtml = parser.parseFromString(
    adventure?.missions[stage]?.body ?? '',
    'text/html'
  ).body.innerHTML

  return (
    <SplashWrapper splash={<AdventureSplash />} loading={isLoading}>
      <Header
        handleBack={handleBack}
        extra={
          <Progress stage={stage} total={adventure?.missions.length ?? 0} />
        }
      />
      {isQuestionTime && (stage === 3 || stage === 6) ? (
        <Question onConfirm={handleQuestion} />
      ) : (
        <div css={LayoutStyle}>
          <Header
            handleBack={handleBack}
            extra={
              <Progress stage={stage} total={adventure?.missions.length ?? 0} />
            }
          />
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

          <motion.div
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'absolute',
              bottom: '136px'
            }}
          >
            <Bullseye onClick={() => setIsShoot(true)} />
          </motion.div>
          {isShoot && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                bottom: '118px'
              }}
              onAnimationComplete={handleNext}
            >
              <LogoFilled />
            </motion.div>
          )}
          {stage === 0 && (
            <div css={BullseyeText}>
              해당 단계를 완료하면 과녁을 눌러주세요!
            </div>
          )}
          <div css={EndButton}>모험 포기</div>
        </div>
      )}
    </SplashWrapper>
  )
}
