import { css } from '@emotion/react'

import { color } from '../../_common/styles/color'

export const LayoutStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 50px);
  padding: 39px 24px 62px;
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
    span {
      color: ${color.red};
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

export const stageInfo = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: ${color.red};
  margin-top: 31px;

  svg {
    width: 200px;
  }
`
