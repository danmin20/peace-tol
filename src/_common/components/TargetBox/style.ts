import { css } from '@emotion/react'

import { color } from '../../styles/color'

export const levelWrapperCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
  padding: 0 12px;
`

export const levelTextCss = css`
  font-family: GeekbleMalang2;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
`

export const targetBoxCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  padding: 0 26px;
  border-radius: 16px;
  box-shadow: 0px 5px 30px 0px rgba(97, 97, 97, 0.2);
  background-color: ${color.white};
`

export const targetIconCss = css`
  width: 40px;
  height: 40px;
`
