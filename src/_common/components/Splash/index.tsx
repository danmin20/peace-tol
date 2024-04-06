import {
  bottomTextCss,
  logoCss,
  nameCss,
  splash2TitleCss,
  splash2WrapperCss,
  titleCss,
  wrapperCss
} from './style'
import { Logo } from '../../../assets'
import { SplashWrapper } from '../SplashWrapper'

export const Splash = () => {
  return (
    <SplashWrapper splash={<Splash1 />}>
      <Splash2 />
    </SplashWrapper>
  )
}

const Splash1 = () => {
  return (
    <div css={wrapperCss}>
      <Logo css={logoCss} />
      <p css={titleCss}>피스톨</p>
    </div>
  )
}

const Splash2 = () => {
  return (
    <div css={splash2WrapperCss}>
      <p css={nameCss}>Peace-tol</p>
      <div css={splash2TitleCss}>
        <span>평화</span>로움을
        <br />
        새로이 <span>깨다</span>
      </div>
      <p css={bottomTextCss}>예측불가한 랜덤 모험 떠나기</p>
    </div>
  )
}
