import { css } from '@emotion/react'

import { color } from '../../styles/color'

export const wrapperCss = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 96px;
  padding: 24px 26px;
  border-radius: 16px;
  box-shadow: 0px 5px 30px 0px rgba(97, 97, 97, 0.2);
  background-color: ${color.white};
`

export const stampCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #bbbbbb;
`

export const targetIconCss = css`
  width: 50px;
  height: 50px;
`

export const levelTextCss = css`
  font-family: GeekbleMalang2;
  font-size: 12px;
  font-weight: 400;
  line-height: 13.8px;
  color: ${color.red1};
`
