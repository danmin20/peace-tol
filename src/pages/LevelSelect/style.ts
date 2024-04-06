import { css } from '@emotion/react'

import { color } from '../../_common/styles/color'

export const LayoutStyle = css`
  padding: 0px 35px;
  padding-top: 39px;
  width: 100%;
  line-height: 32px;
`

export const TextGroup = css`
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    :nth-of-type(1) {
      font-size: 24px;
      font-weight: 700;
      span: {
        color: ${color.red};
      }
    }
    :nth-of-type(2) {
      font-size: 16px;
      font-weight: 600;
      color: ${color.gray2};
    }
  }
`

export const ButtonGroup = css`
  display: flex;
  gap: 19px;
  margin-top: 48px;
  align-items: center;
  justify-content: center;
  button {
    width: 100%;
  }
`

export const wrapperButton = css`
  position: relative;
  width: 100%;
`

export const checkIcon = css`
  position: absolute;
  left: calc(50% - 17px);
  top: calc(-50% - 10px);
`

export const StageInfo = css`
  display: flex;
  flex-direction: column;
  gap: 37px;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: ${color.red};
  margin-top: 43px;
`

export const FinishButtonStyle = css`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 62px;
  padding: 0px 24px;
`
