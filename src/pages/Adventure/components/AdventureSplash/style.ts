import { css } from '@emotion/react'

import { color } from '../../../../_common/styles/color'

export const wrapperCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${color.white};
  z-index: 2;
`

export const titleCss = css`
  font-size: 28px;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 46px;
`

export const logoCss = css`
  width: 124px;
  height: 124px;
`
