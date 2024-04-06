import {
  logoCss,
  peaceTolTextCss,
  subTitleCss,
  titleCss,
  wrapperCss
} from './style'
import { LogoWhite } from '../../../assets'

export const Splash = () => {
  return (
    <div css={wrapperCss}>
      <p css={peaceTolTextCss}>‘Peace’ -tol</p>
      <LogoWhite css={logoCss} />
      <p css={titleCss}>피스톨</p>
      <p css={subTitleCss}>— 평화로움을 새로이 깨다</p>
    </div>
  )
}
