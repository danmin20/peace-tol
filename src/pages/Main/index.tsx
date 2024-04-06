import { logoCss, wrapperCss } from './style'
import { Splash } from '../../_common/components/Splash'
import { SplashWrapper } from '../../_common/components/SplashWrapper'
import { Logo } from '../../assets'

export const Main = () => {
  return (
    <SplashWrapper splash={<Splash />}>
      <div css={wrapperCss}>
        <Logo css={logoCss} />
      </div>
    </SplashWrapper>
  )
}
