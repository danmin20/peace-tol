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
}

export const Question = ({ stage }: Props) => {
  const content = questions[stage]

  return (
    <div>
      <div>Q</div>
      <div>{content.question}</div>
    </div>
  )
}
