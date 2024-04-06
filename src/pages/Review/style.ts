import { css } from '@emotion/react'

import { color } from '../../_common/styles/color'

export const wrapperCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 24px;
`

export const iconCss = css`
  width: 75px;
  height: 75px;
  margin-top: 100px;
  margin-bottom: 34px;
  background-color: grey;
`

export const titleCss = css`
  margin-bottom: 16px;
  font-size: 27px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  white-space: nowrap;
`

export const descriptionCss = css`
  margin-bottom: 26px;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  color: ${color.gray2};
  white-space: nowrap;
`

export const inputCss = css`
  width: 100%;
  padding: 16px 28px;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  border: 1px solid ${color.gray3};
  border-radius: 12px;
  color: ${color.gray1};
  ::placeholder {
    color: ${color.gray2};
  }
`

export const nextIconCss = css`
  position: absolute;
  right: 38px;
  bottom: 57px;
  width: 53px;
  height: 53px;
  cursor: pointer;
`
