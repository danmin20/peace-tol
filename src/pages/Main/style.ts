import { css } from '@emotion/react'

import { color } from '../../_common/styles/color'

export const wrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  /* padding: 0 30px; */
`

export const logoCss = css`
  flex-shrink: 0;
  width: 66px;
  height: 66px;
  margin-top: 14px;
  margin-bottom: 70px;
`

export const recordHeaderCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 44px;
  margin-bottom: 12px;
  padding: 0 30px;
  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    color: ${color.red};
  }
`

export const recordScrollBoxCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 9px;
  margin-bottom: 50px;
  overflow-y: auto;
  padding: 16px;
  div {
    flex-shrink: 0;
  }
`
