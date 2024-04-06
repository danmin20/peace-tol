import { css } from '@emotion/react'

import { color } from '../../styles/color'

export const levelWrapperCss = css`
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
  padding: 0 12px;
`

export const levelTextCss = css`
  font-family: GeekbleMalang2;
  font-size: 24px;
  font-weight: 400;
  line-height: 27.6px;
  white-space: nowrap;
`

export const lineGradientCss = css`
  width: 100%;
  height: 1px;
  border-radius: 4px;
  background: linear-gradient(90deg, #ff5a5a 0%, #dbdbdb 100%);
`

export const targetBoxCss = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 96px;
  padding: 24px 26px;
  border-radius: 16px;
  box-shadow: 0px 5px 30px 0px rgba(97, 97, 97, 0.2);
  background-color: ${color.white};
`

export const targetIconCss = css`
  width: 48px;
  height: 48px;
`
