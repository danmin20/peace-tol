import { motion, cubicBezier } from 'framer-motion'
import { random } from 'lodash'
import { useState } from 'react'

import { ButtonStyle, Buttons, QStyle, QuestionStyle, Wrapper } from './style'
import { MissionDto } from '../../../../__generated__/swagger'
import { Ballon } from '../../../../_common/components/Ballon'
import { ContentStyle, LayoutStyle } from '../../style'
import { AnswerType } from '../../types/adventure.type'
import { getContentHtml } from '../../utils/parse-html'

const questions: {
  question: string
  answers: { value: AnswerType | 'FINE'; content: string }[]
}[] = [
  {
    question: '혹시 지금 상태는 어때요?',
    answers: [
      {
        value: 'Hungry',
        content: '배고파요'
      },
      {
        value: 'Thirsty',
        content: '목말라요'
      },
      {
        value: 'FINE',
        content: '괜찮아요'
      }
    ]
  },
  {
    question: '주위에 무엇이 있나요?',
    answers: [
      {
        value: 'WaterSide',
        content: '냇가'
      },
      {
        value: 'Theater',
        content: '영화관'
      },
      {
        value: 'Karaoke',
        content: '코인노래방'
      }
    ]
  }
]

const randomNumber = random(1, 3)

const middleStage: Record<'Hungry' | 'Thirsty', MissionDto> = {
  Hungry: {
    imagePath: '/restaurant.png',
    body: `<span>${randomNumber}번째</span>로 보이는 음식점에 들어가보세요.`,
    quote: '평소에 안 가던 곳이라도 말이죠.'
  },
  Thirsty: {
    imagePath: '/restaurant.png',
    body: `<span>${randomNumber}번째</span>로 보이는 카페에 들어가보세요.`,
    quote: '쉬다 가세요!'
  }
}

type Props = {
  onConfirm: (value: AnswerType) => void
}

export const Question = ({ onConfirm }: Props) => {
  const [questionStage, setQuestionStage] = useState<number>(0)
  const [answer, setAnswer] = useState<'Hungry' | 'Thirsty' | null>(null)

  const handleConfirm = async (value: AnswerType | 'FINE') => {
    if (value === 'FINE') {
      setQuestionStage(1)
      return
    }
    if (value === 'Hungry' || value === 'Thirsty') {
      setAnswer(value)
      return
    }
    onConfirm(value)
  }

  return !answer ? (
    <div css={Wrapper}>
      <div css={QStyle}>Q</div>
      <div css={QuestionStyle}>{questions[questionStage].question}</div>
      <div css={Buttons}>
        {questions[questionStage].answers.map((answer) => (
          <button
            key={answer.value}
            css={ButtonStyle}
            onClick={() => handleConfirm(answer.value)}
          >
            {answer.content}
          </button>
        ))}
      </div>
    </div>
  ) : (
    <div css={LayoutStyle}>
      <motion.div
        key={answer}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <img src={middleStage[answer].imagePath} width="100%" />
      </motion.div>

      <div css={ContentStyle}>
        <div
          dangerouslySetInnerHTML={{
            __html: getContentHtml(middleStage[answer].body ?? '')
          }}
        />
        <Ballon
          key={answer}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: cubicBezier(0.34, 1.56, 0.64, 1)
          }}
        >
          {middleStage[answer].quote.split('').map((textItem, idx) => (
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

        <button
          key={answer}
          css={ButtonStyle}
          onClick={() => onConfirm(answer)}
        >
          들어왔어요!
        </button>
      </div>
    </div>
  )
}
