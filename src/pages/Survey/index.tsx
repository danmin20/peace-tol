import { titleCss, wrapperCss } from './style'
import { Next } from '../../assets'

export const Survey = () => {
  return (
    <div css={wrapperCss}>
      <h1 css={titleCss}>여정은 어떠셨나요?</h1>
      <div />
      <Next />
    </div>
  )
}
