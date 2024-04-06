import { css } from '@emotion/react'

import { color } from '../../_common/styles/color'

export const wrapperCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 62px 30px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: ${color.white};
  z-index: 2;
`

export const logoCss = css`
  width: 80px;
  height: 80px;
  margin-bottom: 35px;
`

export const titleCss = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
  margin-bottom: 35px;
`

export const clipboard = css`
  svg {
    width: 23px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
  font-size: 15px;
  font-weight: 600;
  line-height: 31.54px;
`
