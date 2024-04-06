import { Background, Bar } from './style'

type Props = {
  total: number
  stage: number
}

export const Progress = ({ total, stage }: Props) => {
  return (
    <div css={Background}>
      <div
        css={Bar}
        style={{
          width: `${(stage / total) * 100}%`
        }}
      />
    </div>
  )
}
