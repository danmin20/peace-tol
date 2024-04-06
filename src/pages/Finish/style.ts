import { css } from '@emotion/react'

import { color } from '../../_common/styles/color'

export const wrapperCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${color.white};
  z-index: 2;
`

export const logoCss = css`
  width: 90px;
  height: 90px;
  margin-bottom: 40px;
`

export const titleCss = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
  margin-bottom: 40px;
`

export const clipboard = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 50px;
  font-size: 19px;
  font-weight: 600;
  line-height: 31.54px;
  color: ${color.gray2};
`

export const alert = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${color.red};
  margin-top: 30px;
`
