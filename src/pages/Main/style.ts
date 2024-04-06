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

export const targetBoxCss = css`
  width: 100%;
  padding: 0 30px;
`

export const recordHeaderCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 44px;
  margin-bottom: 10px;
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
  width: 100%;
  height: 100%;
  gap: 9px;
  margin-bottom: 40px;
  overflow-y: auto;
  padding: 18px 30px;
  div {
    flex-shrink: 0;
  }
`

export const emptyRecordCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  width: 100%;
  height: 88px;
  background-color: ${color.white};
  box-shadow: 0px 5px 20px 0px rgba(97, 97, 97, 0.15);

  border-radius: 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.32px;
  padding: 0 24px;
  color: ${color.gray2};
`

export const buttonWrapperCss = css`
  width: 100%;
  padding: 0 30px;
  padding-bottom: 47px;
`
