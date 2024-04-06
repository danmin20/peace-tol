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
  background-color: ${color.red};
`

export const peaceTolTextCss = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.09px;
  margin-bottom: 30px;
  opacity: 0.7;
  color: ${color.white};
`

export const logoCss = css`
  width: 180px;
  height: 180px;
  margin-bottom: 24px;
`

export const titleCss = css`
  font-family: 'neurimboGothicRegular2';
  margin-bottom: 21px;
  font-size: 28px;
  font-weight: 400;
  line-height: 46.2px;
  color: ${color.white};
`

export const subTitleCss = css`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.48px;
  color: ${color.white};
`
