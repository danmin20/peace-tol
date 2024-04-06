import { ButtonStyle, Buttons, QStyle, QuestionStyle, Wrapper } from './style'
import { Header } from '../../../../_common/components/Header'

const questions: Record<
  number,
  { question: string; answers?: { value: string; content: string }[] }
> = {
  5: {
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
  8: {
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
  },
  10: {
    question: '지금 한 사람을 생각해보세요'
  }
}

type Props = {
  stage: number
  setIsQuestionTime: (value: boolean) => void
}

export const Question = ({ stage, setIsQuestionTime }: Props) => {
  // const content = questions[stage]
  const content = questions[5]

  return (
    <div css={Wrapper}>
      <Header handleBack={() => setIsQuestionTime(false)} />
      <div css={QStyle}>Q</div>
      <div css={QuestionStyle}>{content.question}</div>
      <div css={Buttons}>
        {content.answers?.map((answer) => (
          <button key={answer.value} css={ButtonStyle}>
            {answer.content}
          </button>
        ))}
      </div>
    </div>
  )
}
