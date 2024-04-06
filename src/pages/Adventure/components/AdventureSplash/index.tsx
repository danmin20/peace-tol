import { logoCss, titleCss, wrapperCss } from './style'
import { Logo } from '../../../../assets'

export const AdventureSplash = () => {
  return (
    <div css={wrapperCss}>
      <h1 css={titleCss}>
        환영합니다!
        <br />
        랜덤 모험을 시작해봐요.
      </h1>
      <Logo css={logoCss} />
    </div>
  )
}
