import { useState } from 'react'

import { ButtonStyle, Buttons, QStyle, QuestionStyle, Wrapper } from './style'

const questions: {
  question: string
  answers: { value: string; content: string }[]
}[] = [
  {
    question: '혹시 지금 상태는 어때요?',
    answers: [
      {
        value: 'HUNGRY',
        content: '배고파요'
      },
      {
        value: 'THIRSTY',
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
        value: 'RIVER',
        content: '냇가'
      },
      {
        value: 'CINEMA',
        content: '영화관'
      },
      {
        value: 'KARAOKE',
        content: '코인노래방'
      }
    ]
  }
]

type Props = {
  onConfirm: () => void
}

export const Question = ({ onConfirm }: Props) => {
  const [questionStage, setQuestionStage] = useState<number>(0)

  const handleConfirm = async (value: string) => {
    if (value === 'FINE') {
      setQuestionStage(1)
      return
    }
    onConfirm()
  }

  return (
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
  )
}
