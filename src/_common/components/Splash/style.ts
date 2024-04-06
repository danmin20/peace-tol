import { css } from '@emotion/react'

import { color } from '../../styles/color'

export const wrapperCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color.white};
  z-index: 2;
`

export const logoCss = css`
  width: 180px;
  height: 180px;
  margin-bottom: 35px;
`

export const titleCss = css`
  font-family: HANAMDAUM;
  font-size: 24px;
  font-weight: 400;
  line-height: 27.6px;
  color: ${color.red};
`

export const splash2WrapperCss = css`
  ${wrapperCss}
  background-color: ${color.red};
`

export const nameCss = css`
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.88px;
  color: ${color.red2};
  margin-bottom: 34px;
`

export const splash2TitleCss = css`
  font-size: 28px;
  font-weight: 300;
  line-height: 44px;
  color: ${color.white};
  text-align: center;
  span {
    font-weight: 700;
  }
`

export const bottomTextCss = css`
  position: absolute;
  bottom: 130px;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.48px;
  color: ${color.white};
`
